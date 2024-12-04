<script>
  import { descending } from "d3";
  import { getContext } from "svelte";
  import Stories from "$components/Stories.svelte";
  import Filters from "$components/Filters.svelte";
  import loadCsv from "$utils/loadCsv.js";
  import tokenize from "$utils/tokenize.js";

  const initMax = 27;
  const { stories } = getContext("Home");
  const filters = ["Our Faves", "Popular", "Updating", "Your Input", "Video", "Audio"];

  let maxStories = $state(initMax);
  let storiesEl = undefined;
  let storiesWithSearch = $state([...stories]);

  let searchValue = $state("");
  let activeFilter = $state(undefined);

  let filtered = $derived.by(() => {
    const query = searchValue.toLowerCase();
    const f = storiesWithSearch.filter((d) => {
      const tokens = tokenize(query);
      const inSearch = tokens.every((t) => d.search.some((s) => s.includes(t)));

      const inFilter = activeFilter ? d.filters.includes(activeFilter) : true;
      return inSearch && inFilter;
    });
    f.sort((a, b) => descending(a.id, b.id));
    const sliced = f.slice(0, maxStories);

    sliced.splice(7, 0, { component: "Subscribe", slug: "Subscribe" });
    sliced.splice(15, 0, { component: "Faves", slug: "Faves" });
    sliced.splice(26, 0, { component: "Merch", slug: "Merch" });

    return sliced;
  });

  function onLoadMore(e) {
    e.stopPropagation();
    maxStories = stories.length;
  }

  $effect(() => {
    // scroll to
    if (searchValue) {
      storiesEl.scrollIntoView({ behavior: "instant" });
      const offset = -54;
      window.scrollBy({ top: offset, behavior: "instant" });
    }
  });

  $effect(async () => {
    const searchData = await loadCsv("assets/data/search.csv");
    storiesWithSearch = storiesWithSearch.map((d) => {
      const match = searchData.find((e) => e.slug === d.slug) || {};
      return {
        ...d,
        search: [
          ...tokenize(d.tease),
          ...tokenize(d.short),
          ...tokenize(match.hed),
          ...tokenize(match.dek),
          ...tokenize(match.keyword),
          ...tokenize(match.author)
        ]
      };
    });
  });
</script>

<div class="c">
  <div class="ui column-wide">
    <div class="search">
      <!-- <span>Search</span> -->
      <img class="icon" src="assets/stickers/search@2x.png" aria-hidden="true" alt="" />
      <input type="text" placeholder="Find a story..." bind:value={searchValue} />
    </div>
    <div class="filters">
      <Filters {filters} bind:activeFilter></Filters>
    </div>
  </div>
  <div class="stories" bind:this={storiesEl}>
    <Stories stories={filtered} />
  </div>
  <div class="more" class:visible={initMax === maxStories}>
    <button onclick={onLoadMore}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg
      >
      <span>Load More Stories</span>
    </button>
  </div>
</div>

<style>
  .c {
    position: relative;
  }
  .ui {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: var(--color-bg);
    z-index: var(--z-overlay);
    font-family: var(--mono);
    text-transform: uppercase;
    font-size: var(--14px);
    font-weight: bold;
    position: sticky;
    top: 0;
    left: 0;
  }

  .search {
    display: flex;
    align-items: center;
  }

  input {
    margin-left: 0px;
    width: 140px;
    padding: 12px 8px;
    border: 1px solid rgba(48, 48, 48, 0.4);
    background: white;
    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    outline: none;
  }

  input::placeholder {
    font-family: var(--sans);
  }
  input::-webkit-input-placeholder {
    font-family: var(--sans);
  }

  input::-moz-placeholder {
    font-family: var(--sans);
  }

  input:-ms-input-placeholder {
    font-family: var(--sans);
  }

  .icon {
    width: 48px;
    margin-left: -4px;
    transition: transform calc(var(--1s) * 0.25);
  }

  .icon:hover {
    transform: rotate(var(--left-tilt-double)) scale(1.05);
  }

  .more {
    display: none;
    height: 50vh;
    max-height: 600px;
    background: var(--fade);
    position: absolute;
    width: 100%;
    bottom: 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    z-index: 1000;
    pointer-events: none;
  }

  .more.visible {
    display: flex;
  }

  .more button {
    transition: transform calc(var(--1s) * 0.25);
    margin-bottom: 20%;
    display: flex;
    align-items: center;
    padding: 16px 18px;
    pointer-events: all;
  }

  .more button:hover {
    transform: translateY(-4px);
    background: var(--color-secondary-gray);
  }

  .more button svg {
    width: 23px;
    stroke: var(--color-bg);
    margin-right: 7px;
  }

  .more button span {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 1px;
  }

  @media only screen and (min-width: 400px) {
    input {
      margin-left: -4px;
      transform: scale(0.875);
      width: 12em;
      padding: 8px;
    }
  }
</style>
