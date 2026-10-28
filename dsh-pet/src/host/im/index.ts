/**
 * 原生微信 / QQ 接入的总控：配置读取、登录生命周期、白名单、pet 对话与平台发送。
 *
 * 与通用 Webhook bridge 独立：这里由插件自己连接平台，不经过任何外部桥接器。
 * @module dsh-pet/src/host/im
 */
import type { ImChannelConfig, ImConfig } from '../../shared/im';
import type { ImStore, QqAuth, WechatAuth } from './store';
import { createWeixinApi } from './weixin-api';
import { WechatLogin, WechatRuntime, type WechatAttempt, type WechatRuntimeStatus } from './wechat';
import { deriveQqBotId, QqRuntime, type QqRuntimeStatus } from './qq';
import type { ImInbound, ImLogger } from './wechat';

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

type ChatFn = (
  petId: string,
  text: string,
  opts: { memoryKey: string; writeSay: boolean; speaker: string },
) => Promise<{ ok: true; text: string; image?: string } | { ok: false; reason: string; message?: string }>;

function maskId(value: string | undefined): string | undefined {
  if (!value) return undefined;
  if (value.length <= 8) return value;
  return `${value.slice(0, 4)}••${value.slice(-4)}`;
}

function platformName(platform: 'wechat' | 'qq'): string {
  return platform === 'wechat' ? '微信' : 'QQ';
}

export class NativeImManager {
  #store: ImStore;
  #getConfig: () => ImConfig;
  #chat: ChatFn;
  #log: ImLogger;
  #wechatApi = createWeixinApi();
  #wechatLogin: WechatLogin | null = null;
  #wechat: WechatRuntime | null = null;
  #qq: QqRuntime | null = null;
  #started = false;

  constructor(options: { store: ImStore; getConfig: () => ImConfig; chat: ChatFn; log: ImLogger }) {
    this.#store = options.store;
    this.#getConfig = options.getConfig;
    this.#chat = options.chat;
    this.#log = options.log;
  }

  async start(): Promise<void> {
    if (this.#started) return;
    this.#started = true;
    await this.#store.load();
    this.#sync();
  }

  async stop(): Promise<void> {
    this.#started = false;
    this.#wechatLogin?.cancel();
    this.#wechatLogin = null;
    await this.#wechat?.stop().catch(() => undefined);
    this.#wechat = null;
    await this.#qq?.stop().catch(() => undefined);
    this.#qq = null;
  }

  /** 配置保存/同步后调用：按最新 enabled 状态启停，不改已登录凭据。 */
  reload(): void {
    this.#sync();
  }

  status(): ImStatus {
    const wechat =
      this.#wechat?.status() ??
      ({
        state: 'idle',
        connected: false,
        messagesReceived: 0,
        messagesReplied: 0,
      } satisfies WechatRuntimeStatus);
    const qq =
      this.#qq?.status() ??
      ({
        state: 'idle',
        connected: false,
        messagesReceived: 0,
        messagesReplied: 0,
      } satisfies QqRuntimeStatus);
    return {
      wechat: {
        connected: wechat.connected,
        state: wechat.state,
        ...(maskId(wechat.accountId) ? { account: maskId(wechat.accountId) } : {}),
        ...(maskId(wechat.ownerUserId) ? { owner: maskId(wechat.ownerUserId) } : {}),
        ...(wechat.lastError ? { lastError: wechat.lastError } : {}),
        messagesReceived: wechat.messagesReceived,
        messagesReplied: wechat.messagesReplied,
        login: this.#wechatLogin?.status() ?? null,
      },
      qq: {
        connected: qq.connected,
        state: qq.state,
        ...(qq.appId ? { appId: qq.appId } : {}),
        ...(qq.lastError ? { lastError: qq.lastError } : {}),
        messagesReceived: qq.messagesReceived,
        messagesReplied: qq.messagesReplied,
      },
    };
  }

  async startWechatLogin(): Promise<WechatAttempt> {
    this.#wechatLogin?.cancel();
    this.#wechatLogin = new WechatLogin(this.#wechatApi, this.#store, async (auth) => {
      await this.#startWechat(auth);
    });
    return this.#wechatLogin.start();
  }

  wechatLoginStatus(): WechatAttempt | null {
    return this.#wechatLogin?.status() ?? null;
  }

  cancelWechatLogin(): void {
    this.#wechatLogin?.cancel();
    this.#wechatLogin = null;
  }

  submitWechatVerifyCode(code: string): WechatAttempt | null {
    return this.#wechatLogin?.submitVerifyCode(code) ?? null;
  }

  async logoutWechat(): Promise<void> {
    this.#wechatLogin?.cancel();
    this.#wechatLogin = null;
    await this.#wechat?.stop().catch(() => undefined);
    this.#wechat = null;
    await this.#store.clearAuth('wechat');
    await this.#store.clearState('wechat');
  }

  async bindQq(appId: string, appSecret: string): Promise<void> {
    const id = appId.trim();
    const secret = appSecret.trim();
    if (!id || !secret) throw new Error('QQ AppID 和 AppSecret 都必填');
    if (!/^[A-Za-z0-9_-]{1,128}$/.test(id)) throw new Error('QQ AppID 格式不正确');
    if (secret.length > 512) throw new Error('QQ AppSecret 过长');
    const auth: QqAuth = {
      botId: deriveQqBotId(id),
      appId: id,
      appSecret: secret,
      ownerUserOpenid: '',
      connectedAt: new Date().toISOString(),
    };
    this.#store.auth.qq = auth;
    await this.#store.saveAuth();
    await this.#startQq(auth);
  }

  async logoutQq(): Promise<void> {
    await this.#qq?.stop().catch(() => undefined);
    this.#qq = null;
    await this.#store.clearAuth('qq');
    await this.#store.clearState('qq');
  }

  #sync(): void {
    if (!this.#started) return;
    const config = this.#getConfig();
    if (!config.wechat.enabled) {
      void this.#wechat?.stop().catch(() => undefined);
      this.#wechat = null;
    } else if (this.#store.auth.wechat && !this.#wechat) {
      void this.#startWechat(this.#store.auth.wechat).catch((error) => {
        this.#log.warn(`[dsh-pet] 微信连接失败：${error instanceof Error ? error.message : String(error)}`);
      });
    }
    if (!config.qq.enabled) {
      void this.#qq?.stop().catch(() => undefined);
      this.#qq = null;
    } else if (this.#store.auth.qq && !this.#qq) {
      void this.#startQq(this.#store.auth.qq).catch((error) => {
        this.#log.warn(`[dsh-pet] QQ 连接失败：${error instanceof Error ? error.message : String(error)}`);
      });
    }
  }

  async #startWechat(auth: WechatAuth): Promise<void> {
    await this.#wechat?.stop().catch(() => undefined);
    const runtime = new WechatRuntime({
      api: this.#wechatApi,
      auth,
      store: this.#store,
      getConfig: () => this.#getConfig().wechat,
      chat: (inbound) => this.#handle(inbound),
      log: this.#log,
    });
    this.#wechat = runtime;
    try {
      await runtime.start();
    } catch (error) {
      if (this.#wechat === runtime) this.#wechat = null;
      await runtime.stop().catch(() => undefined);
      throw error;
    }
  }

  async #startQq(auth: QqAuth): Promise<void> {
    await this.#qq?.stop().catch(() => undefined);
    const runtime = new QqRuntime({
      auth,
      store: this.#store,
      getConfig: () => this.#getConfig().qq,
      chat: (inbound) => this.#handle(inbound),
      log: this.#log,
    });
    this.#qq = runtime;
    try {
      await runtime.start();
    } catch (error) {
      if (this.#qq === runtime) this.#qq = null;
      await runtime.stop().catch(() => undefined);
      throw error;
    }
  }

  async #handle(inbound: ImInbound): Promise<{ reply?: string; reason?: string; message?: string }> {
    const config = this.#getConfig()[inbound.platform];
    if (!config.enabled) return { reason: 'platform-disabled' };
    if (!config.petId.trim()) return { reason: 'pet-required' };
    if (inbound.isGroup && !config.allowGroups) return { reason: 'group-not-allowed' };
    const allowed = this.#allowed(config, inbound);
    if (!allowed) return { reason: 'not-whitelisted' };
    const speaker = `${platformName(inbound.platform)}·${inbound.senderName || inbound.senderId}`;
    const result = await this.#chat(config.petId, inbound.text, {
      memoryKey: `im:${inbound.platform}:${inbound.senderId}`,
      writeSay: config.writeSay,
      speaker,
    });
    if (!result.ok) return { reason: result.reason, ...(result.message ? { message: result.message } : {}) };
    return { reply: result.text };
  }

  #allowed(config: ImChannelConfig, inbound: ImInbound): boolean {
    if (config.whitelist.some((entry) => entry.platform === inbound.platform && entry.id === inbound.senderId)) {
      return true;
    }
    if (!config.allowOwner) return false;
    const owner =
      inbound.platform === 'wechat' ? this.#store.auth.wechat?.ownerUserId : this.#store.auth.qq?.ownerUserOpenid;
    return Boolean(owner && owner === inbound.senderId);
  }
}
