const fs = require("fs");
const jimp = require("jimp");
const mkdirp = require("mkdirp");

const CWD = process.cwd();
const PATH_IN = `${CWD}/thumbnails`;
const PATH_OUT = `${CWD}/static/common/assets/thumbnails`;
const SIZES = [32, 320, 640, 1280, 1920];

function getNewImages() {
	const filesIn = fs.readdirSync(PATH_IN).filter(d => d.includes('.jpg'));
	const filesOut = fs.readdirSync(`${PATH_OUT}/${SIZES[0]}`).filter(d => d.includes('.jpg'));

	return filesIn.filter(d => !filesOut.includes(d));
}

function resize({ file, size }) {
	console.log(`- resizing ${file} -> ${size}`);
	return new Promise((resolve, reject) => {
		jimp.read(`${PATH_IN}/${file}`)
			.then(img => {
				if (size === SIZES[0]) img
					.resize(size, jimp.AUTO)
					.blur(1)
					.quality(100)
					.write(`${PATH_OUT}/${size}/${file}`, resolve);
				else img
					.resize(size, jimp.AUTO)
					.quality(70)
					.write(`${PATH_OUT}/${size}/${file}`, resolve);
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

	SIZES.forEach(size => mkdirp.sync(`${PATH_OUT}/${size}`));

	const files = getNewImages();

	try {
		for (let file of files) {
			await makeThumbnail(file);
		}
	} catch (err) {
		console.error(err);
	}

	console.log('DONE: resizing thumbnails');
	process.exit();
})();

