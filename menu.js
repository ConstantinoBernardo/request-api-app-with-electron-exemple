const {
	Menu,
	MenuItem,
	ipcMain} = require('electron')

module.exports = (mainWindow)=>{

	const menuOpt=[
		{
			label: 'File',
			submenu: [
				{
					label: 'New Request',
					accelerator: process.platform === 'darwin' ? 'Ctrl+N' : 'Ctrl+N',
					click(){mainWindow.webContents.send('new-tab', null)}
				},
				{
					role: 'reload',
					accelerator: process.platform === 'darwin' ? 'Ctrl+R' : 'Ctrl+R'
				},
				{
					label: 'Close Request',
					accelerator: process.platform === 'darwin' ? 'Ctrl+W' : 'Ctrl+W',
					click(){}
				},
				{
					role: 'quit',
					accelerator: process.platform === 'darwin' ? 'Ctrl+Q' : 'Ctrl+Q'
				},
			]
		},
		{
			label: 'Edit',
			submenu: [
				{
					role: 'undo',
					accelerator: process.platform === 'darwin' ? 'Ctrl+Z' : 'Ctrl+Z'
				},
				{
					role: 'redo',
					accelerator: process.platform === 'darwin' ? 'Ctrl+Y' : 'Ctrl+Y',
				},
				{
					role: 'copy',
					accelerator: process.platform === 'darwin' ? 'Ctrl+C' : 'Ctrl+C'
				},
				{
					role: 'cut',
					accelerator: process.platform === 'darwin' ? 'Ctrl+X' : 'Ctrl+X'
				},
				{
					role: 'paste',
					accelerator: process.platform === 'darwin' ? 'Ctrl+V' : 'Ctrl+V'
				},
				{
					role: 'delete',
					accelerator: process.platform === 'darwin' ? 'Delete' : 'Delete'
				},
				{
					role: 'select-all',
					accelerator: process.platform === 'darwin' ? 'Ctrl+A' : 'Ctrl+A'
				},
			]
		},
		{
			label: 'View',
			submenu: [
				{
					role: 'actual size',
					accelerator: process.platform === 'darwin' ? 'Ctrl+0' : 'Ctrl+0'
				},
				{
					role: 'zoom in',
					accelerator: process.platform === 'darwin' ? 'Ctrl++' : 'Ctrl++',
				},
				{
					role: 'zoom out',
					accelerator: process.platform === 'darwin' ? 'Ctrl+-' : 'Ctrl+-'
				},
				{
					role: 'toggle full screen',
					accelerator: process.platform === 'darwin' ? 'F11' : 'F11'
				},
			]
		},
	]


	const menu = new Menu()
	for(let c in menuOpt){
		menu.append(new MenuItem(menuOpt[c]))
	}

	Menu.setApplicationMenu(menu)
}