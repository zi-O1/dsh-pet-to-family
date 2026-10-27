import type { Pet, PetDisplay } from './types';
/** 显示位置白名单。 */
export declare const PET_DISPLAYS: PetDisplay[];
/** 该宠物是否参与浏览器半侧渲染。 */
export declare const isWebVisible: (display: PetDisplay) => boolean;
/** 该宠物是否参与桌面模式（Electron 透明窗）渲染。 */
export declare const isDesktopVisible: (display: PetDisplay) => boolean;
/** 把成品聚合拍平成渲染用宠物列表。
 *  条目级字段（animations / physics / font 等）由所属条目一份、多实例共享；assetRoot 取条目 key，
 *  即素材根。非 main 条目打 extra 标记：文件宠物在设置页不可编辑、保存时排除。 */
export declare function flattenConfigPets(merged: Record<string, Record<string, unknown>>): Pet[];
