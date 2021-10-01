import storiesData from "$data/stories.js";
import authorsData from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export const get = async () => {
	const keys = ["url", "date", "month", "hed", "dek", "tease", "topic", "author", "keyword", "slug", "home_popular", "home_personal", "personal_pick"];

	const stories = filterStoryProps({ data: storiesData, keys });

	const staff = authorsData.filter(d => d.position === "Staff").map(d => ({
		id: d.id,
		name: d.name
	}));

	const body = {
		stories,
		staff
	};

	return { body };
}