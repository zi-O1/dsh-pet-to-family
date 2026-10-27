/**
 * 长期记忆条目：归一化、去重、限量与合并。
 *
 * 这些规则直接决定 soul-state.json 会不会被模型输出喂脏，以及提示词里的「长期记忆」
 * 是否稳定；用纯函数钉死，不依赖 LLM。
 */
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

import {
  MAX_SOUL_MEMORIES,
  mergeSoulMemories,
  normalizeSoulMemories,
  normalizeSoulMemory,
  soulMemoryKindLabel,
} from './soul-memory.ts';

const NOW = new Date('2026-10-27T12:00:00.000Z');

describe('normalizeSoulMemory', () => {
  test('字符串 / 对象 / snake_case 字段都能收', () => {
    assert.deepEqual(normalizeSoulMemory('  喜欢蓝莓  ', NOW), {
      text: '喜欢蓝莓',
      kind: 'other',
      at: NOW.toISOString(),
    });
    assert.deepEqual(normalizeSoulMemory({ content: '养了一只猫', kind: 'person', at: '2026-10-01T00:00:00Z' }, NOW), {
      text: '养了一只猫',
      kind: 'person',
      at: '2026-10-01T00:00:00.000Z',
    });
    assert.equal(normalizeSoulMemory({ note: '   ' }, NOW), null);
    assert.equal(normalizeSoulMemory(42, NOW), null);
  });

  test('未知 kind 回 other，超长正文按码点截断', () => {
    const memory = normalizeSoulMemory({ text: '记'.repeat(250), kind: 'unknown' }, NOW);
    assert.ok(memory);
    assert.equal(memory?.kind, 'other');
    assert.equal(Array.from(memory?.text ?? '').length, 200);
    assert.ok(memory?.text.endsWith('…'));
  });
});

describe('normalizeSoulMemories / mergeSoulMemories', () => {
  test('数组去重、坏条目丢弃、保留最近上限', () => {
    const raw = ['喜欢蓝莓', ' 喜欢蓝莓 ', { text: '喜欢蓝莓' }, { text: '怕黑', kind: 'preference' }, { text: '' }];
    const list = normalizeSoulMemories(raw, NOW);
    assert.equal(list.length, 2);
    assert.equal(list[1].kind, 'preference');
  });

  test('超过上限只保留最后 MAX_SOUL_MEMORIES 条', () => {
    const list = normalizeSoulMemories(
      Array.from({ length: MAX_SOUL_MEMORIES + 5 }, (_, i) => ({ text: '记忆' + i, kind: 'event' })),
      NOW,
    );
    assert.equal(list.length, MAX_SOUL_MEMORIES);
    assert.equal(list[0].text, '记忆5');
    assert.equal(list[list.length - 1]?.text, '记忆' + (MAX_SOUL_MEMORIES + 4));
  });

  test('合并时同文去重，新条目的具体 kind 覆盖 other，旧时间保留', () => {
    const old = [{ text: '喜欢蓝莓', kind: 'other' as const, at: '2026-10-01T00:00:00.000Z' }];
    const merged = mergeSoulMemories(
      old,
      [{ text: '  喜欢蓝莓 ', kind: 'preference' as const, at: NOW.toISOString() }],
      NOW,
    );
    assert.deepEqual(merged, [{ text: '喜欢蓝莓', kind: 'preference', at: '2026-10-01T00:00:00.000Z' }]);
  });

  test('类型标签用于提示词展示', () => {
    assert.equal(soulMemoryKindLabel('preference'), '偏好');
    assert.equal(soulMemoryKindLabel('date'), '日期');
  });
});
