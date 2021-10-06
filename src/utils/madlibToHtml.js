import { shuffle } from "d3";

export default function madlibToHTML({ stories, copy, category, filterFunction }) {
	filterFunction = filterFunction || (() => true);

	const textProp = `home_${category}`;

	const filteredStories = stories.filter((d) => d[textProp]).filter(filterFunction);

	if (!filteredStories.length) return "";

	shuffle(filteredStories);

	const regex = new RegExp(`\\[${category}\\]`, "g");

	const html = copy[category].replace(regex, () => {
		const story = filteredStories.pop();
		return `
    		<a href="https://pudding.cool/${story.url}" rel="external">
    			<span>${story[textProp]}</span>
    			<img src="common/assets/thumbnails/320/${story.slug}.jpg" alt="" /></a>`;
	});

	return html;
};
