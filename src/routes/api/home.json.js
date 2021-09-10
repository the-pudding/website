import stories from "$data/stories.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export const get = async () => {
	const keys = ["url", "date", "month", "hed", "dek", "topic", "author", "keyword", "slug"];
	const body = filterStoryProps({ data: stories, keys });
	return { body };
}