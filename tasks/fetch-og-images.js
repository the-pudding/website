import fs from "fs";
import { JSDOM } from "jsdom";
import { csvParse } from "d3";
import slugify from "../src/utils/slugify.js";

const raw = csvParse(fs.readFileSync("./src/data/stories.csv", "utf8"));
const stories = raw.filter((d) => !d.hide_footer && !d.hide_all);
const dirOut = "./images/og";

async function exists(slug) {
  const filePathJpg = `${dirOut}/${slug}.jpg`;
  const filePathPng = `${dirOut}/${slug}.png`;

  return fs.existsSync(filePathJpg) || fs.existsSync(filePathPng);
}

async function downloadImage({ url, slug }) {
  const response = await fetch(url);
  const ext = url.split(".").pop();
  if (!response.ok) throw new Error(`Failed to download image from ${url}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(`${dirOut}/${slug}.${ext}`, buffer);
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
      const slug = slugify(story.url);
      const skip = await exists(slug);
      if (!skip) {
        const ogImageUrl = await findOgImageUrl(url);

        if (ogImageUrl) {
          await downloadImage({ url: ogImageUrl, slug });
          console.log(`Downloaded: ${slug}`);
        } else {
          console.log("missing:", slug);
        }
      }
    } catch (error) {
      console.error(`Error processing ${story.url}: ${error.message}`);
    }
  }
})();
