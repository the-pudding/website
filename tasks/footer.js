import fs from "fs";
import { csvParse } from "d3";
import slugify from "../src/utils/slugify.js";
const CWD = process.cwd();

const colors = JSON.parse(fs.readFileSync(`${CWD}/src/data/thumbnail-colors.json`, "utf8"));
const stories = csvParse(fs.readFileSync(`${CWD}/src/data/stories.csv`, "utf8"));

stories.sort((a, b) => new Date(b.date) - new Date(a.date));

const lookupColor = (slug) => {
  const match = colors.find((d) => d.slug === slug);
  return match?.bg;
};

const output = stories
  .filter((d) => !d.hide_footer && !d.hide_all)
  .map((d) => ({
    image: slugify(d.url),
    url: d.url_alt || d.url,
    short: d.short,
    hed: d.hed
  }))
  .map((d) => ({ ...d, bgColor: d.color_override || lookupColor(d.image) }));

const json = JSON.stringify(output);
fs.writeFileSync(`${CWD}/static/assets/data/stories.json`, json);
