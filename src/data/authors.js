import data from "$data/authors.csv";

const slugify = (str) => str.toLowerCase().replace(/\s/g, "-");

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
