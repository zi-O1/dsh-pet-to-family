/**
 * 独立设置小窗入口：把 DSH 设置页里的「桌宠配置」组件单独挂到一张小页面上。
 *
 * 不依赖 DSH 外壳 / slots / 主界面；只复用 settings.ts 的表单与保存逻辑。
 * 页面由宿主 `/dsh-pet-7340/settings-window` 提供，config / models 等同源私有接口走 Cookie 鉴权。
 * @module dsh-pet/src/settings-window
 */
import { createRoot } from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';
import { useCallback, useEffect, useRef, useState } from 'react';
import { makePetConfigSection, zh, en, petBridge } from '../client/settings';
import { flattenConfigPets } from '../shared/config';
import { SETTINGS_SECTIONS, type SettingsSection } from '../shared/menu';
import type { Pet } from '../shared/types';

const query = new URLSearchParams(location.search);
const lang = query.get('lang') === 'en' ? en : zh;
const t = (key: string): string => (lang as Record<string, string>)[key] ?? key;
const rawSection = query.get('section') ?? '';
const initialSection: SettingsSection = (SETTINGS_SECTIONS as readonly string[]).includes(rawSection)
  ? (rawSection as SettingsSection)
  : 'pets';

const PetConfigSection = makePetConfigSection({
  h: jsx,
  useState,
  useEffect,
  useRef,
  useCallback,
  t,
  initialSection,
});

/** 把宿主返回的成品聚合同步到桥：设置组件保存/同步后也会经 reload 调到这里。 */
function rememberConfig(merged: Record<string, Record<string, unknown>>): void {
  petBridge.current = flattenConfigPets(merged);
  const main = merged.main;
  petBridge.template = Array.isArray(main?.pets) ? ((main.pets[0] as Pet | undefined) ?? undefined) : undefined;
}

petBridge.reload = (merged) => {
  if (merged) rememberConfig(merged);
};

/** 先拿一次成品配置填 petBridge 初值，避免组件首帧空列表；组件挂载后还会自己再拉一次。 */
async function boot(): Promise<void> {
  try {
    const res = await fetch('/dsh-pet-7340/config', { cache: 'no-store' });
    if (res.ok) rememberConfig((await res.json()) as Record<string, Record<string, unknown>>);
  } catch {
    /* 读取失败由组件的 loadState 显示错误与重试按钮，这里不抢先报错 */
  }
  const root = document.getElementById('root');
  if (root) {
    createRoot(root).render(jsx(PetConfigSection, {}));
    // 新窗口永远从顶部开始；不要让浏览器恢复上一次的滚动位置。
    window.scrollTo(0, 0);
  }
}

void boot();
