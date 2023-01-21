import { mouse } from '@nut-tree/nut-js'
import { circle } from './circle.js'
import { prnt_scrn } from './prnt_scrn.js'
import { rectangle } from './rectangle.js'
import { square } from './square.js'

export async function navigation(command: string, x: number, y: number) {
	mouse.config.mouseSpeed = 300
	const position = await mouse.getPosition()
	switch (command) {
		case 'mouse_up': {
			await mouse.setPosition({ x: position.x, y: position.y - x })
			console.log(`mouse_up {${position.y} px}`)
			return `mouse_up_{${position.y}px}`
		}
		case 'mouse_down': {
			mouse.setPosition({ x: position.x, y: position.y + x })
			console.log(`mouse_down {${position.y} px}`)
			return `mouse_down_{${position.y}px}`
		}
		case 'mouse_left': {
			mouse.setPosition({ x: position.x - x, y: position.y })
			console.log(`mouse_left {${position.x} px}`)
			return `mouse_left_{${position.x}px}`
		}
		case 'mouse_right': {
			mouse.setPosition({ x: position.x + x, y: position.y })
			console.log(`mouse_right {${position.x} px}`)
			return `mouse_right_{${position.x}px}`
		}
		case 'mouse_position': {
			console.log(command, position)
			return `${command},x:${position.x},y:${position.y}`
		}
		case 'draw_circle': {
			await circle(x, position.x, position.y)
			console.log('draw_circle')
			return command
		}
		case 'draw_rectangle': {
			await rectangle(x, y)
			console.log('draw_rectangle')
			return command
		}
		case 'draw_square': {
			await square(x)
			console.log('draw_square')
			return command
		}
		case 'prnt_scrn': {
			const file = await prnt_scrn(position.x, position.y)
			console.log('prnt_scrn')
			return 'prnt_scrn ' + file
		}
		default: {
			console.log('unknown command')
			return 'unknown command'
		}
	}
}
