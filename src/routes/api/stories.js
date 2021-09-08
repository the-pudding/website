import stories from "$data/stories.csv";
import cleanStories from "$utils/cleanStories.js";
import filterStoryProps from "$utils/filterStoryProps.js";

const data = cleanStories(stories);

export async function get(x) {
	const keys = ["hed", "dek", "slug"];
	const output = filterStoryProps({ data, keys });
	return {
		body: output
	};
}