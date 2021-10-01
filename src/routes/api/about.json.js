import authorsData from "$data/authors.js";

export const get = async () => {
	const staff = authorsData.filter(d => d.position === "Staff").map(d => ({
		id: d.id,
		name: d.name,
		slug: d.slug,
	}));

	const body = {
		staff
	};

	return { body };
}