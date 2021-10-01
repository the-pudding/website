const CWD = process.cwd();

const fs = require("fs");
const papa = require("papaparse");

const csv = fs.readFileSync(`${CWD}/src/data/stories.csv`, "utf8");

const stories = papa.parse(csv, { header: true }).data;

stories.sort((a, b) => new Date(b.date) - new Date(a.date));

const output = stories.filter(d => !d.hide_footer === "TRUE").map(d => ({
	image: d.url.replace(/\//g, "_"),
	url: d.url,
	hed: d.hed,
	topic: d.topic
}));

const json = JSON.stringify(output);
fs.writeFileSync(`${CWD}/static/assets/data/stories.json`, json);