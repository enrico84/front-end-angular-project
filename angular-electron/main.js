const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

/* PUNTO DI PARTENZA DELL'APPLICAZIONE ELECTRON */

let appWindow;

function createWindow() {

    // Crea la finestra del browser
    appWindow = new BrowserWindow({
        fullscreen: false,
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`
        // webPreferences: {
        //     nodeIntegration: true
        // }
    })

    appWindow.loadURL(`file://${__dirname}/dist/index.html`);

    // Scommenta per aprire il DevTools
    //appWindow.webContents.openDevTools()

    // EVENTO: la finestra viene chiusa
    appWindow.on('closed', function() {
        appWindow = null
    })
}

// EVENTO: crea la finestra quando Electron viene inizializzato
app.on('ready', createWindow)

// EVENTO: esce quando tutte le finestre sono chiuse, eccetto che per macOS.
app.on('window-all-closed', function() {
        
    // Specifico il comportamento in base al sistema operativo
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {

    if(appWindow === null) {
        createWindow()
    }
})
