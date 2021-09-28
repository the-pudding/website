import storiesData from "$data/stories.js";
import authorsData from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export const get = async ({ params }) => {
	const { name } = params;

	const keys = ["hed", "author"];
	const storiesFiltered = filterStoryProps({ data: storiesData, keys });

	const author = authorsData.find(d => d.slug === name);

	const stories = storiesFiltered.filter(d => d.author.includes(match.id));

	const body = {
		stories,
		author
	};

	return { body };
}