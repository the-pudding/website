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
    if (!highlight.includes(slug)) return "rgb(0, 0, 0)";

    const match = colors.find((d) => d.slug === slug);
    return match && match.colors.length ? match.colors[0] : ["rgb(0,0,0)"];
  };

  const reSort = () => {
    sortedStories.sort(
      (a, b) =>
        descending(highlight.includes(a.slug), highlight.includes(b.slug)) ||
        descending(a.date, b.date)
    );

    sortedStories = sortedStories;
  };

  $: highlight, reSort();
</script>

<section id="stories">
  <h2>{copy.storiesHed}</h2>
  <ul>
    {#each sortedStories as { tease, url, slug }}
      <div class="palette">
        {#each lookupColors(slug) as rgb}
          <p style="background: {rgb};" />
        {/each}
      </div>

      <li
        class="story"
        class:is-collapsed={!highlight.includes(slug)}
        style="background-color: {lookupColor(slug)};"
      >
        <a href="https://pudding.cool/{url}" rel="external">
          <img src="common/assets/thumbnails/32/{slug}.jpg" alt="" />
          <h3 class="tease">{tease}</h3>
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
  }

  img {
    max-width: 20em;
    width: 10em;
  }

  .palette {
    display: flex;
    display: none;
  }

  .palette p {
    width: 4em;
    height: 4em;
  }

  .tease {
    margin: 0;
    color: white;
  }
</style>
