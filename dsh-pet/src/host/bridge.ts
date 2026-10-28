/**
 * 通用消息接入（Webhook bridge）的宿主半侧纯逻辑。
 *
 * 负责配置归一化、token 鉴权、白名单、群聊开关、去重、每发送者限流、入站报文校验、
 * 回复回调与调用模型前的全部决策；真正的聊天生成由 index.ts 注入（chatWithPet）。
 *
 * 不负责 HTTP 注册与日志落盘：路由只把 headers/body 交给 processBridgeInbound。
 * 与 shared/bridge.ts 的字段名、边界保持一致（宿主不 import shared，避免破坏单文件加载）。
 * @module dsh-pet/src/host/bridge
 */
import { timingSafeEqual } from 'node:crypto';
import type { BridgeConfig, BridgeWhitelistEntry } from '../shared/bridge';

export type { BridgeConfig, BridgeWhitelistEntry } from '../shared/bridge';

/** 入站请求体上限：文本消息 64 KiB 足够，超过直接 413。 */
export const MAX_BRIDGE_BODY_BYTES = 64 * 1024;

/** 单条文本上限（与 /chat 一致）。 */
export const MAX_BRIDGE_TEXT_LENGTH = 2000;

/** 平台标识白名单（与 shared/bridge 同一套）。 */
const PLATFORM_RE = /^[a-z0-9._-]{1,32}$/;
// eslint-disable-next-line no-control-regex -- 白名单/消息 id 必须拒绝 \x00-\x1f 控制字符，去掉匹配等于放行
const CONTROL_CHARS = /[\x00-\x1f]/;
const SENDER_ID_MAX = 128;
const MESSAGE_ID_MAX = 200;
const SENDER_NAME_MAX = 80;
const WHITELIST_MAX = 200;

/** 内置默认值（与 shared/bridge 的 DEFAULT_BRIDGE 逐字段一致）。 */
export const DEFAULT_BRIDGE: BridgeConfig = {
  enabled: false,
  petId: '',
  token: '',
  whitelist: [],
  replyUrl: '',
  dedupeTtlSec: 600,
  rateLimitPerMin: 20,
  writeSay: false,
  allowGroups: false,
};

/** 只保留 http/https 且不带用户名密码的回调地址；非法返回空串。 */
export function normalizeBridgeReplyUrl(value: unknown): string {
  if (typeof value !== 'string') return '';
  const raw = value.trim();
  if (!raw || raw.length > 2048) return '';
  try {
    const url = new URL(raw);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
    if (url.username || url.password) return '';
    return raw;
  } catch {
    return '';
  }
}

/** 平台名归一化：小写、短标识；非法返回空串。 */
export function normalizeBridgePlatform(value: unknown): string {
  const platform = typeof value === 'string' ? value.trim().toLowerCase() : '';
  return PLATFORM_RE.test(platform) ? platform : '';
}

/** 一条白名单归一化；非法返回 null。 */
export function normalizeBridgeWhitelistEntry(value: unknown): BridgeWhitelistEntry | null {
  if (typeof value === 'string') {
    const raw = value.trim();
    const sep = raw.indexOf(':');
    if (sep <= 0) return null;
    const platform = normalizeBridgePlatform(raw.slice(0, sep));
    const id = raw.slice(sep + 1).trim();
    if (!platform || !id || id.length > SENDER_ID_MAX || id.includes('|') || CONTROL_CHARS.test(id)) return null;
    return { platform, id };
  }
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const o = value as Record<string, unknown>;
  const platform = normalizeBridgePlatform(o.platform);
  const id = typeof o.id === 'string' ? o.id.trim() : '';
  if (!platform || !id || id.length > SENDER_ID_MAX || id.includes('|') || CONTROL_CHARS.test(id)) return null;
  const rawName = typeof o.name === 'string' ? o.name.trim() : '';
  const name = rawName ? rawName.slice(0, SENDER_NAME_MAX).replace(/\|/g, ' ').trim() : '';
  return name ? { platform, id, name } : { platform, id };
}

/** 白名单数组归一化：跳过非法项、按 platform+id 去重、限制条数。 */
export function normalizeBridgeWhitelist(value: unknown): BridgeWhitelistEntry[] {
  if (!Array.isArray(value)) return [];
  const out: BridgeWhitelistEntry[] = [];
  const seen = new Set<string>();
  for (const item of value) {
    const entry = normalizeBridgeWhitelistEntry(item);
    if (!entry) continue;
    const key = entry.platform + '\u0000' + entry.id;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(entry);
    if (out.length >= WHITELIST_MAX) break;
  }
  return out;
}

/** 配置归一化：缺失/非法字段回落默认值。 */
export function normalizeBridgeConfig(raw: unknown): BridgeConfig {
  const o = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
  const token = typeof o.token === 'string' ? o.token.trim().slice(0, 256) : '';
  const petId = typeof o.petId === 'string' ? o.petId.trim().slice(0, 64) : '';
  const dedupeRaw = Number(o.dedupeTtlSec);
  const rateRaw = Number(o.rateLimitPerMin);
  return {
    enabled: typeof o.enabled === 'boolean' ? o.enabled : DEFAULT_BRIDGE.enabled,
    petId,
    token,
    whitelist: normalizeBridgeWhitelist(o.whitelist),
    replyUrl: normalizeBridgeReplyUrl(o.replyUrl),
    dedupeTtlSec:
      Number.isFinite(dedupeRaw) && dedupeRaw >= 0 && dedupeRaw <= 86_400
        ? Math.floor(dedupeRaw)
        : DEFAULT_BRIDGE.dedupeTtlSec,
    rateLimitPerMin:
      Number.isFinite(rateRaw) && rateRaw >= 0 && rateRaw <= 120 ? Math.floor(rateRaw) : DEFAULT_BRIDGE.rateLimitPerMin,
    writeSay: typeof o.writeSay === 'boolean' ? o.writeSay : DEFAULT_BRIDGE.writeSay,
    allowGroups: typeof o.allowGroups === 'boolean' ? o.allowGroups : DEFAULT_BRIDGE.allowGroups,
  };
}

/** 配置段是否可写盘/可合并：已知字段类型与范围必须合法；开启时必须给出宠物和强 token。 */
export function bridgeValid(raw: unknown): boolean {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return false;
  const o = raw as Record<string, unknown>;
  if (o.enabled !== undefined && typeof o.enabled !== 'boolean') return false;
  if (o.petId !== undefined && (typeof o.petId !== 'string' || o.petId.trim().length > 64)) return false;
  if (o.token !== undefined && (typeof o.token !== 'string' || o.token.trim().length > 256)) return false;
  if (o.whitelist !== undefined) {
    if (!Array.isArray(o.whitelist) || o.whitelist.length > WHITELIST_MAX) return false;
    for (const item of o.whitelist) {
      if (!normalizeBridgeWhitelistEntry(item)) return false;
    }
  }
  if (o.replyUrl !== undefined) {
    if (typeof o.replyUrl !== 'string') return false;
    if (o.replyUrl.trim() && !normalizeBridgeReplyUrl(o.replyUrl)) return false;
  }
  for (const key of ['dedupeTtlSec', 'rateLimitPerMin'] as const) {
    if (o[key] === undefined) continue;
    const n = Number(o[key]);
    const max = key === 'dedupeTtlSec' ? 86_400 : 120;
    if (!Number.isFinite(n) || n < 0 || n > max) return false;
  }
  if (o.writeSay !== undefined && typeof o.writeSay !== 'boolean') return false;
  if (o.allowGroups !== undefined && typeof o.allowGroups !== 'boolean') return false;
  if (o.enabled === true) {
    const petId = typeof o.petId === 'string' ? o.petId.trim() : '';
    const token = typeof o.token === 'string' ? o.token.trim() : '';
    if (!petId || token.length < 16) return false;
  }
  return true;
}

/** 常量时间比较 token；长度不同直接 false（timingSafeEqual 要求同长度）。 */
export function bridgeTokenMatches(expected: string, actual: string): boolean {
  if (!expected || !actual) return false;
  const a = Buffer.from(expected, 'utf8');
  const b = Buffer.from(actual, 'utf8');
  return a.length === b.length && timingSafeEqual(a, b);
}

/** 从 headers 里取 token：优先 Authorization: Bearer，其次 X-DSH-Pet-Bridge-Token。 */
export function bridgeTokenFromHeaders(headers: Record<string, string | string[] | undefined>): string {
  const first = (v: string | string[] | undefined): string => (Array.isArray(v) ? (v[0] ?? '') : (v ?? ''));
  const auth = first(headers.authorization).trim();
  const bearer = /^Bearer\s+(.+)$/i.exec(auth)?.[1]?.trim() ?? '';
  return bearer || first(headers['x-dsh-pet-bridge-token']).trim();
}

/** 白名单 + 群聊策略：平台/发送者 id 精确匹配才放行。 */
export function isBridgeSenderAllowed(
  config: BridgeConfig,
  platform: string,
  senderId: string,
  isGroup: boolean,
): boolean {
  if (isGroup && !config.allowGroups) return false;
  const p = normalizeBridgePlatform(platform);
  const id = senderId.trim();
  if (!p || !id) return false;
  return config.whitelist.some((entry) => entry.platform === p && entry.id === id);
}

/** 每个发送者独立记忆桶：同一个人和桌宠的对话不会和主人本机聊天混在一起。 */
export function bridgeConversationKey(platform: string, senderId: string): string {
  return 'bridge:' + normalizeBridgePlatform(platform) + ':' + senderId.trim();
}

/** 入站报文（桥接器 → 插件）。 */
export interface BridgeInboundPayload {
  platform: string;
  senderId: string;
  senderName?: string;
  messageId: string;
  text: string;
  isGroup: boolean;
}

/** 入站报文解析结果。 */
export type BridgePayloadResult =
  { ok: true; value: BridgeInboundPayload } | { ok: false; reason: 'bad-request'; message: string };

/** 解析并校验入站 JSON。 */
export function parseBridgePayload(raw: unknown): BridgePayloadResult {
  const o = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : null;
  if (!o) return { ok: false, reason: 'bad-request', message: '请求体必须是 JSON 对象' };
  const platform = normalizeBridgePlatform(o.platform);
  if (!platform) return { ok: false, reason: 'bad-request', message: 'platform 必须是 1–32 位小写字母/数字/._-' };
  const senderId = typeof o.senderId === 'string' ? o.senderId.trim() : '';
  if (!senderId || senderId.length > SENDER_ID_MAX || CONTROL_CHARS.test(senderId)) {
    return { ok: false, reason: 'bad-request', message: 'senderId 必填，且长度不超过 128' };
  }
  const rawName = typeof o.senderName === 'string' ? o.senderName.trim() : '';
  if (rawName.length > SENDER_NAME_MAX || CONTROL_CHARS.test(rawName)) {
    return { ok: false, reason: 'bad-request', message: 'senderName 过长或包含控制字符' };
  }
  const messageId = typeof o.messageId === 'string' ? o.messageId.trim() : '';
  if (!messageId || messageId.length > MESSAGE_ID_MAX || CONTROL_CHARS.test(messageId)) {
    return { ok: false, reason: 'bad-request', message: 'messageId 必填，且长度不超过 200' };
  }
  const text = typeof o.text === 'string' ? o.text.trim() : '';
  if (!text) return { ok: false, reason: 'bad-request', message: '消息为空' };
  if (text.length > MAX_BRIDGE_TEXT_LENGTH) {
    return { ok: false, reason: 'bad-request', message: '消息过长（限 2000 字）' };
  }
  if (o.isGroup !== undefined && typeof o.isGroup !== 'boolean') {
    return { ok: false, reason: 'bad-request', message: 'isGroup 必须是布尔值' };
  }
  return {
    ok: true,
    value: {
      platform,
      senderId,
      ...(rawName ? { senderName: rawName } : {}),
      messageId,
      text,
      isGroup: o.isGroup === true,
    },
  };
}

/** 去重 + 每发送者限流的进程内状态；重启后去重窗口清空（文档已说明）。 */
export class BridgeRuntime {
  declare private readonly seen: Map<string, number>;
  declare private readonly hits: Map<string, number[]>;
  declare private readonly now: () => number;

  constructor(now: () => number = () => Date.now()) {
    this.seen = new Map();
    this.hits = new Map();
    this.now = now;
  }

  /** 清理过期去重键与一分钟前的限流记录。 */
  prune(): void {
    const t = this.now();
    for (const [key, expires] of this.seen) {
      if (expires <= t) this.seen.delete(key);
    }
    for (const [key, list] of this.hits) {
      const keep = list.filter((ts) => t - ts < 60_000);
      if (keep.length) this.hits.set(key, keep);
      else this.hits.delete(key);
    }
  }

  /** 这个 messageId 是否已在去重窗口内。 */
  isDuplicate(key: string, ttlSec: number): boolean {
    this.prune();
    if (!Number.isFinite(ttlSec) || ttlSec <= 0) return false;
    const expires = this.seen.get(key);
    return expires !== undefined && expires > this.now();
  }

  /** 记住一个已接受的 messageId。 */
  remember(key: string, ttlSec: number): void {
    if (!Number.isFinite(ttlSec) || ttlSec <= 0) return;
    this.seen.set(key, this.now() + Math.floor(ttlSec) * 1000);
  }

  /** 生成失败/被拒绝时撤销去重键，让桥接器的重试仍有机会成功。 */
  forget(key: string): void {
    this.seen.delete(key);
  }

  /** 每发送者每分钟限流；limit <= 0 表示不限制。 */
  allow(senderKey: string, limit: number): boolean {
    this.prune();
    if (!Number.isFinite(limit) || limit <= 0) return true;
    const t = this.now();
    const list = this.hits.get(senderKey) ?? [];
    const recent = list.filter((ts) => t - ts < 60_000);
    if (recent.length >= Math.floor(limit)) {
      this.hits.set(senderKey, recent);
      return false;
    }
    recent.push(t);
    this.hits.set(senderKey, recent);
    return true;
  }

  /** 测试/重载用：清空所有窗口。 */
  reset(): void {
    this.seen.clear();
    this.hits.clear();
  }
}

/** 聊天生成回调：由 index.ts 注入，避免 bridge 模块直接依赖 Cordis ctx。 */
export type BridgeChat = (
  petId: string,
  text: string,
  opts: { memoryKey: string; writeSay: boolean; speaker: string },
) => Promise<{ ok: true; text: string; image?: string } | { ok: false; reason: string; message?: string }>;

/** 出站回复回调。 */
export interface BridgeReplyRequest {
  url: string;
  token: string;
  payload: {
    platform: string;
    senderId: string;
    senderName?: string;
    messageId: string;
    isGroup: boolean;
    petId: string;
    conversation: string;
    reply: string;
    image?: string;
  };
}

/** 处理一条入站消息：鉴权 → 白名单 → 去重/限流 → 调模型 → 组装回调。 */
export async function processBridgeInbound(input: {
  config: BridgeConfig;
  headers: Record<string, string | string[] | undefined>;
  body: string | undefined;
  runtime: BridgeRuntime;
  chat: BridgeChat;
}): Promise<{ status: number; obj: Record<string, unknown>; callback?: BridgeReplyRequest }> {
  const { config, headers, body, runtime, chat } = input;
  if (!config.enabled) {
    return { status: 200, obj: { ok: false, reason: 'bridge-disabled', message: '消息接入未启用' } };
  }
  if (!config.token || !bridgeTokenMatches(config.token, bridgeTokenFromHeaders(headers))) {
    return { status: 401, obj: { ok: false, reason: 'unauthorized', message: 'token 不正确' } };
  }
  if (body !== undefined && Buffer.byteLength(body, 'utf8') > MAX_BRIDGE_BODY_BYTES) {
    return { status: 413, obj: { ok: false, reason: 'too-large', message: '请求体超过 64 KiB' } };
  }
  if (!body) {
    return { status: 400, obj: { ok: false, reason: 'bad-request', message: '请求体为空' } };
  }
  let raw: unknown;
  try {
    raw = JSON.parse(body);
  } catch {
    return { status: 400, obj: { ok: false, reason: 'bad-request', message: 'invalid JSON body' } };
  }
  const parsed = parseBridgePayload(raw);
  if (!parsed.ok) return { status: 400, obj: { ok: false, reason: parsed.reason, message: parsed.message } };
  const msg = parsed.value;
  if (!isBridgeSenderAllowed(config, msg.platform, msg.senderId, msg.isGroup)) {
    return {
      status: 403,
      obj: {
        ok: false,
        reason: msg.isGroup && !config.allowGroups ? 'group-not-allowed' : 'not-whitelisted',
        message: '发送者不在白名单或群聊未启用',
      },
    };
  }
  const senderKey = msg.platform + '\u0000' + msg.senderId;
  const messageKey = senderKey + '\u0000' + msg.messageId;
  if (runtime.isDuplicate(messageKey, config.dedupeTtlSec)) {
    return { status: 200, obj: { ok: true, duplicate: true, messageId: msg.messageId } };
  }
  if (!runtime.allow(senderKey, config.rateLimitPerMin)) {
    return { status: 429, obj: { ok: false, reason: 'rate-limited', message: '发送太频繁，请稍后再试' } };
  }
  runtime.remember(messageKey, config.dedupeTtlSec);
  const speaker = msg.platform + '·' + (msg.senderName || msg.senderId);
  let result: Awaited<ReturnType<BridgeChat>>;
  try {
    result = await chat(config.petId, msg.text, {
      memoryKey: bridgeConversationKey(msg.platform, msg.senderId),
      writeSay: config.writeSay,
      speaker,
    });
  } catch (e) {
    runtime.forget(messageKey);
    return {
      status: 200,
      obj: { ok: false, reason: 'generate-error', message: e instanceof Error ? e.message : String(e) },
    };
  }
  if (!result.ok) {
    runtime.forget(messageKey);
    return {
      status: 200,
      obj: { ok: false, reason: result.reason, ...(result.message ? { message: result.message } : {}) },
    };
  }
  const callback: BridgeReplyRequest | undefined = config.replyUrl
    ? {
        url: config.replyUrl,
        token: config.token,
        payload: {
          platform: msg.platform,
          senderId: msg.senderId,
          ...(msg.senderName ? { senderName: msg.senderName } : {}),
          messageId: msg.messageId,
          isGroup: msg.isGroup,
          petId: config.petId,
          conversation: bridgeConversationKey(msg.platform, msg.senderId),
          reply: result.text,
          ...(result.image ? { image: result.image } : {}),
        },
      }
    : undefined;
  return {
    status: 200,
    obj: {
      ok: true,
      reply: result.text,
      ...(result.image ? { image: result.image } : {}),
      petId: config.petId,
      messageId: msg.messageId,
      conversation: bridgeConversationKey(msg.platform, msg.senderId),
    },
    ...(callback ? { callback } : {}),
  };
}

/** 把回复 POST 到桥接器配置的回调地址；失败只返回结构化结果，由调用方记日志。 */
export async function postBridgeReply(
  req: BridgeReplyRequest,
  timeoutMs = 10_000,
): Promise<{ ok: true; status: number } | { ok: false; status?: number; error: string }> {
  if (!normalizeBridgeReplyUrl(req.url)) return { ok: false, error: '回调地址不是合法的 http/https URL' };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), Math.max(1, timeoutMs));
  try {
    const res = await fetch(req.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        authorization: 'Bearer ' + req.token,
        'x-dsh-pet-bridge-token': req.token,
      },
      body: JSON.stringify(req.payload),
      signal: controller.signal,
      redirect: 'error',
    });
    return res.ok ? { ok: true, status: res.status } : { ok: false, status: res.status, error: 'HTTP ' + res.status };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  } finally {
    clearTimeout(timer);
  }
}
