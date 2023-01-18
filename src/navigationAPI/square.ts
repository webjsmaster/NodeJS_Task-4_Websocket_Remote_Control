import { down, left, mouse, right, up } from '@nut-tree/nut-js'

export async function square(x: number) {
	const square = async () => {
		await mouse.move(right(x))
		await mouse.move(down(x))
		await mouse.move(left(x))
		await mouse.move(up(x))
	}

	;(async () => {
		await mouse.pressButton(0)
		await square()
		await mouse.releaseButton(0)
	})()
}
