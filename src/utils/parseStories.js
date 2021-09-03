const strToArray = (str) => str.split(',').map(d => d.trim());
const makeSlug = (str) => str.toLowerCase().replace(/\//g, '_');

export default function parseStories({ data, keys }) {

	// const formatDate = d3.timeParse('%m/%d/%Y');

	const clean = data.map(d => ({
		...d,
		// date: formatDate(d.date),
		// time: d3.timeFormat('%B %Y')(date),
		slug: makeSlug(d.url),
		path: `https://pudding.cool/${d.url}`,
		img: makeSlug(d.url),
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