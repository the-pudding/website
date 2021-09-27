import stories from "$data/stories.js";
import authors from "$data/authors.js";
import filterStoryProps from "$utils/filterStoryProps.js";

export const get = async () => {
	const keys = ["url", "date", "month", "hed", "dek", "topic", "author", "keyword", "slug", "home_popular", "home_personal", "personal_pick"];

	const staff = authors.filter(d => d.position === "Staff").map(d => ({
		id: d.id,
		name: d.name
	}));

	const body = {
		stories: filterStoryProps({ data: stories, keys }),
		staff
	};

	return { body };
}