/**
 * 原生微信 / QQ 接入（不依赖 dsh-im）的共享配置与纯逻辑。
 *
 * 只负责配置形状、默认值与设置页校验；协议连接、二维码登录、收发消息在 host/im。
 * 白名单沿用通用消息接入的 `platform | id | name` 文本格式，方便设置页复用同一套解析器。
 * @module dsh-pet/src/shared/im
 */
import {
  normalizeBridgeWhitelist,
  normalizeBridgeWhitelistEntry,
  parseBridgeWhitelistText,
  formatBridgeWhitelist,
  type BridgeWhitelistEntry,
} from './bridge';

export type ImPlatform = 'wechat' | 'qq';
export type ImWhitelistEntry = BridgeWhitelistEntry;

/** 单个平台的配置。 */
export interface ImChannelConfig {
  /** 总开关；关闭时不连接平台、不处理入站。 */
  enabled: boolean;
  /** 用哪只桌宠回复；启用时必须真实存在。 */
  petId: string;
  /** 权限白名单：platform + id 精确匹配才回复。 */
  whitelist: ImWhitelistEntry[];
  /** 是否自动放行登录账号本人（微信 owner / QQ 扫码人）。 */
  allowOwner: boolean;
  /** 是否允许群聊（QQ）。微信 iLink 目前只处理私聊。 */
  allowGroups: boolean;
  /** 回复是否同时写桌面气泡。 */
  writeSay: boolean;
}

/** 顶层 main.im。 */
export interface ImConfig {
  wechat: ImChannelConfig;
  qq: ImChannelConfig;
}

export const IM_PLATFORMS: readonly ImPlatform[] = ['wechat', 'qq'] as const;

const DEFAULT_CHANNEL: ImChannelConfig = {
  enabled: false,
  petId: '',
  whitelist: [],
  allowOwner: true,
  allowGroups: false,
  writeSay: false,
};

export const DEFAULT_IM: ImConfig = {
  wechat: { ...DEFAULT_CHANNEL, whitelist: [] },
  qq: { ...DEFAULT_CHANNEL, whitelist: [] },
};

/** 单个平台配置归一化：缺失/非法字段回落默认值。 */
export function normalizeImChannel(raw: unknown): ImChannelConfig {
  const o = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
  return {
    enabled: typeof o.enabled === 'boolean' ? o.enabled : DEFAULT_CHANNEL.enabled,
    petId: typeof o.petId === 'string' ? o.petId.trim().slice(0, 64) : '',
    whitelist: normalizeBridgeWhitelist(o.whitelist),
    allowOwner: typeof o.allowOwner === 'boolean' ? o.allowOwner : DEFAULT_CHANNEL.allowOwner,
    allowGroups: typeof o.allowGroups === 'boolean' ? o.allowGroups : DEFAULT_CHANNEL.allowGroups,
    writeSay: typeof o.writeSay === 'boolean' ? o.writeSay : DEFAULT_CHANNEL.writeSay,
  };
}

/** 顶层 im 归一化。 */
export function normalizeImConfig(raw: unknown): ImConfig {
  const o = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
  return {
    wechat: normalizeImChannel(o.wechat),
    qq: normalizeImChannel(o.qq),
  };
}

const WHITELIST_MAX = 200;

/** 配置段是否可写盘/可合并。 */
export function isValidImConfig(raw: unknown): boolean {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return false;
  const o = raw as Record<string, unknown>;
  for (const platform of IM_PLATFORMS) {
    const channel = o[platform];
    if (channel === undefined) continue;
    if (!channel || typeof channel !== 'object' || Array.isArray(channel)) return false;
    const c = channel as Record<string, unknown>;
    if (c.enabled !== undefined && typeof c.enabled !== 'boolean') return false;
    if (c.petId !== undefined && (typeof c.petId !== 'string' || c.petId.trim().length > 64)) return false;
    if (c.allowOwner !== undefined && typeof c.allowOwner !== 'boolean') return false;
    if (c.allowGroups !== undefined && typeof c.allowGroups !== 'boolean') return false;
    if (c.writeSay !== undefined && typeof c.writeSay !== 'boolean') return false;
    if (c.whitelist !== undefined) {
      if (!Array.isArray(c.whitelist) || c.whitelist.length > WHITELIST_MAX) return false;
      for (const item of c.whitelist) {
        if (!normalizeBridgeWhitelistEntry(item)) return false;
      }
    }
    if (c.enabled === true && (typeof c.petId !== 'string' || !c.petId.trim())) return false;
  }
  return true;
}

/** 白名单文本 → 数组（与通用消息接入同一格式）。 */
export const parseImWhitelistText = parseBridgeWhitelistText;
/** 白名单数组 → 设置页文本。 */
export const formatImWhitelist = formatBridgeWhitelist;
export type ImWhitelistParseResult = ReturnType<typeof parseBridgeWhitelistText>;

/** 设置页展示的登录尝试（host 只返回公开字段，不含 token）。 */
export interface ImLoginAttemptView {
  id: string;
  status: 'starting' | 'pending' | 'scanned' | 'needs_verification' | 'connecting' | 'connected' | 'expired' | 'failed';
  qrCodeDataUrl?: string;
  verificationUrl?: string;
  expiresAt: number;
  verificationRequired?: boolean;
  accountId?: string;
  error?: { code: string; message: string };
}

export interface ImWechatStatusView {
  connected: boolean;
  state: string;
  account?: string;
  owner?: string;
  lastError?: string;
  messagesReceived: number;
  messagesReplied: number;
  login?: ImLoginAttemptView | null;
}

export interface ImQqStatusView {
  connected: boolean;
  state: string;
  appId?: string;
  lastError?: string;
  messagesReceived: number;
  messagesReplied: number;
}

/** GET /im/status 的公开形态。 */
export interface ImStatusView {
  wechat: ImWechatStatusView;
  qq: ImQqStatusView;
}
