import data from "$data/stories.csv";
import { timeParse, timeFormat } from "d3";

const strToArray = (str) => str.split(",").map(d => d.trim());
const makeSlug = (str) => str.toLowerCase().replace(/\//g, "_");

const parseDate = timeParse("%m/%d/%Y");
const formatMonth = timeFormat("%B %Y");

const clean = data.map(d => ({
	...d,
	date: parseDate(d.date),
	month: formatMonth(parseDate(d.date)),
	slug: makeSlug(d.url),
	author: strToArray(d.author),
	keyword: strToArray(d.keyword),
	path: d.url_alt || `https://pudding.cool/${d.url}`,
}));

export default clean;