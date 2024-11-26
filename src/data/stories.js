import data from "$data/stories.csv";
import colors from "$data/thumbnail-colors.json";
import { timeParse, timeFormat } from "d3";
import slugify from "$utils/slugify.js";

const strToArray = (str) => str.split(",").map((d) => d.trim());

const parseDate = timeParse("%m/%d/%Y");
const formatMonth = timeFormat("%b %Y");

const lookupColor = (slug) => {
  const match = colors.find((d) => d.slug === slug);
  return match?.bg;
};

const addFaves = (arr, name) => {
  if (name) return [...arr, "our_faves"];
  return arr;
};

const clean = data
  .map((d) => ({
    ...d,
    date: parseDate(d.date),
    month: formatMonth(parseDate(d.date)),
    slug: slugify(d.url),
    author: strToArray(d.author),
    keyword: strToArray(d.keyword),
    filters: addFaves(strToArray(d.filters), d.faves),
    href: d.url_alt || `https://pudding.cool/${d.url}`
  }))
  .filter((d) => !d.hide_all)
  .map((d, i) => ({
    ...d,
    id: i + 1,
    bgColor: d.color_override || lookupColor(d.slug)
  }));

export default clean;
