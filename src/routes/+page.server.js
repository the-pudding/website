import storiesData from "$data/stories.js";
import authorsData from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export async function load() {
  const keys = ["id", "href", "month", "short", "tease", "slug"];

  const stories = filterStoryProps({ data: storiesData, keys }).slice(-9, -1);
  // console.table(stories);
  // const staff = authorsData
  //   .filter((d) => d.position === "Staff")
  //   .map((d) => ({
  //     id: d.id,
  //     name: d.name,
  //     slug: d.slug
  //   }));

  const authors = authorsData.map((d) => d.slug);

  const data = {
    stories,
    authors
  };

  return data;
}
