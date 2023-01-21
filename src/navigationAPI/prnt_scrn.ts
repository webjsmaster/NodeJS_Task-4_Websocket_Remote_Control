import { Region, screen } from '@nut-tree/nut-js'
import Jimp from 'jimp'

export async function prnt_scrn(x: number, y: number) {
	const widthScreen = await screen.width()
	const hightScreen = await screen.height()

	if (widthScreen - (x + 100) >= 0 && hightScreen - (y + 100)) {
		const region = new Region(x - 100, y - 100, 200, 200)
		screen.highlight(region)

		const bitmap = await screen.grabRegion(region)

		const img = new Jimp(bitmap)

		const base64 = await img.getBase64Async(img.getMIME())

		return base64.substring(22)
	} else {
		return 'Error screen'
	}
}
