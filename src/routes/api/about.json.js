import authorsData from "$data/authors.js";

export const get = async () => {
	const authors = authorsData.map(d => ({
		id: d.id,
		name: d.name,
		slug: d.slug,
		position: d.position
	}));

	const body = {
		authors
	};

	return { body };
}