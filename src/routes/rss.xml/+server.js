import stories from "$data/stories.js";
import filterStoryProps from "$utils/filterStoryProps.js";
import { descending } from "d3";

export const prerender = true;

const NUM_ITEMS = 20;

const clean = (str) => str.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");

const createItemXml = ({ href, date, hed, tease, slug }) => `
<item>
	<title>${clean(hed)}</title>
	<link>${href}</link>
	<description>${clean(tease)}</description>
	<pubDate>${date.toUTCString()}</pubDate>
	<guid isPermaLink="false">${href}</guid>
	<media:content url="https://pudding.cool/common/assets/thumbnails/640/${slug}.jpg" medium="image" type="image/jpeg"/>
</item>
`;

const xml = (items) => {
  const itemXml = items.map(createItemXml).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/"
 xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
 xmlns:slash="http://purl.org/rss/1.0/modules/slash/" xmlns:media="http://search.yahoo.com/mrss/">
	<channel>
		<title>The Pudding</title>
		<atom:link href="https://pudding.cool/rss.xml" rel="self" type="application/rss+xml" />
		<link>https://pudding.cool</link>
		<description>The Pudding is an editorial publication that explains ideas debated in culture with visual essays.</description>
		<lastBuildDate>
			Wed, 20 Nov 2024 12:00:00 GMT
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
</rss>`;
};

export async function GET() {
  const keys = ["href", "date", "hed", "tease", "slug"];
  const all = filterStoryProps({ data: stories, keys });

  all.sort((a, b) => descending(a.date, b.date));

  const items = all.slice(0, NUM_ITEMS);
  const body = xml(items);
  const headers = { "Content-Type": "application/xml" };
  return new Response(body, { headers });
}
