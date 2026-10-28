/**
 * 原生微信 / QQ 接入的总控：配置读取、登录生命周期、白名单、pet 对话与平台发送。
 *
 * 与通用 Webhook bridge 独立：这里由插件自己连接平台，不经过任何外部桥接器。
 * @module dsh-pet/src/host/im
 */
import type { ImConfig } from '../../shared/im';
import type { ImStore } from './store';
import { type WechatAttempt } from './wechat';
import type { ImLogger } from './wechat';
export interface ImStatus {
    wechat: {
        connected: boolean;
        state: string;
        account?: string;
        owner?: string;
        lastError?: string;
        messagesReceived: number;
        messagesReplied: number;
        login?: WechatAttempt | null;
    };
    qq: {
        connected: boolean;
        state: string;
        appId?: string;
        lastError?: string;
        messagesReceived: number;
        messagesReplied: number;
    };
}
type ChatFn = (petId: string, text: string, opts: {
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
export declare class NativeImManager {
    #private;
    constructor(options: {
        store: ImStore;
        getConfig: () => ImConfig;
        chat: ChatFn;
        log: ImLogger;
    });
    start(): Promise<void>;
    stop(): Promise<void>;
    /** 配置保存/同步后调用：按最新 enabled 状态启停，不改已登录凭据。 */
    reload(): void;
    status(): ImStatus;
    startWechatLogin(): Promise<WechatAttempt>;
    wechatLoginStatus(): WechatAttempt | null;
    cancelWechatLogin(): void;
    submitWechatVerifyCode(code: string): WechatAttempt | null;
    logoutWechat(): Promise<void>;
    bindQq(appId: string, appSecret: string): Promise<void>;
    logoutQq(): Promise<void>;
}
export {};
