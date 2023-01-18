import { Region, screen } from '@nut-tree/nut-js'
import Jimp from 'jimp'

export async function prnt_scrn() {
	const region = new Region(50, 50, 50, 50)
	const bitmap = await screen.grabRegion(region)

	const image = new Jimp(bitmap)

	console.log(image)

	//let pos = 0



	// image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
	// 	image.bitmap.data[idx + 2]
	// 	image.bitmap.data[idx + 1]
	// 	image.bitmap.data[idx + 0]
	// 	image.bitmap.data[idx + 3]
	// })

	// const base64 = await image.getBase64Async(image.getMIME())
	// //const image = await screen.captureRegion('image', region)

	// return base64.substring(22)
}
