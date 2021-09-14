const CWD = process.cwd();

const fs = require("fs");
const dsv = require("d3-dsv");

const stories = dsv.csvParse(fs.readFileSync(`${CWD}/src/data/stories.csv`, "utf8"));

stories.sort((a, b) => new Date(b.date) - new Date(a.date));

const output = stories.filter(d => d.footer === "TRUE").map(d => ({
	image: d.url.replace(/\//g, "_"),
	url: d.url,
	hed: d.hed,
	topic: d.topic
}));

const json = JSON.stringify(output);
fs.writeFileSync(`${CWD}/static/assets/data/stories.json`, json);