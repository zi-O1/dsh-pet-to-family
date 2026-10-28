/**
 * 原生微信 / QQ 接入的本地持久化。
 *
 * 两份文件：
 *  - im-auth.json：登录凭据（微信 bot_token、QQ appSecret 等），0600；
 *  - im-state.json：长轮询游标、context_token、去重 id 等运行状态，0600。
 * 两份都不进入 main-config.jsonc，也不会被打日志。
 * @module dsh-pet/src/host/im/store
 */
import { mkdir, readFile, rename, unlink, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

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
  contextTokens: Record<string, { token: string; seq?: string; at: number }>;
}

export interface ImState {
  version: 1;
  wechat: WechatState;
  qq: { seenMessageIds: string[] };
}

const EMPTY_STATE: ImState = {
  version: 1,
  wechat: { getUpdatesBuf: '', seenMessageIds: [], contextTokens: {} },
  qq: { seenMessageIds: [] },
};

function safeString(value: unknown, max = 4096): string {
  return typeof value === 'string' ? value.slice(0, max) : '';
}

function normalizeAuth(raw: unknown): ImAuth {
  const o = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
  const w = o.wechat && typeof o.wechat === 'object' ? (o.wechat as Record<string, unknown>) : null;
  const q = o.qq && typeof o.qq === 'object' ? (o.qq as Record<string, unknown>) : null;
  const wechat =
    w && safeString(w.botId) && safeString(w.accountId) && safeString(w.ownerUserId) && safeString(w.token)
      ? {
          botId: safeString(w.botId, 128),
          accountId: safeString(w.accountId, 256),
          ownerUserId: safeString(w.ownerUserId, 256),
          token: safeString(w.token, 4096),
          baseUrl: safeString(w.baseUrl, 2048) || 'https://ilinkai.weixin.qq.com/',
          connectedAt: safeString(w.connectedAt, 64) || new Date().toISOString(),
        }
      : undefined;
  const qq =
    q && safeString(q.botId) && safeString(q.appId) && safeString(q.appSecret) && safeString(q.ownerUserOpenid)
      ? {
          botId: safeString(q.botId, 128),
          appId: safeString(q.appId, 128),
          appSecret: safeString(q.appSecret, 512),
          ownerUserOpenid: safeString(q.ownerUserOpenid, 256),
          connectedAt: safeString(q.connectedAt, 64) || new Date().toISOString(),
        }
      : undefined;
  return { version: 1, ...(wechat ? { wechat } : {}), ...(qq ? { qq } : {}) };
}

function normalizeState(raw: unknown): ImState {
  const o = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
  const w = o.wechat && typeof o.wechat === 'object' ? (o.wechat as Record<string, unknown>) : {};
  const q = o.qq && typeof o.qq === 'object' ? (o.qq as Record<string, unknown>) : {};
  const contexts: WechatState['contextTokens'] = {};
  const rawContexts =
    w.contextTokens && typeof w.contextTokens === 'object' ? (w.contextTokens as Record<string, unknown>) : {};
  for (const [id, entry] of Object.entries(rawContexts).slice(-1000)) {
    const e = entry && typeof entry === 'object' ? (entry as Record<string, unknown>) : {};
    const token = safeString(e.token, 4096);
    if (!id || !token) continue;
    contexts[id] = {
      token,
      ...(safeString(e.seq, 64) ? { seq: safeString(e.seq, 64) } : {}),
      at: Number.isFinite(Number(e.at)) ? Number(e.at) : Date.now(),
    };
  }
  const ids = (value: unknown): string[] =>
    Array.isArray(value)
      ? value
          .map((v) => safeString(v, 256))
          .filter(Boolean)
          .slice(-1000)
      : [];
  return {
    version: 1,
    wechat: {
      getUpdatesBuf: safeString(w.getUpdatesBuf, 4096),
      seenMessageIds: ids(w.seenMessageIds),
      contextTokens: contexts,
    },
    qq: { seenMessageIds: ids(q.seenMessageIds) },
  };
}

export class ImStore {
  readonly authPath: string;
  readonly statePath: string;
  auth: ImAuth = { version: 1 };
  state: ImState = structuredClone(EMPTY_STATE);
  #queue: Promise<void> = Promise.resolve();

  constructor(userRoot: string) {
    this.authPath = join(userRoot, 'im-auth.json');
    this.statePath = join(userRoot, 'im-state.json');
  }

  async load(): Promise<void> {
    try {
      this.auth = normalizeAuth(JSON.parse(await readFile(this.authPath, 'utf8')));
    } catch (e) {
      if ((e as { code?: string })?.code !== 'ENOENT') this.auth = { version: 1 };
    }
    try {
      this.state = normalizeState(JSON.parse(await readFile(this.statePath, 'utf8')));
    } catch (e) {
      if ((e as { code?: string })?.code !== 'ENOENT') this.state = structuredClone(EMPTY_STATE);
    }
  }

  async saveAuth(): Promise<void> {
    await this.#write(this.authPath, this.auth);
  }

  async saveState(): Promise<void> {
    await this.#write(this.statePath, this.state);
  }

  async clearAuth(platform: 'wechat' | 'qq'): Promise<void> {
    if (platform === 'wechat') delete this.auth.wechat;
    else delete this.auth.qq;
    await this.saveAuth();
  }

  async clearState(platform: 'wechat' | 'qq'): Promise<void> {
    if (platform === 'wechat') this.state.wechat = structuredClone(EMPTY_STATE.wechat);
    else this.state.qq = structuredClone(EMPTY_STATE.qq);
    await this.saveState();
  }

  /** 串行写盘（同进程内多个消息同时更新游标时防交错）。 */
  #write(path: string, value: unknown): Promise<void> {
    const operation = this.#queue.then(async () => {
      await mkdir(dirname(path), { recursive: true, mode: 0o700 });
      const temp = `${path}.${process.pid}.${Date.now()}.tmp`;
      await writeFile(temp, JSON.stringify(value, null, 2) + '\n', { encoding: 'utf8', mode: 0o600 });
      await rename(temp, path);
    });
    this.#queue = operation.then(
      () => undefined,
      () => undefined,
    );
    return operation;
  }
}

/** 删除文件；不存在视为成功。 */
export async function removeIfExists(path: string): Promise<void> {
  try {
    await unlink(path);
  } catch (e) {
    if ((e as { code?: string })?.code !== 'ENOENT') throw e;
  }
}
