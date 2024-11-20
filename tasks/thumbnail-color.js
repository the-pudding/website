import fs from "fs";
import vibrant from "node-vibrant";
import color from "color";
import { max, descending } from "d3";

const CWD = process.cwd();
const PATH_IN = `${CWD}/static/common/assets/thumbnails/screenshots`;
const PATH_OUT = `${CWD}/src/data`;
const FILES = fs.readdirSync(PATH_IN).filter((d) => d.includes(".jpg"));
const QUALITY = 2;
const SCORE_GRAPHIC = 3.25; // give it a .25 buffer
const SCORE_TEXT = 4.75; // give it a .25 buffer
const SATURATION_THRESHOLD = 0.6;

function hslToString({ h, s, l }) {
  const h1 = Math.round(h * 360);
  const s1 = Math.round(s * 100);
  const l1 = Math.round(l * 100);
  return `hsl(${h1}, ${s1}%, ${l1}%)`;
}

const getBestColors = (p) => {
  // loop through all color swatches
  const candidates = [];
  Object.keys(p).forEach((k) => {
    const hsl = p[k]._hsl;
    // const rgb = p[k]._rgb;
    const pop = p[k]._population;

    if (!pop) return;
    // is it saturated?
    const h = hsl[0];
    const s = hsl[1];
    const l = Math.max(0.5, Math.min(0.8, hsl[2]));
    candidates.push({ h, s, l, pop });
  });

  // candidates.forEach((d) => console.log(d.pop, d.s.toFixed(2), d.l.toFixed(2)));

  // sort candidates by saturation, then population, then lightness
  // const noBg = candidates.filter((d) => d.pop < 5000 && d.s > 0.3 && d.l > 0.3);

  const maxPop = max(candidates, (d) => d.pop);
  const bgHue = maxPop > 1000 ? candidates.find((d) => d.pop === maxPop).h : undefined;
  // a custom blend prioritizing saturation and lightness, deprioritizing population

  const scored = candidates.map((d) => {
    let popScore = 1;

    if (bgHue) {
      if (d.pop === maxPop) popScore = 0;
      else if (d.pop < 10) popScore = 0.25;
      else if (d.pop < 50) popScore = 0.75;
    }

    const hueDiff = bgHue ? Math.abs(d.h - bgHue) : 0;
    const score = d.s + popScore + hueDiff;
    return {
      ...d,
      score
    };
  });
  scored.sort((a, b) => descending(a.score, b.score));
  // console.table(scored);

  return candidates;
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

  const bg = colors[0] ? hslToString(colors[0]) : undefined;
  const text = getAccesibleText(bg);
  return { bg, text };
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
      const { bg, text } = await getColor(path);
      const slug = file.replace(".jpg", "");
      output.push({ slug, bg, text });
    }
  } catch (err) {
    console.error(err);
  }

  const json = JSON.stringify(output);
  fs.writeFileSync(`${PATH_OUT}/thumbnail-colors.json`, json);
  console.log("DONE: extract thumbnail color");
  process.exit();
})();
