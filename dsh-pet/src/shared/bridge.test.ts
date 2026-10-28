/**
 * 消息接入共享层（设置页用）的纯逻辑测试：白名单文本、归一化与启用前校验。
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  DEFAULT_BRIDGE,
  formatBridgeWhitelist,
  isValidBridgeConfig,
  normalizeBridgeConfig,
  parseBridgeWhitelistText,
} from './bridge.ts';

test('normalizeBridgeConfig 填满默认值并跳过非法白名单', () => {
  const cfg = normalizeBridgeConfig({
    enabled: true,
    petId: ' main ',
    token: ' 0123456789abcdef ',
    whitelist: [
      { platform: 'WeChat', id: ' wxid_1 ', name: ' 张三 ' },
      'qq:123456',
      { platform: 'bad platform', id: 'x' },
      { platform: 'wechat', id: 'wxid_1' },
      'no-separator',
    ],
    replyUrl: 'https://example.com/reply',
    dedupeTtlSec: '60',
    rateLimitPerMin: 0,
    writeSay: true,
    allowGroups: true,
  });
  assert.equal(cfg.enabled, true);
  assert.equal(cfg.petId, 'main');
  assert.equal(cfg.token, '0123456789abcdef');
  assert.deepEqual(cfg.whitelist, [
    { platform: 'wechat', id: 'wxid_1', name: '张三' },
    { platform: 'qq', id: '123456' },
  ]);
  assert.equal(cfg.replyUrl, 'https://example.com/reply');
  assert.equal(cfg.dedupeTtlSec, 60);
  assert.equal(cfg.rateLimitPerMin, 0);
  assert.equal(cfg.writeSay, true);
  assert.equal(cfg.allowGroups, true);
});

test('normalizeBridgeConfig 对非法地址/数字/布尔回落默认值', () => {
  const cfg = normalizeBridgeConfig({
    replyUrl: 'file:///etc/passwd',
    dedupeTtlSec: -1,
    rateLimitPerMin: 999,
    writeSay: 'yes',
    allowGroups: 1,
  });
  assert.equal(cfg.replyUrl, '');
  assert.equal(cfg.dedupeTtlSec, DEFAULT_BRIDGE.dedupeTtlSec);
  assert.equal(cfg.rateLimitPerMin, DEFAULT_BRIDGE.rateLimitPerMin);
  assert.equal(cfg.writeSay, false);
  assert.equal(cfg.allowGroups, false);
});

test('白名单拒绝含竖线的 id，并清洗名字里的竖线（textarea 往返安全）', () => {
  const cfg = normalizeBridgeConfig({
    whitelist: [
      { platform: 'wechat', id: 'wxid|bad' },
      { platform: 'wechat', id: 'wxid_ok', name: 'A|B' },
    ],
  });
  assert.deepEqual(cfg.whitelist, [{ platform: 'wechat', id: 'wxid_ok', name: 'A B' }]);
  assert.equal(formatBridgeWhitelist(cfg.whitelist), 'wechat | wxid_ok | A B');
});

test('parseBridgeWhitelistText 支持竖线/冒号、注释、去重与名字', () => {
  const parsed = parseBridgeWhitelistText(`
    # 注释
    wechat | wxid_1 | 张三
    qq:123456
    wechat | wxid_1 | 重复
  `);
  assert.equal(parsed.ok, true);
  if (!parsed.ok) return;
  assert.deepEqual(parsed.list, [
    { platform: 'wechat', id: 'wxid_1', name: '张三' },
    { platform: 'qq', id: '123456' },
  ]);
  assert.equal(formatBridgeWhitelist(parsed.list), 'wechat | wxid_1 | 张三\nqq | 123456');
});

test('parseBridgeWhitelistText 对坏行给出行号', () => {
  const parsed = parseBridgeWhitelistText('wechat | wxid_1\nnot-a-line');
  assert.deepEqual(parsed, { ok: false, line: 2, reason: 'format' });
});

test('parseBridgeWhitelistText 超过 200 条时明确报错，不静默截断', () => {
  const lines = Array.from({ length: 201 }, (_, i) => 'wechat | wxid_' + i).join('\n');
  assert.deepEqual(parseBridgeWhitelistText(lines), { ok: false, line: 201, reason: 'limit' });
});

test('isValidBridgeConfig 开启时要求宠物与强 token，关闭时允许留空', () => {
  assert.equal(isValidBridgeConfig({ enabled: false }), true);
  assert.equal(isValidBridgeConfig({ enabled: true, petId: 'main', token: 'short' }), false);
  assert.equal(isValidBridgeConfig({ enabled: true, petId: 'main', token: '0123456789abcdef' }), true);
  assert.equal(isValidBridgeConfig({ enabled: true, petId: 'main', token: 'a'.repeat(257) }), false);
  assert.equal(isValidBridgeConfig({ enabled: true, petId: '', token: '0123456789abcdef' }), false);
  assert.equal(
    isValidBridgeConfig({ enabled: true, petId: 'main', token: '0123456789abcdef', replyUrl: 'ftp://x' }),
    false,
  );
});
