import storiesData from "$data/stories.js";
import authorsData from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";
import { descending } from "d3";
export async function load({ params }) {
  const { name } = params;

  const keys = ["id", "href", "month", "short", "tease", "slug", "author"];
  const storiesFiltered = filterStoryProps({ data: storiesData, keys });

  const author = authorsData.find((d) => d.slug === name);

  const stories = storiesFiltered.filter((d) => d.author.includes(author.id));

  stories.forEach((story) => delete story.author);

  stories.sort((a, b) => descending(a.id, b.id));

  return { stories, author };
}
