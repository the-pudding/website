import storiesData from "$data/stories.js";
import authorsData from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export const GET = async ({ params }) => {
	const { name } = params;

	const keys = ["tease", "url", "url_alt", "slug", "author", "date", "month"];
	const storiesFiltered = filterStoryProps({ data: storiesData, keys });

	const author = authorsData.find(d => d.slug === name);

	const stories = storiesFiltered.filter(d => d.author.includes(author.id));

	stories.forEach(story => delete story.author);

	const body = {
		stories,
		author
	};

	return { body };
}