const fs = require("fs");
const vibrant = require("node-vibrant");


const CWD = process.cwd();
const PATH_IN = `${CWD}/static/common/assets/thumbnails/640`;
const PATH_OUT = `${CWD}/src/data`;
const FILES = fs.readdirSync(PATH_IN).filter(d => d.includes(".jpg"));
const QUALITY = 2;
const ALPHA = 0.2;

const rgbaToString = (rgba) => `rgba(${rgba.join(",")})`;

const roundRGB = (rgb) => rgb.map(d => Math.round(d));

const getVibrant = (palette) => roundRGB(palette.Vibrant._rgb);

const addAlpha = (rgb) => ([...rgb, ALPHA]);

const getColor = (path) => {
	return new Promise((resolve, reject) => {
		vibrant.from(path).quality(QUALITY).getPalette()
			.then(getVibrant)
			.then(addAlpha)
			.then(rgbaToString)
			.then(resolve)
			.catch(reject);
	});
}

(async () => {
	const output = [];
	try {
		for (let file of FILES) {
			console.log(`- extracting ${file}`);
			const path = `${PATH_IN}/${file}`;
			const color = await getColor(path);
			const slug = file.replace(".jpg", "");
			output.push({ slug, color });
		}
	} catch (err) {
		console.error(err);
	}

	const json = JSON.stringify(output);
	fs.writeFileSync(`${PATH_OUT}/thumbnail-colors.json`, json);
	console.log("DONE: extract thumbnail color");
	process.exit();
})();

