import { down, left, mouse, right, up } from '@nut-tree/nut-js'

export async function rectangle(x: number, y: number) {
	const square = async () => {
		await mouse.move(right(x))
		await mouse.move(down(y))
		await mouse.move(left(x))
		await mouse.move(up(y))
	}

	;(async () => {
		await mouse.pressButton(0)
		await square()
		await mouse.releaseButton(0)
	})()
}
