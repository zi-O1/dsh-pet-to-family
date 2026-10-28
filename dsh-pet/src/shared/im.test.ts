import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  DEFAULT_IM,
  formatImWhitelist,
  isValidImConfig,
  nextImBotId,
  normalizeImConfig,
  parseImWhitelistText,
} from './im.ts';

test('normalizeImConfig 支持每平台多机器人', () => {
  const cfg = normalizeImConfig({
    wechat: {
      bots: [
        { id: 'wx-main', enabled: true, mode: 'pet', petId: ' main ', whitelist: ['wechat:wxid_1'] },
        { id: 'wx-work', enabled: true, mode: 'session', sessionId: 'ses_1' },
      ],
    },
    qq: { bots: [{ id: 'qq-main', enabled: false, mode: 'pet', petId: 'main' }] },
  });
  assert.equal(cfg.wechat.bots.length, 2);
  assert.deepEqual(cfg.wechat.bots[0].whitelist, [{ platform: 'wechat', id: 'wxid_1' }]);
  assert.equal(cfg.wechat.bots[0].petId, 'main');
  assert.equal(cfg.wechat.bots[1].mode, 'session');
  assert.equal(cfg.wechat.bots[1].sessionId, 'ses_1');
  assert.equal(cfg.qq.bots[0].id, 'qq-main');
  assert.deepEqual(normalizeImConfig(DEFAULT_IM), DEFAULT_IM);
});

test('旧版单机器人对象自动迁移成 bots[0]', () => {
  const cfg = normalizeImConfig({
    wechat: { enabled: true, petId: 'main', whitelist: ['wechat:wxid_1'] },
  });
  assert.equal(cfg.wechat.bots.length, 1);
  assert.equal(cfg.wechat.bots[0].id, 'wechat-1');
  assert.equal(cfg.wechat.bots[0].enabled, true);
  assert.equal(cfg.wechat.bots[0].mode, 'pet');
});

test('isValidImConfig：pet 模式要宠物，session 模式要 sessionId', () => {
  assert.equal(isValidImConfig({}), true);
  assert.equal(isValidImConfig({ wechat: { bots: [{ id: 'wx1', enabled: true, mode: 'pet' }] } }), false);
  assert.equal(isValidImConfig({ wechat: { bots: [{ id: 'wx1', enabled: true, mode: 'session' }] } }), false);
  assert.equal(
    isValidImConfig({ wechat: { bots: [{ id: 'wx1', enabled: true, mode: 'session', sessionId: 'ses_1' }] } }),
    true,
  );
  assert.equal(isValidImConfig({ qq: { bots: [{ id: 'qq1', enabled: true, mode: 'pet', petId: 'main' }] } }), true);
  assert.equal(isValidImConfig({ qq: { bots: [{ id: 'bad id', enabled: false }] } }), false);
});

test('nextImBotId 跳过已用 id', () => {
  const bots = [{ id: 'wechat-1' }, { id: 'wechat-2' }] as never;
  assert.equal(nextImBotId('wechat', bots), 'wechat-3');
});

test('IM 白名单沿用 bridge 文本格式并可往返', () => {
  const parsed = parseImWhitelistText('wechat | wxid_1 | 张三\nqq | 123 | 李四');
  assert.equal(parsed.ok, true);
  if (!parsed.ok) return;
  assert.equal(formatImWhitelist(parsed.list), 'wechat | wxid_1 | 张三\nqq | 123 | 李四');
});
