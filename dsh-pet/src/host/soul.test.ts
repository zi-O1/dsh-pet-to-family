/**
 * 人格灵魂色彩单元测试：钉住灵魂卡归一化、实例→条目回落、提示词渲染、状态演化与衰减。
 *
 * 为什么单测这个：灵魂段会直接进入碎碎念/对话的 system，且 soul-state.json 是跨会话状态；
 * 这些规则如果只靠起宿主手测，很容易在后续改人设拼装时悄悄回退。这里全部用纯函数钉死。
 *
 * 跑法：node --experimental-strip-types --test src/host/soul.test.ts
 */
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

import { composeSystemPrompt } from './persona.ts';
import {
  decaySoulState,
  defaultSoulState,
  normalizeSoulCard,
  normalizeSoulState,
  observeUserText,
  recordExchange,
  relationshipStage,
  renderSoulCard,
  renderSoulPrompt,
  renderSoulState,
  soulAccent,
  soulCardOf,
} from './soul.ts';

/** 固定时刻：2026-10-21（星期三）14:15，与 persona.test 同一口径。 */
const NOW = new Date(2026, 9, 21, 14, 15);

const baseCard = normalizeSoulCard({
  identity: { oneLine: '一只蓝毛小女仆', species: '桌面精灵' },
  values: ['陪伴', '真诚'],
  traits: { 温柔: 80, 嘴硬: 62 },
  voice: { tone: '亲近', sentenceLength: '短句', avoid: ['客服腔'] },
  desires: ['被需要'],
  fears: ['被遗忘'],
  boundaries: ['不替主人做重大决定'],
  relationshipSeed: { stage: '初识', trust: 30, intimacy: 18, respect: 40, familiarity: 20 },
  temperament: { baselineMood: '平静', moodHalfLifeHours: 12, energy: 70 },
  soulColor: { primary: '#7aa7ff', description: '像被雨水洗过的蓝' },
});

describe('normalizeSoulCard —— 归一化与兼容手写', () => {
  test('空对象 / 非法值 → null（按没有灵魂卡处理）', () => {
    assert.equal(normalizeSoulCard(undefined), null);
    assert.equal(normalizeSoulCard(null), null);
    assert.equal(normalizeSoulCard([]), null);
    assert.equal(normalizeSoulCard({ version: 1 }), null);
    assert.equal(normalizeSoulCard({ identity: {} }), null);
  });

  test('camelCase / snake_case 都认，数组与数值夹到合法范围', () => {
    const card = normalizeSoulCard({
      identity: { one_line: '  一句话  ', self_image: '自我' },
      core_values: ['陪伴', { name: '真诚', note: '不说假话' }],
      traits: { 温柔: 120, 嘴硬: 'bad', 好奇: { score: -5 } },
      voice: { sentence_length: '短句', avoid: ['客服腔'] },
      relationship_seed: { trust: 200, familiarity: 20 },
      soul_color: { primary: '#ABC' },
    });
    assert.ok(card);
    assert.equal(card.identity?.oneLine, '一句话');
    assert.equal(card.identity?.selfImage, '自我');
    assert.deepEqual(card.values, ['陪伴', '真诚：不说假话']);
    assert.deepEqual(card.traits, { 温柔: 100, 好奇: 0 });
    assert.equal(card.voice?.sentenceLength, '短句');
    assert.equal(card.relationshipSeed?.trust, 100);
    assert.equal(card.soulColor?.primary, '#ABC');
  });
});

describe('soulCardOf —— 实例覆盖 → 条目回落', () => {
  test('实例写了 → 用实例的（整张取代条目，不拼接）', () => {
    const conf = { soul: { identity: { oneLine: '条目' } } };
    const pet = { soul: { identity: { oneLine: '实例' } } };
    assert.equal(soulCardOf(conf, pet)?.identity?.oneLine, '实例');
  });

  test('实例没写 / 空卡 / 非法 → 回落条目', () => {
    const conf = { soul: { identity: { oneLine: '条目' } } };
    for (const bad of [undefined, null, {}, [], 'x', 1]) {
      assert.equal(soulCardOf(conf, { soul: bad })?.identity?.oneLine, '条目', `${JSON.stringify(bad)} 应回落`);
    }
  });

  test('两级都没有 → null', () => {
    assert.equal(soulCardOf({}, {}), null);
  });
});

describe('soulAccent —— 只接受 hex', () => {
  test('主色 / 光晕 / 辅色依次回退，非法色回默认', () => {
    assert.equal(soulAccent(baseCard), '#7aa7ff');
    assert.equal(soulAccent({ soulColor: { primary: 'red', glow: '#abc' } }), '#abc');
    assert.equal(soulAccent(null), '#7aa7ff');
    assert.equal(soulAccent({ soulColor: { primary: 'url(javascript:1)' } }, '#123456'), '#123456');
  });
});

describe('renderSoulCard / renderSoulState —— 提示词渲染', () => {
  test('没有卡 / 没有状态 → 空串（旧人设不受影响）', () => {
    assert.equal(renderSoulCard(null), '');
    assert.equal(renderSoulState(null), '');
    assert.equal(renderSoulState(defaultSoulState(baseCard, 'pet-a', NOW), null), '');
    assert.equal(renderSoulPrompt(null, null), '');
  });

  test('卡渲染包含稳定设定与不要项，且不出现空段', () => {
    assert.ok(baseCard);
    const text = renderSoulCard(baseCard);
    assert.match(text, /【灵魂卡 · 稳定内在设定】/);
    assert.match(text, /一句话灵魂：一只蓝毛小女仆/);
    assert.match(text, /在意：陪伴；真诚/);
    assert.match(text, /性格倾向：温柔 80、嘴硬 62/);
    assert.match(text, /不要：客服腔/);
    assert.match(text, /灵魂色彩：主色 #7aa7ff/);
  });

  test('状态渲染包含心情、关系、上次聊天；不把数值写成用户可见台词', () => {
    assert.ok(baseCard);
    const state = defaultSoulState(baseCard, 'pet-a', NOW);
    state.lastExchange = { user: '今天好累', assistant: '那就先歇一会儿', at: NOW.toISOString() };
    const text = renderSoulState(state, baseCard);
    assert.match(text, /【此刻的灵魂状态】/);
    assert.match(text, /心情：平静/);
    assert.match(text, /关系：初识/);
    assert.match(text, /上次聊天：主人说「今天好累」；你说「那就先歇一会儿」/);
    assert.match(text, /不要向用户报数值/);
  });
});

describe('composeSystemPrompt —— 灵魂段插入位置与旧行为', () => {
  test('有卡：人设 → 灵魂卡 → 状态 → 名字 → 时间', () => {
    assert.ok(baseCard);
    const state = defaultSoulState(baseCard, 'pet-a', NOW);
    const text = composeSystemPrompt({
      prompt: '人设正文',
      name: '小蓝',
      id: 'pet-a',
      now: NOW,
      soulCard: baseCard,
      soulState: state,
    });
    const iPrompt = text.indexOf('人设正文');
    const iCard = text.indexOf('【灵魂卡');
    const iState = text.indexOf('【此刻的灵魂状态】');
    const iName = text.indexOf('你的名字是');
    const iTime = text.indexOf('现在是');
    assert.ok(iPrompt >= 0 && iCard > iPrompt && iState > iCard && iName > iState && iTime > iName);
  });

  test('没有卡：输出与旧版三段完全一致', () => {
    const parts = { prompt: '人设正文', name: '小蓝', id: 'pet-a', now: NOW };
    const legacy = composeSystemPrompt(parts);
    const withNull = composeSystemPrompt({ ...parts, soulCard: null, soulState: null });
    assert.equal(withNull, legacy);
    assert.ok(!legacy.includes('灵魂'));
  });
});

describe('SoulState —— 默认、观察、衰减、上次对话', () => {
  test('默认状态取关系起点与基线心情', () => {
    assert.ok(baseCard);
    const state = defaultSoulState(baseCard, 'pet-a', NOW);
    assert.equal(state.petId, 'pet-a');
    assert.equal(state.relationship.stage, '初识');
    assert.equal(state.relationship.trust, 30);
    assert.equal(state.mood.label, '平静');
    assert.equal(state.mood.energy, 70);
    assert.equal(state.relationship.interactions, 0);

    // 卡片显式写的关系起点优先于数值推导：作者想让新宠物从「亲近」开始就尊重它。
    const seeded = normalizeSoulCard({
      relationshipSeed: { stage: '亲近', trust: 0, intimacy: 0, familiarity: 0 },
    });
    assert.ok(seeded);
    assert.equal(defaultSoulState(seeded, 'pet-a', NOW).relationship.stage, '亲近');
  });

  test('温和信号 → 信任 / 熟悉 / 愉悦上升；尖锐信号 → 张力上升、愉悦下降', () => {
    assert.ok(baseCard);
    const warm = defaultSoulState(baseCard, 'pet-a', NOW);
    observeUserText(warm, '谢谢你，抱抱，今天也辛苦啦', NOW);
    assert.equal(warm.relationship.interactions, 1);
    assert.ok(warm.relationship.trust > 30);
    assert.ok(warm.relationship.familiarity > 20);
    assert.ok(warm.mood.valence > 0);

    const cold = defaultSoulState(baseCard, 'pet-a', NOW);
    observeUserText(cold, '滚，烦死了，别烦我', NOW);
    assert.ok(cold.relationship.tension > 0);
    assert.ok(cold.mood.valence < 0);
    assert.ok(cold.mood.label === '低落' || cold.mood.label === '难过');
  });

  test('离线越久，情绪越回落到基线（信任等长期量不衰减）', () => {
    assert.ok(baseCard);
    const old = new Date(NOW.getTime() - 24 * 3_600_000);
    const state = defaultSoulState(baseCard, 'pet-a', old);
    state.mood.valence = 80;
    state.mood.energy = 100;
    state.relationship.tension = 80;
    state.updatedAt = old.toISOString();
    state.mood.updatedAt = old.toISOString();
    decaySoulState(state, baseCard, NOW);
    assert.ok(state.mood.valence < 80 && state.mood.valence > 0);
    assert.ok(state.mood.energy < 100);
    assert.ok(state.relationship.tension < 80);
    assert.equal(state.relationship.trust, 30);
  });

  test('归一化坏状态：数值夹回、阶段重算、last_exchange 保留', () => {
    assert.ok(baseCard);
    const state = normalizeSoulState(
      {
        mood: { valence: 999, energy: -5 },
        relationship: { trust: '50', interactions: 3.8, stage: '乱写' },
        last_exchange: { user: '上次说的', assistant: '我记得', at: NOW.toISOString() },
        active_goals: ['等主人回来'],
      },
      baseCard,
      'pet-a',
      NOW,
    );
    assert.equal(state.mood.valence, 100);
    assert.equal(state.mood.energy, 0);
    assert.equal(state.relationship.trust, 50);
    assert.equal(state.relationship.interactions, 3);
    assert.notEqual(state.relationship.stage, '乱写');
    assert.equal(state.lastExchange?.user, '上次说的');
    assert.deepEqual(state.activeGoals, ['等主人回来']);
  });

  test('recordExchange 截断超长对话并写时间', () => {
    assert.ok(baseCard);
    const state = defaultSoulState(baseCard, 'pet-a', NOW);
    recordExchange(state, 'a'.repeat(400), 'b'.repeat(400), NOW);
    assert.equal(state.lastExchange?.user.length, 300);
    assert.equal(state.lastExchange?.assistant.length, 300);
    assert.equal(state.lastExchange?.at, NOW.toISOString());
  });

  test('关系阶段随熟悉 / 信任 / 亲密上升，张力会拉低分数', () => {
    assert.equal(relationshipStage({ trust: 0, intimacy: 0, familiarity: 0, tension: 0 }), '陌生');
    assert.equal(relationshipStage({ trust: 90, intimacy: 90, familiarity: 90, tension: 0 }), '羁绊');
    assert.equal(relationshipStage({ trust: 90, intimacy: 90, familiarity: 90, tension: 90 }), '默契');
  });
});
