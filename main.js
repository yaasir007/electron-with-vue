const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    minWidth: 600,
    height: 500,
    minHeight: 500,
    webPreferences: {
      preload: path.join(__dirname, 'preloader.js')
    },
  })
  win.loadFile('./index.html')
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
      app.quit();
    }
  })
})