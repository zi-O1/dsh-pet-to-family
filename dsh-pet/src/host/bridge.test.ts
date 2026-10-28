/**
 * 消息接入宿主纯逻辑测试：鉴权、白名单、群聊、去重、限流、报文校验、回调组装。
 * 这里不经过 HTTP 路由，直接把 headers/body 交给 processBridgeInbound；路由只做转发。
 */
import { createServer } from 'node:http';
import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  DEFAULT_BRIDGE,
  MAX_BRIDGE_BODY_BYTES,
  BridgeRuntime,
  bridgeTokenMatches,
  bridgeValid,
  isBridgeSenderAllowed,
  normalizeBridgeConfig,
  parseBridgePayload,
  postBridgeReply,
  processBridgeInbound,
  type BridgeConfig,
  type BridgeReplyRequest,
} from './bridge.ts';

const TOKEN = '0123456789abcdef0123456789abcdef';

const baseConfig = (): BridgeConfig => ({
  ...DEFAULT_BRIDGE,
  enabled: true,
  petId: 'main',
  token: TOKEN,
  whitelist: [{ platform: 'wechat', id: 'wxid_1', name: '张三' }],
});

const inboundBody = (over: Record<string, unknown> = {}): string =>
  JSON.stringify({
    platform: 'wechat',
    senderId: 'wxid_1',
    senderName: '张三',
    messageId: 'msg-1',
    text: '在吗',
    ...over,
  });

const authHeaders = (token = TOKEN): Record<string, string> => ({ authorization: 'Bearer ' + token });

const okChat = () => {
  let calls = 0;
  return {
    chat: async () => {
      calls++;
      return { ok: true as const, text: '在呢' };
    },
    calls: () => calls,
  };
};

test('normalizeBridgeConfig / bridgeValid 与共享层同边界', () => {
  const cfg = normalizeBridgeConfig({
    enabled: true,
    petId: ' main ',
    token: ' ' + TOKEN + ' ',
    whitelist: ['wechat:wxid_1', { platform: 'qq', id: '123', name: '李四' }],
    replyUrl: 'http://127.0.0.1:8080/reply',
    dedupeTtlSec: 0,
    rateLimitPerMin: 0,
  });
  assert.equal(cfg.petId, 'main');
  assert.equal(cfg.token, TOKEN);
  assert.deepEqual(cfg.whitelist, [
    { platform: 'wechat', id: 'wxid_1' },
    { platform: 'qq', id: '123', name: '李四' },
  ]);
  assert.equal(bridgeValid({ enabled: true, petId: 'main', token: TOKEN }), true);
  assert.equal(bridgeValid({ enabled: true, petId: 'main', token: 'short' }), false);
  assert.equal(bridgeValid({ enabled: true, petId: 'main', token: 'a'.repeat(257) }), false);
  assert.equal(bridgeValid({ enabled: false, token: '' }), true);
  assert.equal(bridgeValid({ enabled: true, petId: 'main', token: TOKEN, replyUrl: 'file:///x' }), false);
  assert.equal(bridgeValid({ enabled: true, petId: 'main', token: TOKEN, whitelist: ['bad'] }), false);
});

test('token 常量时间比较与两种请求头', () => {
  assert.equal(bridgeTokenMatches(TOKEN, TOKEN), true);
  assert.equal(bridgeTokenMatches(TOKEN, TOKEN + 'x'), false);
  assert.equal(bridgeTokenMatches(TOKEN, ''), false);
});

test('白名单按 platform + id 精确匹配，群聊默认拒绝', () => {
  const cfg = baseConfig();
  assert.equal(isBridgeSenderAllowed(cfg, 'wechat', 'wxid_1', false), true);
  assert.equal(isBridgeSenderAllowed(cfg, 'WeChat', ' wxid_1 ', false), true);
  assert.equal(isBridgeSenderAllowed(cfg, 'wechat', 'wxid_2', false), false);
  assert.equal(isBridgeSenderAllowed(cfg, 'qq', 'wxid_1', false), false);
  assert.equal(isBridgeSenderAllowed(cfg, 'wechat', 'wxid_1', true), false);
  assert.equal(isBridgeSenderAllowed({ ...cfg, allowGroups: true }, 'wechat', 'wxid_1', true), true);
});

test('parseBridgePayload 校验必填字段与长度', () => {
  const ok = parseBridgePayload({
    platform: 'wechat',
    senderId: 'wxid_1',
    senderName: '张三',
    messageId: 'm1',
    text: ' 你好 ',
  });
  assert.equal(ok.ok, true);
  if (ok.ok) {
    assert.equal(ok.value.text, '你好');
    assert.equal(ok.value.isGroup, false);
  }
  assert.equal(parseBridgePayload({}).ok, false);
  assert.equal(parseBridgePayload({ platform: 'wechat', senderId: 'x', messageId: 'm', text: '' }).ok, false);
  assert.equal(
    parseBridgePayload({ platform: 'wechat', senderId: 'x', messageId: 'm', text: 'x'.repeat(2001) }).ok,
    false,
  );
  assert.equal(
    parseBridgePayload({ platform: 'wechat', senderId: 'x', messageId: 'm', text: 'x', isGroup: 'yes' }).ok,
    false,
  );
});

test('未启用直接拒绝，不解析 body', async () => {
  const res = await processBridgeInbound({
    config: { ...baseConfig(), enabled: false },
    headers: {},
    body: 'not json',
    runtime: new BridgeRuntime(),
    chat: okChat().chat,
  });
  assert.equal(res.status, 200);
  assert.equal(res.obj.ok, false);
  assert.equal(res.obj.reason, 'bridge-disabled');
});

test('token 错误返回 401，两种请求头都支持', async () => {
  const runtime = new BridgeRuntime();
  const denied = await processBridgeInbound({
    config: baseConfig(),
    headers: {},
    body: inboundBody(),
    runtime,
    chat: okChat().chat,
  });
  assert.equal(denied.status, 401);
  assert.equal(denied.obj.reason, 'unauthorized');

  const viaHeader = await processBridgeInbound({
    config: baseConfig(),
    headers: { 'x-dsh-pet-bridge-token': TOKEN },
    body: inboundBody({ messageId: 'msg-2' }),
    runtime,
    chat: okChat().chat,
  });
  assert.equal(viaHeader.status, 200);
  assert.equal(viaHeader.obj.ok, true);
});

test('非白名单 / 群聊未开启返回 403', async () => {
  const notAllowed = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: inboundBody({ senderId: 'wxid_other' }),
    runtime: new BridgeRuntime(),
    chat: okChat().chat,
  });
  assert.equal(notAllowed.status, 403);
  assert.equal(notAllowed.obj.reason, 'not-whitelisted');

  const group = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: inboundBody({ isGroup: true }),
    runtime: new BridgeRuntime(),
    chat: okChat().chat,
  });
  assert.equal(group.status, 403);
  assert.equal(group.obj.reason, 'group-not-allowed');
});

test('成功回复：隔离记忆桶、默认不写桌面气泡、返回 reply 与 conversation', async () => {
  const seen: Array<{ petId: string; text: string; opts: { memoryKey: string; writeSay: boolean; speaker: string } }> =
    [];
  const res = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: inboundBody(),
    runtime: new BridgeRuntime(),
    chat: async (petId, text, opts) => {
      seen.push({ petId, text, opts });
      return { ok: true, text: '在呢', image: 'smile.png' };
    },
  });
  assert.equal(res.status, 200);
  assert.equal(res.obj.ok, true);
  assert.equal(res.obj.reply, '在呢');
  assert.equal(res.obj.image, 'smile.png');
  assert.equal(res.obj.petId, 'main');
  assert.equal(res.obj.conversation, 'bridge:wechat:wxid_1');
  assert.equal(res.callback, undefined);
  assert.deepEqual(seen, [
    {
      petId: 'main',
      text: '在吗',
      opts: {
        memoryKey: 'bridge:wechat:wxid_1',
        writeSay: false,
        speaker: 'wechat·张三',
      },
    },
  ]);
});

test('同一 messageId 去重，不同 messageId 才继续；生成失败会撤销去重键', async () => {
  const runtime = new BridgeRuntime();
  const firstChat = okChat();
  const first = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: inboundBody(),
    runtime,
    chat: firstChat.chat,
  });
  assert.equal(first.obj.ok, true);
  const duplicate = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: inboundBody(),
    runtime,
    chat: firstChat.chat,
  });
  assert.equal(duplicate.status, 200);
  assert.equal(duplicate.obj.duplicate, true);
  assert.equal(firstChat.calls(), 1);

  let calls = 0;
  const flaky = async () => {
    calls++;
    return calls === 1 ? { ok: false as const, reason: 'generate-error' } : { ok: true as const, text: '好了' };
  };
  const fail = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: inboundBody({ messageId: 'msg-flaky' }),
    runtime,
    chat: flaky,
  });
  assert.equal(fail.obj.ok, false);
  const retry = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: inboundBody({ messageId: 'msg-flaky' }),
    runtime,
    chat: flaky,
  });
  assert.equal(retry.obj.ok, true);
  assert.equal(calls, 2);
});

test('每发送者限流返回 429，0 = 不限制', async () => {
  const runtime = new BridgeRuntime();
  const cfg = { ...baseConfig(), rateLimitPerMin: 1 };
  const one = await processBridgeInbound({
    config: cfg,
    headers: authHeaders(),
    body: inboundBody({ messageId: 'm1' }),
    runtime,
    chat: okChat().chat,
  });
  assert.equal(one.status, 200);
  const two = await processBridgeInbound({
    config: cfg,
    headers: authHeaders(),
    body: inboundBody({ messageId: 'm2' }),
    runtime,
    chat: okChat().chat,
  });
  assert.equal(two.status, 429);
  assert.equal(two.obj.reason, 'rate-limited');

  const unlimited = await processBridgeInbound({
    config: { ...cfg, rateLimitPerMin: 0 },
    headers: authHeaders(),
    body: inboundBody({ messageId: 'm3' }),
    runtime: new BridgeRuntime(),
    chat: okChat().chat,
  });
  assert.equal(unlimited.status, 200);
});

test('空 body / 坏 JSON / 超大 body 分别返回 400 / 400 / 413', async () => {
  const runtime = new BridgeRuntime();
  const empty = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: '',
    runtime,
    chat: okChat().chat,
  });
  assert.equal(empty.status, 400);
  const bad = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: '{',
    runtime,
    chat: okChat().chat,
  });
  assert.equal(bad.status, 400);
  const large = await processBridgeInbound({
    config: baseConfig(),
    headers: authHeaders(),
    body: 'x'.repeat(MAX_BRIDGE_BODY_BYTES + 1),
    runtime,
    chat: okChat().chat,
  });
  assert.equal(large.status, 413);
});

test('配置 replyUrl 时组装回调 payload，但不阻塞入站响应', async () => {
  const res = await processBridgeInbound({
    config: { ...baseConfig(), replyUrl: 'http://127.0.0.1:8080/reply', writeSay: true },
    headers: authHeaders(),
    body: inboundBody(),
    runtime: new BridgeRuntime(),
    chat: async () => ({ ok: true, text: '收到' }),
  });
  assert.equal(res.status, 200);
  assert.equal(res.callback?.url, 'http://127.0.0.1:8080/reply');
  assert.equal(res.callback?.token, TOKEN);
  assert.deepEqual(res.callback?.payload, {
    platform: 'wechat',
    senderId: 'wxid_1',
    senderName: '张三',
    messageId: 'msg-1',
    isGroup: false,
    petId: 'main',
    conversation: 'bridge:wechat:wxid_1',
    reply: '收到',
  });
});

test('postBridgeReply 发送 JSON 与双 token 头；非法 URL 直接失败', async () => {
  const invalid = await postBridgeReply({
    url: 'file:///etc/passwd',
    token: TOKEN,
    payload: {
      platform: 'wechat',
      senderId: 'wxid_1',
      messageId: 'm1',
      isGroup: false,
      petId: 'main',
      conversation: 'bridge:wechat:wxid_1',
      reply: 'hi',
    },
  });
  assert.equal(invalid.ok, false);

  let seen: { authorization?: string; headerToken?: string; contentType?: string; body: string } | undefined;
  const server = createServer((req, res) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      seen = {
        authorization: req.headers.authorization,
        headerToken: req.headers['x-dsh-pet-bridge-token'] as string | undefined,
        contentType: req.headers['content-type'],
        body,
      };
      res.writeHead(204);
      res.end();
    });
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  try {
    const address = server.address();
    if (!address || typeof address === 'string') throw new Error('no port');
    const payload: BridgeReplyRequest['payload'] = {
      platform: 'wechat',
      senderId: 'wxid_1',
      messageId: 'm1',
      isGroup: false,
      petId: 'main',
      conversation: 'bridge:wechat:wxid_1',
      reply: 'hi',
    };
    const result = await postBridgeReply({
      url: `http://127.0.0.1:${address.port}/reply`,
      token: TOKEN,
      payload,
    });
    assert.equal(result.ok, true);
    assert.equal(seen?.authorization, 'Bearer ' + TOKEN);
    assert.equal(seen?.headerToken, TOKEN);
    assert.match(seen?.contentType ?? '', /application\/json/);
    assert.deepEqual(JSON.parse(seen?.body ?? '{}'), payload);
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
});
