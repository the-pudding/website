<script>
  import { getContext } from "svelte";
  import { ascending, descending } from "d3";
  import inView from "../actions/inView.js";
  import Story from "$components/Story.svelte";
  import { onMount } from "svelte";

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

  let promoBadge;
  let visible = false;

  onMount(() => {
    // TODO
    promoBadge = document.getElementById("promo");
  });

  function showPromo() {
    visible = !visible;
    console.log(visible);

    visible ? promoBadge.classList.add("is-visible") : promoBadge.classList.remove("is-visible");
  }
</script>

<section
  id="stories"
  bind:this={sectionEl}
  use:inView={{ bottom: 400 }}
  on:enter={() => showPromo()}
  on:exit={() => showPromo()}
>
  <h2 class="column-wide upper">{copy.storiesHed}</h2>
  <ul>
    {#each sortedStories as { tease, url, slug, month }}
      <li class="no-padding-li">
        <Story {tease} {url} {slug} {month} collapse={!highlight.includes(slug)} />
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    margin-top: 4em;
  }
</style>
