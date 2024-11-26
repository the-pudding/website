import storiesData from "$data/stories.js";
import authorsData from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export async function load() {
  const keys = ["id", "href", "month", "short", "tease", "slug", "filters", "bgColor", "faves"];

  const stories = filterStoryProps({ data: storiesData, keys });

  const staff = authorsData.filter((d) => d.position === "Staff");

  const data = {
    stories,
    staff
  };

  return data;
}
