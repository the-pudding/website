import storiesData from "$data/stories.js";
import authorsData from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export async function load() {
  const keys = ["id", "href", "month", "short", "tease", "slug", "filters", "color_override"];

  const stories = filterStoryProps({ data: storiesData, keys });

  const authors = authorsData.map((d) => d.slug);

  const data = {
    stories,
    authors
  };

  return data;
}
