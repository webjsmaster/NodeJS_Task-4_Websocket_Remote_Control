import { mouse } from '@nut-tree/nut-js'

export async function circle(radius: number, x: number, y: number) {
	mouse.config.mouseSpeed = 100

	const circle = async () => {
		for (let i = 0; i <= Math.PI * 2; i += 0.01 * Math.PI) {
			const _x = x - radius * Math.cos(i)
			const _y = y - radius * Math.sin(i)
			await mouse.move([{ x: _x, y: _y }])
		}
	}

	;(async () => {
		await mouse.setPosition({ x: x - radius, y })
		await mouse.pressButton(0)
		await circle()
		await mouse.releaseButton(0)
	})()
}
