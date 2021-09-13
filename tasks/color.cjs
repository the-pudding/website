const fs = require("fs");
const colorThief = require('colorthief');
const { resolve } = require("path");

const CWD = process.cwd();
const PATH_IN = `${CWD}/static/common/assets/thumbnails/640`;
const PATH_OUT = `${CWD}/src/data`;
const FILES = fs.readdirSync(PATH_IN).filter(d => d.includes('.jpg'));
const QUALITY = 2;

const getColor = (path) => {
	return new Promise((resolve, reject) => {
		colorThief.getColor(path, QUALITY)
			.then(resolve)
			.catch(reject);
	});


	// colorThief.getPalette(file, 5)
	// 	.then(palette => { console.log(palette) })
	// 	.catch(err => { console.log(err) })

}
(async () => {
	const output = [];
	try {
		for (let file of FILES) {
			console.log(`- extracting ${file}`);
			const path = `${PATH_IN}/${file}`;
			const color = await getColor(path);
			const rgb = `rgb(${color.join(",")})`;
			const slug = file.replace(".jpg", "");
			output.push({ slug, rgb });
		}
	} catch (err) {
		console.error(err);
	}

	const json = JSON.stringify(output);
	fs.writeFileSync(`${PATH_OUT}/thumbnail-colors.json`, json);
	console.log('DONE: extract thumbnail color');
	process.exit();
})();

