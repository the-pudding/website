import authorsData from "$data/authors.js";

export async function load() {
  const authors = authorsData.map((d) => ({
    id: d.id,
    name: d.name,
    slug: d.slug,
    position: d.position
  }));

  return { authors };
}
