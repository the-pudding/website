import { Jimp } from "jimp";

export default async function resizeImage({ pathIn, pathOut, file, width, height, cover = false }) {
  const src = `${pathIn}/${file}`;
  const dest = `${pathOut}/${width}/${file.replace(".png", ".jpg")}`;

  console.log(`- resizing ${file} -> ${width}`);

  const image = await Jimp.read(src);
  if (cover) await image.cover({ w: width, h: height }).write(dest);
  else await image.resize({ w: width }).write(dest);
}
