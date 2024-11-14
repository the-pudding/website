export default function slug(str) {
  return str.toLowerCase().replace(/\//g, "_");
}
