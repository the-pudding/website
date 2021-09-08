import stories from "$data/stories.js;
import filterStoryProps from "$utils/filterStoryProps.js";

export async function get() {
	const keys = ["url", "date", "month", "hed", "dek", "topic", "author", "keyword", "slug"];
	const body = filterStoryProps({ data: stories, keys });
	return { body };
}