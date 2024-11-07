import storiesData from "$data/stories.js";
import authorsData from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export async function load() {
  const keys = [
    "url",
    "url_alt",
    "date",
    "month",
    "hed",
    "dek",
    "tease",
    "author",
    "keyword",
    "slug",
    "home_text",
    "home_pick"
  ];

  const stories = filterStoryProps({ data: storiesData, keys });

  const staff = authorsData
    .filter((d) => d.position === "Staff")
    .map((d) => ({
      id: d.id,
      name: d.name,
      slug: d.slug
    }));

  const authors = authorsData.map((d) => d.slug);

  const data = {
    stories,
    staff,
    authors
  };

  return data;
}
