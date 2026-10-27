/**
 * 右键菜单的「桌宠设置」子菜单：分组 id 必须与独立设置页的手风琴一一对应。
 *
 * 这里钉住的是契约而不是文案：新增设置分组时，SETTINGS_SECTIONS 与菜单项必须同时更新，
 * 否则右键点进去会落在不存在的分组上（窗口打开但没有展开项）。
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { SETTINGS_SECTIONS, settingsMenuBranch } from './menu.ts';

test('桌宠设置子菜单覆盖全部设置分组，且每项都带 settings 动作', () => {
  const branch = settingsMenuBranch();
  assert.equal(branch.label, '桌宠设置');
  assert.equal(branch.children.length, SETTINGS_SECTIONS.length);
  const sections = branch.children.map((node) => {
    assert.ok('action' in node, '设置菜单项必须是叶子');
    assert.equal(node.action, 'settings');
    assert.ok('section' in node && node.section, '设置菜单项必须带 section');
    return node.section;
  });
  assert.deepEqual(sections, [...SETTINGS_SECTIONS]);
});
