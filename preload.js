const {contextBridge,ipcRenderer} = require('electron')

window.world={}

/*contextBridge.exposeInMainWorld('eletronAPI',{
	globalVars(){
		window.globalPush=(d)=>{console.log(d)}
	}
})*/

window.electronAPI={
	globalVars(d){
		console.log(d)
	}
}

ipcRenderer.on('new-tab',(event,arg)=>{
	window.electronAPI.globalVars('f')
})