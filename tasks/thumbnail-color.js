import fs from "fs";
import vibrant from "node-vibrant";
import color from "color";
import { descending } from "d3";

const CWD = process.cwd();
const PATH_IN = `${CWD}/static/common/assets/thumbnails/screenshots`;
const PATH_OUT = `${CWD}/src/data`;
const FILES = fs.readdirSync(PATH_IN).filter((d) => d.includes(".jpg"));
const QUALITY = 2;
const SCORE_GRAPHIC = 3.25; // give it a .25 buffer
const SCORE_TEXT = 4.75; // give it a .25 buffer
const SATURATION_THRESHOLD = 0.6;

const rgbToString = (rgb) => `rgb(${rgb.join(", ")})`;

const roundRGB = (rgb) => rgb.map((d) => Math.round(d));

const getBestColors = (p) => {
  // loop through all color swatches
  const candidates = [];
  Object.keys(p).forEach((k) => {
    const hsl = p[k]._hsl;
    const rgb = p[k]._rgb;
    const pop = p[k]._population;

    if (!pop) return;
    // is it saturated?
    const h = hsl[0];
    const s = hsl[1];
    const l = hsl[2];
    candidates.push({ h, s, l, rgb, pop });
  });

  candidates.forEach((d) => console.log(d.pop, d.s.toFixed(2), d.l.toFixed(2)));
  // sort candidates by saturation, then population, then lightness
  const noBg = candidates.filter((d) => d.pop < 5000 && d.s > 0.3 && d.l > 0.3);

  noBg.sort((a, b) => descending(a.s + a.l, b.s + a.l));

  if (noBg.length > 0) return noBg;
  return candidates.sort((a, b) => descending(a.s + a.l, b.s + a.l));

  // noBg.slice(0, 3).forEach((d) => {
  //   console.log(d.pop, d.h.toFixed(2), d.s.toFixed(2), d.l.toFixed(2));
  // });
};

const getAccesibleText = (str) => {
  const c = color(str);

  // figure out if black or white text is accessible on primary
  const black = c.contrast(color("#000")) > SCORE_TEXT;
  const text = black ? "#000" : "#fff";

  return text;
};

const createPalette = (p) => {
  const colors = getBestColors(p);

  const primary = colors[0] ? rgbToString(roundRGB(colors[0].rgb)) : undefined;
  const secondary = colors[1] ? rgbToString(roundRGB(colors[1].rgb)) : undefined;
  const tertiary = colors[2] ? rgbToString(roundRGB(colors[2].rgb)) : undefined;
  const text = getAccesibleText(primary);
  return { primary, secondary, tertiary, text };
};

const getColor = (path) => {
  return new Promise((resolve, reject) => {
    vibrant
      .from(path)
      .quality(QUALITY)
      .getPalette()
      .then(createPalette)
      .then(resolve)
      .catch(reject);
  });
};

(async () => {
  const output = [];
  try {
    for (let file of FILES) {
      console.log(`- extracting ${file}`);
      const path = `${PATH_IN}/${file}`;
      const { primary, secondary, tertiary, text } = await getColor(path);
      const slug = file.replace(".jpg", "");
      output.push({ slug, primary, secondary, tertiary, text });
    }
  } catch (err) {
    console.error(err);
  }

  const json = JSON.stringify(output);
  fs.writeFileSync(`${PATH_OUT}/thumbnail-colors.json`, json);
  console.log("DONE: extract thumbnail color");
  process.exit();
})();
