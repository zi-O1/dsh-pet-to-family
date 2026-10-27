/**
 * 关系事件时间线：归一化、去重、限量、阶段变化写入与提示词渲染。
 */
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

import { defaultSoulState, normalizeSoulCard, observeUserText, renderSoulState } from './soul.ts';
import {
  MAX_SOUL_EVENTS,
  anniversaryKey,
  appendSoulEvent,
  dueAnniversaryEvents,
  mergeSoulEvents,
  normalizeSoulEvent,
  normalizeSoulEvents,
  soulEventKindLabel,
} from './soul-events.ts';

const NOW = new Date('2026-10-27T12:00:00.000Z');
const card = normalizeSoulCard({
  identity: { oneLine: '一只蓝毛小女仆' },
  relationshipSeed: { stage: '初识', trust: 30, familiarity: 20 },
});
if (!card) throw new Error('test card invalid');

describe('normalizeSoulEvent', () => {
  test('字符串 / 对象 / snake_case 字段都能收', () => {
    assert.deepEqual(normalizeSoulEvent('  第一次一起吃饭 ', NOW), {
      text: '第一次一起吃饭',
      kind: 'other',
      at: NOW.toISOString(),
    });
    assert.deepEqual(
      normalizeSoulEvent({ content: '约好周末复习', type: 'promise', date: '2026-10-01T00:00:00Z' }, NOW),
      {
        text: '约好周末复习',
        kind: 'promise',
        at: '2026-10-01T00:00:00.000Z',
      },
    );
    assert.equal(normalizeSoulEvent({ note: '  ' }, NOW), null);
    assert.equal(normalizeSoulEvent(1, NOW), null);
  });

  test('未知类型回 other，长文本截断', () => {
    const event = normalizeSoulEvent({ text: '事'.repeat(220), kind: 'unknown' }, NOW);
    assert.ok(event);
    assert.equal(event?.kind, 'other');
    assert.equal(Array.from(event?.text ?? '').length, 180);
  });
});

describe('normalizeSoulEvents / mergeSoulEvents / appendSoulEvent', () => {
  test('数组去重、坏条目丢弃、超过上限保留最近事件', () => {
    const list = normalizeSoulEvents(
      Array.from({ length: MAX_SOUL_EVENTS + 3 }, (_, i) => ({ text: '事件' + i, kind: 'milestone' })),
      NOW,
    );
    assert.equal(list.length, MAX_SOUL_EVENTS);
    assert.equal(list[0].text, '事件3');

    const dup = normalizeSoulEvents(
      ['第一次吃饭', ' 第一次吃饭 ', { text: '第一次吃饭' }, { text: '第一次看电影' }],
      NOW,
    );
    assert.equal(dup.length, 2);
  });

  test('合并时同文去重，具体类型覆盖 other，旧时间保留；append 等价于合并一条', () => {
    const old = [{ text: '第一次吃饭', kind: 'other' as const, at: '2026-10-01T00:00:00.000Z' }];
    const merged = mergeSoulEvents(old, [{ text: '第一次吃饭', kind: 'first' as const, at: NOW.toISOString() }], NOW);
    assert.deepEqual(merged, [{ text: '第一次吃饭', kind: 'first', at: '2026-10-01T00:00:00.000Z' }]);
    const appended = appendSoulEvent(merged, { text: '约好周末复习', kind: 'promise', at: NOW.toISOString() }, NOW);
    assert.equal(appended.length, 2);
  });

  test('提示词类型标签', () => {
    assert.equal(soulEventKindLabel('first'), '第一次');
    assert.equal(soulEventKindLabel('repair'), '和好');
  });
});

describe('纪念日到期与去重键', () => {
  test('按月日匹配，未来年份不提醒，非 date 事件不提醒', () => {
    const events = normalizeSoulEvents(
      [
        { text: '第一次一起吃饭', kind: 'first', at: '2025-10-27' },
        { text: '主人的生日', kind: 'date', at: '2024-10-27' },
        { text: '明年的约定', kind: 'date', at: '2027-10-27' },
        { text: '别的日子', kind: 'date', at: '2024-11-03' },
      ],
      NOW,
    );
    const due = dueAnniversaryEvents(events, NOW);
    assert.deepEqual(
      due.map((e) => e.text),
      ['主人的生日'],
    );
    assert.match(anniversaryKey(due, NOW), /^2026-10-27\|/);
  });

  test('同一天多个事件一起提醒，键与事件正文有关', () => {
    const one = normalizeSoulEvents([{ text: '生日', kind: 'date', at: '2024-10-27' }], NOW);
    const two = normalizeSoulEvents(
      [
        { text: '生日', kind: 'date', at: '2024-10-27' },
        { text: '第一次见面', kind: 'date', at: '2023-10-27' },
      ],
      NOW,
    );
    assert.equal(anniversaryKey(one, NOW) === anniversaryKey(two, NOW), false);
    assert.equal(dueAnniversaryEvents(two, NOW).length, 2);
  });
});

describe('observeUserText —— 关系事件', () => {
  test('第一次互动写入 first，阶段变化写入 milestone', () => {
    const state = defaultSoulState(card, 'main', NOW);
    observeUserText(state, '你好呀', NOW);
    assert.equal(state.relationshipEvents?.[0]?.kind, 'first');
    assert.equal(state.relationshipEvents?.[0]?.text, '第一次和主人说话');

    // 大量正向互动把阶段推高，至少应出现一次 milestone 事件。
    for (let i = 0; i < 20; i++) observeUserText(state, '谢谢你，抱抱，最喜欢你了', new Date(NOW.getTime() + i * 1000));
    assert.ok(state.relationshipEvents?.some((e) => e.kind === 'milestone'));
  });

  test('老状态没有事件时，下一次互动补一条里程碑', () => {
    const state = defaultSoulState(card, 'main', NOW);
    state.relationship.interactions = 7;
    observeUserText(state, '今天也辛苦啦', NOW);
    assert.equal(state.relationshipEvents?.[0]?.text, '和主人已经聊过 7 次');
    assert.equal(state.relationshipEvents?.[0]?.kind, 'milestone');
  });

  test('关系事件会进入状态提示词', () => {
    const state = defaultSoulState(card, 'main', NOW);
    state.relationshipEvents = [{ text: '第一次一起复习', kind: 'first', at: NOW.toISOString() }];
    const text = renderSoulState(state, card);
    assert.match(text, /关系事件/);
    assert.match(text, /\[第一次\] 第一次一起复习/);
  });
});
