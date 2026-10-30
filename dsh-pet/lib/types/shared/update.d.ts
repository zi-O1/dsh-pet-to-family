/**
 * 设置页与宿主共用的「检查更新」状态形状。
 *
 * 只放纯类型，不引入 Node / React：host/update.ts 生成它，client/settings.ts 渲染它。
 * @module dsh-pet/src/shared/update
 */
/** 设置页展示的更新状态。 */
export interface UpdateStatus {
    current: string;
    latest: string | null;
    hasUpdate: boolean;
    /** 应答 latest 的 registry（没有查到时为空）。 */
    registry?: string;
    /** 查询失败的原因（hasUpdate=false 时仍可能带着 current）。 */
    error?: string;
    /** 当前环境是否能真的执行更新。 */
    canApply: boolean;
    /** 更新后端：plugin-manager 的 pnpm、PATH 里的 pnpm，或没有。 */
    backend: 'plugin-manager' | 'pnpm' | 'none';
    state: 'idle' | 'running' | 'done' | 'error';
    /** 正在进行/刚完成的目标版本。 */
    target?: string;
    /** 更新完成后实际落盘的版本。 */
    installed?: string;
    /** 失败原因或给用户的最后一句。 */
    message?: string;
}
