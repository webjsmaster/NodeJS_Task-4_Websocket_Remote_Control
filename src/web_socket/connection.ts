import { IncomingMessage } from 'http'
import { createWebSocketStream, WebSocket } from 'ws'
import { navigation } from '../navigationAPI/navigation.js'

export function connection() {
	return async (ws: WebSocket, req: IncomingMessage) => {
		console.log(`Connection websocket on port: ${req.socket.localPort}`)

		ws.on('close', () => {
			console.log(`Connection filed`)
			duplex.destroy()
		})

		const duplex = createWebSocketStream(ws, {
			encoding: 'utf8',
			decodeStrings: false,
		})

		let data = ''

		duplex.on('readable', async () => {
			let chunk

			while (null !== (chunk = duplex.read())) {
				data = chunk
			}

			const [command, ...params] = data.split(' ')
			const [x, y] = params.map(Number)

			let isReady = true
			let result: string

			while (isReady) {
				isReady = false
				result = await navigation(command, x, y)
				duplex.write(`${result}\0`)
			}
		})
	}
}
