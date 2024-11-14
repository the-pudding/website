import data from "$data/authors.csv";
import slugify from "$utils/slugify.js";

const clean = data.map((d) => ({
  id: d.id,
  name: d.name,
  email: d.email,
  slug: slugify(d.name),
  position: d.position,
  social: d.social,
  url: d.url,
  bio: d.bio,
  pronoun: d.pronoun || "They"
}));

export default clean;
