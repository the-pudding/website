import fs from "fs";
import { mkdirp } from "mkdirp";
import resize from "./resize-image.js";

const CWD = process.cwd();
const pathIn = `${CWD}/thumbnails/resources`;
const pathOut = `${CWD}/static/common/assets/thumbnails/resources`;
const width = 600;

function getNewImages() {
  const filesIn = fs.readdirSync(pathIn).filter((d) => d.includes(".jpg"));
  const filesOut = fs.readdirSync(`${pathOut}/${width}`).filter((d) => d.includes(".jpg"));

  return filesIn.filter((d) => !filesOut.includes(d));
}

async function makeThumbnail(file) {
  await resize({ pathIn, pathOut, file, width });
}

(async () => {
  console.log("task: resizing thumbnails - resources");

  mkdirp.sync(pathOut);

  const files = getNewImages();

  try {
    for (let file of files) {
      await makeThumbnail(file);
    }
  } catch (err) {
    console.error(err);
  }

  console.log("DONE: resizing thumbnails - resources");
  process.exit();
})();
