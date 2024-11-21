import fs from "fs";
import { csvParse } from "d3";
const CWD = process.cwd();

const stories = csvParse(fs.readFileSync(`${CWD}/src/data/stories.csv`, "utf8"));

stories.sort((a, b) => new Date(b.date) - new Date(a.date));

const output = stories
  .filter((d) => !d.hide_footer && !d.hide_all)
  .map((d) => ({
    image: d.url.replace(/\//g, "_"),
    url: d.url_alt || d.url,
    short: d.short,
    hed: d.hed,
    bgColor: d.bgColor,
    fgColor: d.fgColor
  }));

const json = JSON.stringify(output);
fs.writeFileSync(`${CWD}/static/assets/data/stories.json`, json);
