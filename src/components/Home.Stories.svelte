<script>
  import { getContext } from "svelte";
  import { ascending, descending } from "d3";
  import inView from "../actions/inView.js";
  import Story from "$components/Story.svelte";

  // const jump = () => {
  //   const { top } = sectionEl.getBoundingClientRect();
  //   const y = window.scrollY + top - 64;
  //   window.scrollTo(0, y);
  // };

  let { highlight } = $props();

  const { stories, copy } = getContext("Home");

  let sectionEl;

  let storiesSorted = $state(stories.sort((a, b) => descending(a.id, b.id)));
</script>

<section id="stories" bind:this={sectionEl}>
  <ul>
    {#each storiesSorted as story (story.slug)}
      <li>
        <Story {...story} />
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    margin-top: 16px;
  }

  ul {
    --screenshot: 16em;
    --padding: 48px;
    --margin: 16px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    /* max-width: calc(4 * (var(--screenshot) + var(--padding) * 2 + var(--margin) * 2)); */
    margin: 0 auto;
    justify-content: center;
  }

  li {
    margin: 0;
    list-style-type: none;
    width: calc(var(--screenshot) + (var(--padding) * 2));
    padding: var(--margin);
  }
</style>
