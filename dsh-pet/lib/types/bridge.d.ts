import type { BridgeConfig, BridgeWhitelistEntry } from '../shared/bridge';
export type { BridgeConfig, BridgeWhitelistEntry } from '../shared/bridge';
/** 入站请求体上限：文本消息 64 KiB 足够，超过直接 413。 */
export declare const MAX_BRIDGE_BODY_BYTES: number;
/** 单条文本上限（与 /chat 一致）。 */
export declare const MAX_BRIDGE_TEXT_LENGTH = 2000;
/** 内置默认值（与 shared/bridge 的 DEFAULT_BRIDGE 逐字段一致）。 */
export declare const DEFAULT_BRIDGE: BridgeConfig;
/** 只保留 http/https 且不带用户名密码的回调地址；非法返回空串。 */
export declare function normalizeBridgeReplyUrl(value: unknown): string;
/** 平台名归一化：小写、短标识；非法返回空串。 */
export declare function normalizeBridgePlatform(value: unknown): string;
/** 一条白名单归一化；非法返回 null。 */
export declare function normalizeBridgeWhitelistEntry(value: unknown): BridgeWhitelistEntry | null;
/** 白名单数组归一化：跳过非法项、按 platform+id 去重、限制条数。 */
export declare function normalizeBridgeWhitelist(value: unknown): BridgeWhitelistEntry[];
/** 配置归一化：缺失/非法字段回落默认值。 */
export declare function normalizeBridgeConfig(raw: unknown): BridgeConfig;
/** 配置段是否可写盘/可合并：已知字段类型与范围必须合法；开启时必须给出宠物和强 token。 */
export declare function bridgeValid(raw: unknown): boolean;
/** 常量时间比较 token；长度不同直接 false（timingSafeEqual 要求同长度）。 */
export declare function bridgeTokenMatches(expected: string, actual: string): boolean;
/** 从 headers 里取 token：优先 Authorization: Bearer，其次 X-DSH-Pet-Bridge-Token。 */
export declare function bridgeTokenFromHeaders(headers: Record<string, string | string[] | undefined>): string;
/** 白名单 + 群聊策略：平台/发送者 id 精确匹配才放行。 */
export declare function isBridgeSenderAllowed(config: BridgeConfig, platform: string, senderId: string, isGroup: boolean): boolean;
/** 每个发送者独立记忆桶：同一个人和桌宠的对话不会和主人本机聊天混在一起。 */
export declare function bridgeConversationKey(platform: string, senderId: string): string;
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
export type BridgePayloadResult = {
    ok: true;
    value: BridgeInboundPayload;
} | {
    ok: false;
    reason: 'bad-request';
    message: string;
};
/** 解析并校验入站 JSON。 */
export declare function parseBridgePayload(raw: unknown): BridgePayloadResult;
/** 去重 + 每发送者限流的进程内状态；重启后去重窗口清空（文档已说明）。 */
export declare class BridgeRuntime {
    private readonly seen;
    private readonly hits;
    private readonly now;
    constructor(now?: () => number);
    /** 清理过期去重键与一分钟前的限流记录。 */
    prune(): void;
    /** 这个 messageId 是否已在去重窗口内。 */
    isDuplicate(key: string, ttlSec: number): boolean;
    /** 记住一个已接受的 messageId。 */
    remember(key: string, ttlSec: number): void;
    /** 生成失败/被拒绝时撤销去重键，让桥接器的重试仍有机会成功。 */
    forget(key: string): void;
    /** 每发送者每分钟限流；limit <= 0 表示不限制。 */
    allow(senderKey: string, limit: number): boolean;
    /** 测试/重载用：清空所有窗口。 */
    reset(): void;
}
/** 聊天生成回调：由 index.ts 注入，避免 bridge 模块直接依赖 Cordis ctx。 */
export type BridgeChat = (petId: string, text: string, opts: {
    memoryKey: string;
    writeSay: boolean;
    speaker: string;
}) => Promise<{
    ok: true;
    text: string;
    image?: string;
} | {
    ok: false;
    reason: string;
    message?: string;
}>;
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
export declare function processBridgeInbound(input: {
    config: BridgeConfig;
    headers: Record<string, string | string[] | undefined>;
    body: string | undefined;
    runtime: BridgeRuntime;
    chat: BridgeChat;
}): Promise<{
    status: number;
    obj: Record<string, unknown>;
    callback?: BridgeReplyRequest;
}>;
/** 把回复 POST 到桥接器配置的回调地址；失败只返回结构化结果，由调用方记日志。 */
export declare function postBridgeReply(req: BridgeReplyRequest, timeoutMs?: number): Promise<{
    ok: true;
    status: number;
} | {
    ok: false;
    status?: number;
    error: string;
}>;
