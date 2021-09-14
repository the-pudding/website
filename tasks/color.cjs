const fs = require("fs");
const vibrant = require("node-vibrant");


const CWD = process.cwd();
const PATH_IN = `${CWD}/static/common/assets/thumbnails/640`;
const PATH_OUT = `${CWD}/src/data`;
const FILES = fs.readdirSync(PATH_IN).filter(d => d.includes(".jpg"));
const QUALITY = 2;
const MAX_COLORS = 5;

const getColorDist = ([r, g, b]) => {
	const d0 = Math.abs(r - g);
	const d1 = Math.abs(r - b);
	const d2 = Math.abs(g - b);
	return d0 + d1 + d2;
};

const removeGray = (palette) => {
	return palette.filter(rgb => {
		const dist = getColorDist(rgb);
		return dist > THRESHOLD;
	});
};

const reduceColors = (palette) => palette.slice(0, MAX_COLORS);

const sortByVibrance = (palette) => {
	const copy = palette.map(d => d);
	copy.sort((a, b) => {
		const dA = getColorDist(a);
		const dB = getColorDist(b);
		return dB - dA;
	});
	return copy;
};


const rgbToString = (palette) => palette.map(rgb => `rgb(${rgb.join(",")})`);

const roundRGB = (rgb) => rgb.map(d => Math.round(d));

const getVibrants = (palette) => {
	return [
		roundRGB(palette.Vibrant._rgb),
		roundRGB(palette.DarkVibrant._rgb),
		roundRGB(palette.LightVibrant._rgb),
	]
};

const getColor = (path) => {
	return new Promise((resolve, reject) => {
		vibrant.from(path).quality(QUALITY).getPalette()
			.then(getVibrants)
			.then(rgbToString)
			.then(resolve)
			.catch(reject);

		// colorThief.getPalette(path, PALETTE_COUNT)
		// 	.then(removeGray)
		// 	.then(sortByVibrance)
		// 	.then(rgbToString)
		// 	.then(reduceColors)
		// 	.then(resolve)
		// 	.catch(reject)
	});
}

(async () => {
	const output = [];
	try {
		for (let file of FILES) {
			console.log(`- extracting ${file}`);
			const path = `${PATH_IN}/${file}`;
			const colors = await getColor(path);
			const slug = file.replace(".jpg", "");
			output.push({ slug, colors });
		}
	} catch (err) {
		console.error(err);
	}

	const json = JSON.stringify(output);
	fs.writeFileSync(`${PATH_OUT}/thumbnail-colors.json`, json);
	console.log("DONE: extract thumbnail color");
	process.exit();
})();

