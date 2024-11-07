import data from "$data/stories.csv";
import { timeParse, timeFormat, index } from "d3";

const strToArray = (str) => str.split(",").map((d) => d.trim());
const makeSlug = (str) => str.toLowerCase().replace(/\//g, "_");

const parseDate = timeParse("%m/%d/%Y");
const formatMonth = timeFormat("%b %Y");

const clean = data
  .map((d) => ({
    ...d,
    date: parseDate(d.date),
    month: formatMonth(parseDate(d.date)),
    slug: makeSlug(d.url),
    author: strToArray(d.author),
    keyword: strToArray(d.keyword),
    href: d.url_alt || `https://pudding.cool/${d.url}`
  }))
  .filter((d) => !d.hide_all)
  .map((d, i) => ({
    ...d,
    id: i + 1
  }));

export default clean;
