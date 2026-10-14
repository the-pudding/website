import all from "$data/studio-projects.csv";

export async function load() {
  const keys = [
    "year",
    "category",
    "company",
    "title",
    "url",
    "description",
    "urlText",
    "media",
    "alt",
    "color"
  ];

  const pick = (d) => Object.fromEntries(keys.map((k) => [k, d[k]]));

  const features = all.filter((d) => d.visibility === "show").map(pick);
  const others = all.filter((d) => d.visibility === "hide").map(pick);

  return { projects: { features, others } };
}
