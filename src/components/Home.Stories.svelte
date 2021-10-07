<script>
  import { getContext } from "svelte";
  import { ascending, descending } from "d3";
  import Story from "$components/Story.svelte";

  export const jump = () => {
    const { top } = sectionEl.getBoundingClientRect();
    const y = window.scrollY + top - 64;
    window.scrollTo(0, y);
  };

  export let highlight;

  const { stories, copy } = getContext("Home");
  let sectionEl;

  stories.sort((a, b) => descending(a.date, b.date));

  let sortedStories = stories.map((d) => ({ ...d }));

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

<section id="stories" bind:this={sectionEl}>
  <h2><strong>{copy.storiesHed}</strong></h2>
  <ul>
    {#each sortedStories as { tease, url, slug }}
      <li>
        <Story {tease} {url} {slug} collapse={!highlight.includes(slug)} />
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    padding-top: 4em;
  }

  h2 {
    font-size: var(--font-size-big);
    text-transform: uppercase;
    max-width: 90%;
    margin: 0 auto;
    line-height: 1;
    transform: translate(0.2em, 0.2em);
  }
</style>
