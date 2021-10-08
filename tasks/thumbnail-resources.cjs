const fs = require("fs");
const mkdirp = require("mkdirp");
const resize = require("./resize-image.cjs");

const CWD = process.cwd();
const pathIn = `${CWD}/thumbnails/resources`;
const pathOut = `${CWD}/static/common/assets/resources`;
const sizes = [32, 480];

function getNewImages() {
	const filesIn = fs.readdirSync(pathIn).filter(d => d.includes('.jpg'));
	const filesOut = fs.readdirSync(`${pathOut}/${sizes[0]}`).filter(d => d.includes('.jpg'));

	return filesIn.filter(d => !filesOut.includes(d));
}


function makeThumbnail(file) {
	return new Promise((resolve, reject) => {
		const promises = sizes.map(size => resize({ pathIn, pathOut, file, size, blur: size === sizes[0] }));

		Promise.all(promises)
			.then(resolve)
			.catch(reject);
	});
}

(async () => {
	console.log("task: resizing thumbnails - resources");

	sizes.forEach(size => mkdirp.sync(`${pathOut}/${size}`));

	const files = getNewImages();

	try {
		for (let file of files) {
			await makeThumbnail(file);
		}
	} catch (err) {
		console.error(err);
	}

	console.log('DONE: resizing thumbnails - resources');
	process.exit();
})();

