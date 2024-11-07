import { shuffle } from "d3";

export default function madlibToHTML({ stories, category, copy, filter }) {
	const filteredStories = stories.filter((d) => d.home_text).filter(d => d.home_pick.includes(filter));

	if (!filteredStories.length) return "";

	shuffle(filteredStories);

	const regex = new RegExp(`\\[${category}\\]`, "g");

	const html = copy[category].replace(regex, () => {
		const story = filteredStories.pop();
		return `
    		<a href="https://pudding.cool/${story.url}" rel="external">
    			<span>${story.home_text}</span></a>
				<img src="common/assets/thumbnails/320/${story.slug}.jpg" alt="story thumbnail" />`;
	});

	return html;
};
