export interface WechatAuth {
    botId: string;
    accountId: string;
    ownerUserId: string;
    token: string;
    baseUrl: string;
    connectedAt: string;
}
export interface QqAuth {
    botId: string;
    appId: string;
    appSecret: string;
    ownerUserOpenid: string;
    connectedAt: string;
}
export interface ImAuth {
    version: 1;
    wechat?: WechatAuth;
    qq?: QqAuth;
}
export interface WechatState {
    getUpdatesBuf: string;
    seenMessageIds: string[];
    contextTokens: Record<string, {
        token: string;
        seq?: string;
        at: number;
    }>;
}
export interface ImState {
    version: 1;
    wechat: WechatState;
    qq: {
        seenMessageIds: string[];
    };
}
export declare class ImStore {
    #private;
    readonly authPath: string;
    readonly statePath: string;
    auth: ImAuth;
    state: ImState;
    constructor(userRoot: string);
    load(): Promise<void>;
    saveAuth(): Promise<void>;
    saveState(): Promise<void>;
    clearAuth(platform: 'wechat' | 'qq'): Promise<void>;
    clearState(platform: 'wechat' | 'qq'): Promise<void>;
}
/** 删除文件；不存在视为成功。 */
export declare function removeIfExists(path: string): Promise<void>;
