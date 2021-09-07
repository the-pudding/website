const fs = require("fs");
const jimp = require("jimp");

const CWD = process.cwd();
const PATH_IN = `${CWD}/thumbnails`;
const PATH_OUT = `${CWD}/static/assets/thumbnails`;
const SIZES = [1920, 1280, 640];

function getNewImages() {
	const filesIn = fs.readdirSync(PATH_IN).filter(d => d.includes('.jpg'));
	const filesOut = fs.readdirSync(PATH_OUT).filter(d => d.includes(`-${SIZES[0]}.jpg`));

	return filesIn.filter(d => !filesOut.includes(d));
}

function resize({ file, size }) {
	console.log(`- resizing ${file} -> ${size}`);
	const name = file.replace(".jpg", `-${size}.jpg`);
	return new Promise((resolve, reject) => {
		jimp.read(`${PATH_IN}/${file}`)
			.then(img => {
				return img
					.resize(size, jimp.AUTO)
					.quality(70)
					.write(`${PATH_OUT}/${name}`, resolve);
			})
			.catch(reject);
	});
}

function makeThumbnail(file) {
	return new Promise((resolve, reject) => {
		const promises = SIZES.map(size => resize({ file, size }));

		Promise.all(promises)
			.then(resolve)
			.catch(reject);
	});
}

(async () => {
	console.log("task: resizing thumbnails");
	const files = getNewImages();

	try {
		for (let file of files) {
			await makeThumbnail(file);
		}
	} catch (err) {
		console.error(err);
	}

	console.log('DONE: resize-thumbnails.js');
	process.exit();
})();

