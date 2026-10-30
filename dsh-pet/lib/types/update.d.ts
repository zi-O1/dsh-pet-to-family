import type { UpdateStatus } from '../shared/update';
/** 解析后的 pnpm 调用方式。 */
export interface UpdateBackend {
    profileDir: string;
    command: string;
    args: string[];
    env: Record<string, string | undefined>;
    kind: 'plugin-manager' | 'pnpm';
}
/** 比较 x.y.z（允许 -pre / +build 后缀）；返回 <0 / 0 / >0。非数字段按 0。 */
export declare function compareVersions(a: string, b: string): number;
/** 读一个 package.json 的 version；读不到返回 undefined。 */
export declare function readPackageVersion(path: string): string | undefined;
/** 从包目录向上找 profile 根（有 pnpm-workspace.yaml 或 pnpm-lock.yaml 的那一级）。 */
export declare function findProfileRoot(start: string): string | undefined;
/** 把 pluginManager 服务解析成可执行的 pnpm 调用；缺失时退回 PATH 上的 pnpm。 */
export declare function resolveUpdateBackend(manager: unknown, packageRoot: string, platform?: NodeJS.Platform): UpdateBackend | undefined;
/** 去掉 pnpm 输出里的 ANSI 控制序列。 */
export declare function stripAnsi(text: string): string;
/** 从注册表读取 latest；按官方 → npmmirror → 腾讯云顺序尝试。 */
export declare function fetchLatestVersion(fetchImpl?: typeof fetch): Promise<{
    version: string;
    registry: string;
}>;
/** 更新控制器：一个插件进程一份，设置页轮询 status()。 */
export interface UpdateController {
    check: (force?: boolean) => Promise<UpdateStatus>;
    start: () => Promise<{
        ok: boolean;
        reason?: string;
        version?: string;
        message?: string;
    }>;
    status: () => UpdateStatus;
}
/** 创建更新控制器。 */
export declare function createUpdateController(options: {
    packageRoot: string;
    manager: () => unknown;
    logger?: {
        info?: (message: string) => void;
        warn?: (message: string) => void;
    };
    fetchImpl?: typeof fetch;
}): UpdateController;
