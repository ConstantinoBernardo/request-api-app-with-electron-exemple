const express = require('express')
const path = require ('path')
//import { PhaserGame } from './game/game.js'

module.exports=port=>{
	const app = express()
	app.use('/', express.static(path.join(__dirname, 'public')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'index.html'))
	})
	app.listen(port, () => {
		console.log('app is listening on http://localhost:' + port)
	})
}
