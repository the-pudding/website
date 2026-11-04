import fs from "fs";
import path from "path";
import sharp from "sharp";

const DIRS = [
  "static/common/assets/thumbnails/screenshots",
  "static/common/assets/thumbnails/resources"
];

const MAX_WIDTH = 600;
const QUALITY = 80;

async function optimize(file) {
  const input = fs.readFileSync(file);
  const { width } = await sharp(input).metadata();
  const resized = width > MAX_WIDTH;

  let pipeline = sharp(input).rotate();
  if (resized) pipeline = pipeline.resize({ width: MAX_WIDTH });
  await pipeline.jpeg({ quality: QUALITY, mozjpeg: true, progressive: true }).toBuffer();
}

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));
  for (const f of files) {
    await optimize(path.join(dir, f));
  }
}
