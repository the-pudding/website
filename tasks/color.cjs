const fs = require("fs");
const vibrant = require("node-vibrant");
const color = require("color");

const CWD = process.cwd();
const PATH_IN = `${CWD}/static/common/assets/thumbnails/640`;
const PATH_OUT = `${CWD}/src/data`;
const FILES = fs.readdirSync(PATH_IN).filter(d => d.includes(".jpg"));
const QUALITY = 2;
const SCORE_GRAPHIC = 3;
const SCORE_TEXT = 4.5;

const rgbaToString = (rgba) => `rgba(${rgba.join(",")})`;

const roundRGB = (rgb) => rgb.map(d => Math.round(d));

const getVibrant = (palette) => roundRGB(palette.Vibrant._rgb);

const getAccessiblePair = (c) => {
	const l = c.lightness(80);

	const light = l.hsl().round().string();
	const inc = 0.01;
	let delta = 0.01;
	let dark;
	let darker;

	while (!darker) {
		const d = l.darken(delta);
		const score = l.contrast(d);
		if (!dark && score >= SCORE_GRAPHIC) dark = d.hsl().round().string();
		if (!darker && score >= SCORE_TEXT) darker = d.hsl().round().string();
		else delta += inc;
	}

	return { light, dark, darker };
}

const createPalette = (rgb) => {
	const c = color(rgb);
	const { light, dark, darker } = getAccessiblePair(c);
	return { light, dark, darker };
};

// const addAlpha = (rgb) => ([...rgb, ALPHA]);

const getColor = (path) => {
	return new Promise((resolve, reject) => {
		vibrant.from(path).quality(QUALITY).getPalette()
			.then(getVibrant)
			.then(createPalette)
			// .then(rgbaToString)
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
			const { light, dark, darker } = await getColor(path);
			const slug = file.replace(".jpg", "");
			output.push({ slug, light, dark, darker });
		}
	} catch (err) {
		console.error(err);
	}

	const json = JSON.stringify(output);
	fs.writeFileSync(`${PATH_OUT}/thumbnail-colors.json`, json);
	console.log("DONE: extract thumbnail color");
	process.exit();
})();

