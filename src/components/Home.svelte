<script>
  import { descending } from "d3";
  import { getContext } from "svelte";
  import Stories from "$components/Stories.svelte";
  import Filters from "$components/Filters.svelte";

  const initMax = 27;
  let maxStories = $state(initMax);
  let storiesEl = undefined;

  const { stories, staff, copy } = getContext("Home");

  const filters = ["Our Faves", "Popular", "Updating", "Your Input", "Video", "Audio"];

  let searchValue = $state("");
  let activeFilter = $state(undefined);

  // todo load more story data
  let filtered = $derived.by(() => {
    const query = searchValue.toLowerCase();
    const f = stories.filter((d) => {
      // todo flesh out
      const search = [d.short, d.tease].join(" ").toLowerCase();
      const inSearch = search.includes(query);

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

  function onLoadMore() {
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
</script>

<div class="c">
  <div class="ui column-wide">
    <div class="search">
      <!-- <span>Search</span> -->
      <img class="icon" src="assets/stickers/search@2x.png" aria-hidden="true" alt="" />
      <input type="text" placeholder="Find a story" bind:value={searchValue} />
    </div>
    <div class="filters">
      <Filters {filters} bind:activeFilter></Filters>
    </div>
  </div>
  <div class="stories" bind:this={storiesEl}>
    <Stories stories={filtered} />
  </div>
  <div class="more" class:visible={initMax === maxStories}>
    <button onclick={onLoadMore}>Load More Stories</button>
  </div>
</div>

<style>
  .ui {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-bg);
    padding: 16px;
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
    margin-left: -8px;
    width: 10em;
    border: 2px solid var(--color-fg);
    border-radius: 1px;
    transform: scale(0.75);
    padding: 12px 8px;
  }

  input::placeholder {
    font-family: var(--mono);
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
    align-items: center;
    justify-content: center;
  }

  .more.visible {
    display: flex;
  }

  .more button {
    transition: transform calc(var(--1s) * 0.25);
  }

  .more button:hover {
    transform: translateY(-4px);
    background: var(--color-secondary-gray);
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
