import stories from "$data/stories.js";
import filterStoryProps from "$utils/filterStoryProps.js";
import { descending } from "d3";

const NUM_ITEMS = 20;

export const GET = async () => {
	const keys = ["path", "date", "hed", "dek", "topic"];
	const all = filterStoryProps({ data: stories, keys });

	all.sort((a, b) => descending(a.date, b.date));

	const items = all.slice(0, NUM_ITEMS);
	const body = xml(items);
	const headers = { "Content-Type": "application/xml" };
	return { headers, body };
};

const clean = (str) => str
	.replace(/\&/g, '&amp;')
	.replace(/\</g, '&lt;')
	.replace(/\>/g, '&gt;');

const createItemXml = ({ path, date, hed, dek }) => `
<item>
	<title>${clean(hed)}</title>
	<link>${path}</link>
	<description>${clean(dek)}</description>
	<pubDate>${date.toUTCString()}</pubDate>
	<guid isPermaLink="false">${path}</guid>
</item>
`;

const xml = (items) => {
	const itemXml = items.map(createItemXml).join("");

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/"
 xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
 xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
	<channel>
		<title>The Pudding</title>
		<atom:link href="https://pudding.cool/feed/index.xml" rel="self" type="application/rss+xml" />
		<link>https://pudding.cool</link>
		<description>The Pudding is an editorial publication that explains ideas debated in culture with visual essays.</description>
		<lastBuildDate>
			Mon, 30 Aug 2021 17:24:43 GMT
		</lastBuildDate>
		<language>en-US</language>
		<sy:updatePeriod>daily</sy:updatePeriod>
		<sy:updateFrequency>1</sy:updateFrequency>
		<image>
			<title>The Pudding</title>
			<url>https://pudding.cool/common/assets/misc/social-facebook.jpg</url>
			<link>https://pudding.cool</link>
		</image>

	${itemXml}

	</channel>
</rss>`
};