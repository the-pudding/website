<script>
  import { ascending } from "d3";
  import { setContext } from "svelte";
  import Stories from "$components/Home.Stories.svelte";
  // import Search from "$components/Home.Search.svelte";

  import collabs from "$svg/collabs.svg";
  import yourinput from "$svg/yourinput.svg";
  import updating from "$svg/updating.svg";
  import video from "$svg/video.svg";
  import audio from "$svg/audio.svg";
  import awardwinners from "$svg/awardwinners.svg";
  import ourfaves from "$svg/ourfaves.svg";

  const svgs = {
    collabs,
    yourinput,
    updating,
    video,
    audio,
    awardwinners,
    ourfaves
  };

  let { copy, stories } = $props();

  // let jump;

  let highlight = $state(stories.map((d) => d.slug));

  const filters = [
    "Our Faves",
    "Award Winners",
    "Audio",
    "Video",
    "Updating",
    "Your Input",
    "Collabs"
  ];

  // const onSearchFocus = () => jump();
</script>

<!-- <Search bind:highlight on:focus={onSearchFocus} /> -->
<div class="ui">
  <div><span>Search</span> <input placeholder="Find a story" /></div>
  <div class="filters">
    <span>Filter By</span>
    {#each filters as filter}
      {@const slug = filter.replace(/\s/g, "").toLowerCase()}
      <span class="filter">
        <span class="icon">
          {@html svgs[slug]}
        </span>
        <span class="name">{filter}</span>
      </span>
    {/each}
  </div>
</div>
<Stories {highlight} />

<style>
  .ui {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: var(--color-bg);
    padding: 16px 8px;
    z-index: var(--z-overlay);
    font-family: var(--mono);
    text-transform: uppercase;
    font-size: var(--14px);
    font-weight: bold;
  }

  .filters {
    display: flex;
    align-items: center;
  }

  .filter {
    margin: 0 8px;
    display: flex;
    align-items: center;
  }

  input::placeholder {
    font-family: var(--mono);
  }

  :global(.filter svg) {
    display: block;
  }
</style>
