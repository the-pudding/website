<script>
  import { getContext } from "svelte";
  import { ascending, descending } from "d3";
  import colors from "$data/thumbnail-colors.json";

  export let highlight;

  const { stories, copy } = getContext("Home");

  stories.sort((a, b) => descending(a.date, b.date));

  let sortedStories = stories.map((d) => ({ ...d }));

  const lookupColors = (slug) => {
    const match = colors.find((d) => d.slug === slug);
    return match && match.colors.length ? match.colors : ["rgb(255,255,255)"];
  };

  const lookupColor = (slug) => {
    if (!highlight.includes(slug)) return "rgb(150, 150, 150)";

    const match = colors.find((d) => d.slug === slug);
    return match && match.colors.length ? match.colors[0] : ["rgb(0,0,0)"];
  };

  const reSort = () => {
    sortedStories.sort(
      (a, b) =>
        descending(highlight.indexOf(a.slug), highlight.indexOf(b.slug)) ||
        descending(a.date, b.date)
    );

    sortedStories = sortedStories;
  };

  $: console.log(highlight);
  $: highlight, reSort();
</script>

<section id="stories">
  <h2>{copy.storiesHed}</h2>
  <ul>
    {#each sortedStories as { tease, url, slug }}
      <li
        class="story"
        class:is-collapsed={!highlight.includes(slug)}
        style="background-color: {lookupColor(slug)};"
      >
        <a href="https://pudding.cool/{url}" rel="external">
          <img src="common/assets/thumbnails/32/{slug}.jpg" alt="" />
          <h3 class="tease">{@html tease}</h3>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .story.is-collapsed {
  }

  .story.is-collapsed img {
    display: none;
  }

  .story a {
    display: flex;
    padding: 2em;
    text-decoration: none;
    font-size: 4vh;
  }

  img {
    max-width: 20em;
    width: 10em;
  }

  .tease {
    margin: 0;
    color: #000;
  }
</style>
