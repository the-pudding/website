import stories from "$data/stories.js";
import authors from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export const get = async ({ params }) => {
	const { name } = params;

	const keys = ["hed", "author"];
	const data = filterStoryProps({ data: stories, keys });

	const match = authors.find(d => d.slug === name);

	const filtered = data.filter(d => d.author.includes(match.id));

	const body = {
		stories: filtered,
		author: match
	};

	return { body };
}