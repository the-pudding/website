<script>
  import { getContext } from "svelte";
  import { ascending, descending } from "d3";
  import colors from "$data/thumbnail-colors.json";

  export let highlight;

  const { stories, copy } = getContext("Home");

  stories.sort((a, b) => descending(a.date, b.date));

  let sortedStories = stories.map((d) => ({ ...d }));

  const lookupColor = (slug) => {
    if (!highlight.includes(slug)) return "rgb(150, 150, 150)";

    const match = colors.find((d) => d.slug === slug);
    return match ? match.color : ["rgb(0,0,0)"];
  };

  const reSort = () => {
    sortedStories.sort(
      (a, b) =>
        descending(highlight.indexOf(a.slug), highlight.indexOf(b.slug)) ||
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
      <li
        class="story"
        class:is-collapsed={!highlight.includes(slug)}
        style="background-color: {lookupColor(slug)};"
      >
        <a href="https://pudding.cool/{url}" rel="external">
          <img
            src="common/assets/thumbnails/32/{slug}.jpg"
            alt="teaser for story"
            srcset="common/assets/thumbnails/1280/{slug}.jpg 1280w,
						common/assets/thumbnails/640/{slug}.jpg 640w,
						common/assets/thumbnails/480/{slug}.jpg 480w"
            sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
            loading="lazy"
          />
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
    font-size: 2vw;
    max-width: 1920px;
    margin: 0 auto;
    align-items: flex-start;
  }

  .story a:hover .tease,
  .story a:focus .tease {
    text-decoration: underline;
  }

  img {
    max-width: 640px;
    width: 40%;
    padding: 0 1em;
  }

  .tease {
    margin: 0;
    padding: 0 1em;
    width: 60%;
    color: var(--color-body);
  }
</style>
