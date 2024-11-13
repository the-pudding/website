import fs from "fs";
import { JSDOM } from "jsdom";
import { csvParse } from "d3";

// TODO update
const stories = csvParse(fs.readFileSync("./src/data/stories.csv", "utf8"));
const dirOut = "./thumbnails/test";
// TODO make util
const makeSlug = (str) => str.toLowerCase().replace(/\//g, "_");

async function downloadImage({ url, id }) {
  const response = await fetch(url);
  const ext = url.split(".").pop();
  if (!response.ok) throw new Error(`Failed to download image from ${url}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(`${dirOut}/${id}.${ext}`, buffer);
}

async function findOgImageUrl(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch page: ${url}`);
  const html = await response.text();
  const dom = new JSDOM(html);
  const ogImage = dom.window.document.querySelector("meta[property='og:image']");
  return ogImage ? ogImage.getAttribute("content") : null;
}

(async () => {
  for (const story of stories) {
    try {
      const url = story.url_alt || `https://pudding.cool/${story.url}`;
      const id = makeSlug(story.url);
      // TODO don't download if in final directory( also jpg)
      const ogImageUrl = await findOgImageUrl(url);
      console.log(ogImageUrl);
      if (!ogImageUrl) return;

      await downloadImage({ url: ogImageUrl, id });
      console.log(`Downloaded: ${id}`);
    } catch (error) {
      console.error(`Error processing ${story.url}: ${error.message}`);
    }
  }
})();
