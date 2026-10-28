import { test } from 'node:test';
import assert from 'node:assert/strict';

import { DEFAULT_IM, formatImWhitelist, isValidImConfig, normalizeImConfig, parseImWhitelistText } from './im.ts';

test('normalizeImConfig 填满两个平台的默认值', () => {
  const cfg = normalizeImConfig({ wechat: { enabled: true, petId: ' main ', whitelist: ['wechat:wxid_1'] } });
  assert.equal(cfg.wechat.enabled, true);
  assert.equal(cfg.wechat.petId, 'main');
  assert.deepEqual(cfg.wechat.whitelist, [{ platform: 'wechat', id: 'wxid_1' }]);
  assert.equal(cfg.wechat.allowOwner, true);
  assert.equal(cfg.wechat.writeSay, false);
  assert.deepEqual(cfg.qq, DEFAULT_IM.qq);
});

test('isValidImConfig 启用时必须选宠物，非法白名单整段拒绝', () => {
  assert.equal(isValidImConfig({}), true);
  assert.equal(isValidImConfig({ wechat: { enabled: true, petId: '' } }), false);
  assert.equal(isValidImConfig({ wechat: { enabled: true, petId: 'main', whitelist: ['bad'] } }), false);
  assert.equal(isValidImConfig({ qq: { enabled: true, petId: 'main', whitelist: ['qq:123'] } }), true);
  assert.equal(isValidImConfig({ qq: { enabled: 'yes' } }), false);
});

test('IM 白名单沿用 bridge 文本格式并可往返', () => {
  const parsed = parseImWhitelistText('wechat | wxid_1 | 张三\nqq | 123 | 李四');
  assert.equal(parsed.ok, true);
  if (!parsed.ok) return;
  assert.equal(formatImWhitelist(parsed.list), 'wechat | wxid_1 | 张三\nqq | 123 | 李四');
});
