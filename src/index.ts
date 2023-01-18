import { httpServer } from './http_server/index.js'
import { resolve } from 'path'
import * as dotenv from 'dotenv'
import { WebSocketServer } from 'ws'
import { connection } from './web_socket/connection.js'

dotenv.config({ path: resolve(process.cwd(), '.env') })

const HTTP_PORT = process.env.HTTP_PORT || 4000
const WSS_PORT = process.env.WSS_PORT || 8080

httpServer.listen(HTTP_PORT, () => {
	console.log(
		`Start static http server on the address http://localhost:${HTTP_PORT} !`
	)
})

export const wss = new WebSocketServer({ port: +WSS_PORT })

wss.on('connection', connection())

wss.on('close', () => {
	console.log('🔒 Close connection')
})
