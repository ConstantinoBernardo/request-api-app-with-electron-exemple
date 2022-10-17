const {app, BrowserWindow} = require('electron')
const path = require('path')

const Menu = require('./menu')
const server= require('./server')

let port = 1555

server(port)

function createWindow () {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		nodeIntegration:true,
		contextIsolation:false,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	Menu(mainWindow)
	mainWindow.loadURL(`http://localhost:${port}`)
				
	mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', ()=>{
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


