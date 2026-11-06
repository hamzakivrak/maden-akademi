const { app, BrowserWindow } = require('electron');

// CANLI OTA ADRESİNİZ: GitHub Pages adresinizi buraya yazdığınızda EXE her açılışta en güncel sürümü çeker!
const GITHUB_PAGES_LIVE_URL = process.env.MADEN_LIVE_URL || `file://${__dirname}/index.html`;

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
  win.loadURL(GITHUB_PAGES_LIVE_URL);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
