const CWD = process.cwd();

import fs from "fs";
import papa from "papaparse";

const csv = fs.readFileSync(`${CWD}/src/data/stories.csv`, "utf8");

const stories = papa.parse(csv, { header: true }).data;

stories.sort((a, b) => new Date(b.date) - new Date(a.date));

const output = stories
  .filter((d) => !d.hide_footer && !d.hide_all)
  .map((d) => ({
    image: d.url.replace(/\//g, "_"),
    url: d.url_alt || d.url,
    hed: d.hed,
    tease: d.tease,
    short: d.home_text,
    date: d.date,
    bgColor: d.bgColor,
    fgColor: d.fgColor
  }));

const json = JSON.stringify(output);
fs.writeFileSync(`${CWD}/static/assets/data/stories.json`, json);
