const { app, BrowserWindow } = require('electron');

// CANLI OTA ADRESİNİZ: EXE her açıldığında doğrudan GitHub Pages adresinizdeki en güncel sürümü çeker!
const GITHUB_PAGES_LIVE_URL = process.env.MADEN_LIVE_URL || 'https://hamzakivrak.github.io/maden-akademi/';

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    title: 'MadenAkademi AI',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  win.loadURL(GITHUB_PAGES_LIVE_URL).catch(() => {
    win.loadFile('index.html');
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
