import { timeParse, timeFormat } from "d3";
const strToArray = (str) => str.split(",").map(d => d.trim());
const makeSlug = (str) => str.toLowerCase().replace(/\//g, "_");

export default function parseStories({ data, keys }) {

	const parseDate = timeParse("%m/%d/%Y");
	const formatMonth = timeFormat("%B %Y");

	const clean = data.map(d => ({
		...d,
		date: parseDate(d.date),
		month: formatMonth(parseDate(d.date)),
		slug: makeSlug(d.url),
		path: `https://pudding.cool/${d.url}`,
		author: strToArray(d.author),
		topic: strToArray(d.topic),
		chart: strToArray(d.chart),
		keyword: strToArray(d.keyword),
	}));

	const result = clean.map(d => {
		const o = {};
		keys.forEach(key => o[key] = d[key]);
		return o;
	});

	return result;
}