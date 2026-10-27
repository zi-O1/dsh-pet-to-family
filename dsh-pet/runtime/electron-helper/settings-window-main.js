/**
 * 独立桌宠设置小窗（单独的 Electron 进程）。
 *
 * 由 Helper 在用户右键「桌宠设置」时 detached 拉起：不能长在 Helper 进程里，否则保存配置触发
 * Helper 重启时窗口会跟着消失。本进程只做窗口宿主，设置 UI 由宿主提供的
 * `/dsh-pet-7340/settings-window` 页面渲染。
 *
 * 鉴权：先隐藏加载 `DSH_PET_SITE_URL`（含一次性 token，换发 Cookie），再加载设置页；
 * 设置页和 `/config` 同 origin，后续 fetch 自然带 Cookie。
 *
 * @module dsh-pet/runtime/electron-helper/settings-window-main
 */
const { app, BrowserWindow, Menu, dialog, shell } = require('electron');

const settingsUrl = process.env.DSH_PET_SETTINGS_URL || '';
const siteUrl = process.env.DSH_PET_SITE_URL || '';

if (!/^https?:[/][/]/.test(settingsUrl)) {
  dialog.showErrorBox('桌宠设置', '设置窗口缺少有效的页面地址。');
  app.quit();
} else {
  // 独立 userData：不要和 Helper 共用 profile，也不要让第二个设置窗抢 Helper 的单实例锁。
  app.setName('dsh-pet-settings');
  app.setPath('userData', require('node:path').join(app.getPath('appData'), 'dsh-pet-settings-window'));

  const gotLock = app.requestSingleInstanceLock({ settingsUrl });
  if (!gotLock) {
    app.quit();
  } else {
    let win = null;
    let pendingUrl = '';
    const settingsOrigin = new URL(settingsUrl).origin;

    app.on('second-instance', (_event, _commandLine, _workingDirectory, additionalData) => {
      const nextUrl =
        additionalData && typeof additionalData.settingsUrl === 'string' ? additionalData.settingsUrl : '';
      // 第二次右键可能选了另一个分组：同一进程里换到新 section，而不是只聚焦旧页面。
      if (nextUrl && /^https?:[/][/]/.test(nextUrl) && new URL(nextUrl).origin === settingsOrigin) {
        // 窗口还在隐藏加载时只记下新地址，交给首次显示的加载流程；已显示才直接换页。
        if (win && !win.isDestroyed() && win.isVisible()) void win.loadURL(nextUrl);
        else pendingUrl = nextUrl;
      }
      if (!win || win.isDestroyed()) return;
      if (win.isMinimized()) win.restore();
      win.show();
      win.focus();
    });

    app.on('window-all-closed', () => app.quit());

    app.whenReady().then(async () => {
      Menu.setApplicationMenu(null);
      // 设置窗是工具窗，不占 Dock；macOS 上仍可用标题栏关闭。
      if (process.platform === 'darwin' && app.dock) app.dock.hide();

      win = new BrowserWindow({
        width: 560,
        height: 780,
        minWidth: 420,
        minHeight: 520,
        show: false,
        title: '桌宠设置',
        backgroundColor: '#f7f8fa',
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
          sandbox: true,
          spellcheck: false,
        },
      });

      win.webContents.setWindowOpenHandler(({ url }) => {
        if (/^https?:[/][/]/.test(url) && new URL(url).origin !== settingsOrigin) {
          void shell.openExternal(url);
        }
        return { action: 'deny' };
      });
      win.webContents.on('will-navigate', (event, url) => {
        try {
          if (new URL(url).origin === settingsOrigin) return;
        } catch {
          /* 非法地址按外部处理 */
        }
        event.preventDefault();
        if (/^https?:[/][/]/.test(url)) void shell.openExternal(url);
      });

      try {
        // 隐藏窗口先完成站点鉴权（token → Cookie）；直接打开插件私有路由会 401。
        if (siteUrl) await win.loadURL(siteUrl);
        await win.loadURL(pendingUrl || settingsUrl);
      } catch (error) {
        console.error('[dsh-pet-settings] load failed:', error);
        const message = error instanceof Error ? error.message : String(error);
        try {
          await win.loadURL(
            'data:text/html;charset=utf-8,' +
              encodeURIComponent(
                '<!doctype html><meta charset="utf-8"><title>桌宠设置</title>' +
                  '<body style="font:14px/1.6 -apple-system,BlinkMacSystemFont,sans-serif;padding:24px;color:#333">' +
                  '<h3 style="margin:0 0 8px">设置窗口打开失败</h3>' +
                  '<p style="margin:0;color:#666">' +
                  message.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]) +
                  '</p></body>',
              ),
          );
        } catch {
          /* 连错误页都加载不了：保留空白窗口，至少用户能关掉 */
        }
      }

      if (!win.isDestroyed()) {
        win.show();
        win.focus();
      }
      win.on('closed', () => {
        win = null;
      });
    });
  }
}
