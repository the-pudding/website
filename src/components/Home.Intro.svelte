<script>
  import { onMount } from "svelte";
  import { shuffle } from "d3";
  import wordmark from "$svg/wordmark.svg";
  import copy from "$data/home.json";

  export let stories;
  export let staff;

  let personalHTML = "";
  let signatureHTML = "";

  const madlibToHTML = ({ category, filterFunction }) => {
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
    			${story[textProp]}
    			<img src="common/assets/thumbnails/320/${story.slug}.jpg" alt="" />
    		</a>
    	`;
    });

    return html;
  };

  const popularHTML = madlibToHTML({ category: "popular" });

  const renderPersonal = () => {
    // const { id, name } = staff[Math.floor(Math.random() * staff.length)];
    const filterFunction = (d) => d.personal_pick.includes("jan");

    personalHTML = madlibToHTML({ category: "personal", filterFunction });
    signatureHTML = "jan";
  };

  onMount(() => {
    renderPersonal();
  });
</script>

<h1 aria-label={copy.title}><div class="wordmark">{@html wordmark}</div></h1>

<div class="letter">
  <p>
    {@html popularHTML}
    <span class="personal">{@html personalHTML}</span>
    {copy.welcome}
    <span class="signature">{@html signatureHTML}</span>
  </p>
</div>

<style>
  .wordmark {
    max-width: 8em;
  }

  :global(.letter img) {
    display: inline-block;
    max-width: 10em;
  }
</style>
