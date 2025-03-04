import fs from "fs";
import { mkdirp } from "mkdirp";
import resize from "./resize-image.js";

const CWD = process.cwd();
const pathIn = `${CWD}/images/og`;
const pathOut = `${CWD}/static/common/assets/thumbnails`;
const width = 640;
const ratio = 16 / 9;

function getNewImages() {
  const filesIn = fs.readdirSync(pathIn).filter((d) => d.includes(".jpg") || d.includes(".png"));
  const filesOut = fs.readdirSync(`${pathOut}/${width}`).filter((d) => d.includes(".jpg"));

  return filesIn.filter((d) => !filesOut.includes(d));
}

async function makeThumbnail(file) {
  const height = Math.round(width / ratio);
  await resize({ pathIn, pathOut, file, width, height, cover: true });
}

(async () => {
  console.log("task: resizing thumbnails - stories");

  mkdirp.sync(`${pathOut}/${width}`);

  const files = getNewImages();

  try {
    for (let file of files) {
      await makeThumbnail(file);
    }
  } catch (err) {
    console.error(err);
  }

  console.log("DONE: resizing thumbnails - stories");
  process.exit();
})();
