const { app, BrowserWindow } = require('electron')
require('./app.js')
function createWindow () {

    let win = new BrowserWindow({ width: 1280, height: 700 })

    win.loadURL(`http://localhost:3000/`)
    win.on('close', event => {
        win = null
    })
}
app.disableHardwareAcceleration()
app.on('ready', createWindow)
