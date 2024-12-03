import fs from "fs";
import { csvParse, csvFormat } from "d3";
import slugify from "../src/utils/slugify.js";
const CWD = process.cwd();

const stories = csvParse(fs.readFileSync(`${CWD}/src/data/stories.csv`, "utf8"));
const authors = csvParse(fs.readFileSync(`${CWD}/src/data/authors.csv`, "utf8"));

stories.sort((a, b) => new Date(b.date) - new Date(a.date));

function getAuthorNames(str) {
  const all = str.split(",").map((d) => d.trim());
  const filtered = authors.filter((d) => all.includes(d.id));
  const names = filtered.map((d) => d.name).join(", ");
  return names;
}

const output = stories
  .filter((d) => !d.hide_all)
  .map((d) => ({
    slug: slugify(d.url),
    hed: d.hed,
    dek: d.dek,
    keyword: d.keyword,
    author: getAuthorNames(d.author)
  }));

const csv = csvFormat(output);
fs.writeFileSync(`${CWD}/static/assets/data/search.csv`, csv);
