<script>
  import { getContext } from "svelte";
  import { ascending, descending } from "d3";
  import inView from "../actions/inView.js";
  import Story from "$components/Story.svelte";

  let { stories } = $props();
  // const jump = () => {
  //   const { top } = sectionEl.getBoundingClientRect();
  //   const y = window.scrollY + top - 64;
  //   window.scrollTo(0, y);
  // };

  let sectionEl;
</script>

<section id="stories" bind:this={sectionEl}>
  <ul>
    {#each stories as story (story.slug)}
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
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    /* justify-content: center; */
  }

  li {
    margin: 0;
    list-style-type: none;
    /* width: calc(var(--screenshot) + (var(--padding) * 2)); */
    padding: var(--margin);
    width: 100%;
    --padding: clamp(16px, 12vw, 48px);
  }

  @media only screen and (min-width: 600px) {
    li {
      width: 50%;
      --padding: clamp(16px, 6vw, 48px);
    }
  }

  @media only screen and (min-width: 960px) {
    li {
      width: 33.3%;
      --padding: clamp(16px, 4vw, 48px);
    }
  }

  @media only screen and (min-width: 1280px) {
    li {
      width: 25%;
      --padding: clamp(16px, 3vw, 48px);
    }
  }
</style>
