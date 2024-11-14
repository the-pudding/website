<script>
  import { descending } from "d3";
  import { getContext } from "svelte";
  import Stories from "$components/Stories.svelte";

  const { stories, copy } = getContext("Home");

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
    return f;
  });

  const filters = [
    "Our Faves",
    "Award Winners",
    "Audio",
    "Video",
    "Updating",
    "Your Input",
    "Collabs"
  ];

  function onSearchFocus() {
    jump();
  }

  $inspect(activeFilter);
</script>

<div class="c">
  <div class="ui column-wide">
    <div class="search">
      <span>Search</span>
      <img class="icon" src="assets/stickers/search@2x.png" alt="search sticker" />
      <input placeholder="Find a story" bind:value={searchValue} />
    </div>
    <div class="filters">
      <span>Filter By</span>
      {#each filters as filter}
        {@const slug = filter?.toLowerCase()?.replace(/[^a-z]/g, "_")}
        {@const active = slug === activeFilter || !activeFilter}
        <button
          class:active
          class="filter"
          onclick={() => (activeFilter = slug === activeFilter ? undefined : slug)}
        >
          <img class="icon" src="assets/stickers/{slug}@2x.png" alt="{slug} sticker" />
          <span class="name">{filter}</span>
        </button>
      {/each}
    </div>
  </div>
  <Stories stories={filtered} />
</div>

<style>
  .c {
    /* --screenshot: 16em;
    --padding: 48px; */
  }

  .ui {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: sticky;
    top: 0; */
    background: var(--color-bg);
    padding: 16px;
    z-index: var(--z-overlay);
    font-family: var(--mono);
    text-transform: uppercase;
    font-size: var(--14px);
    font-weight: bold;
  }

  .search {
    display: flex;
    align-items: center;
  }

  .search span {
    font-size: var(--font-size-xsmall);
  }

  .filters {
    display: flex;
    align-items: center;
  }

  .filters span {
    font-size: var(--font-size-xsmall);
  }

  button.filter {
    margin: 0 8px;
    display: flex;
    align-items: center;
    background: none;
    padding: 0;
    border: none;
    text-transform: uppercase;
    opacity: 0.33;
    transition: opacity var(--transition-fast);
  }

  button.filter.active {
    opacity: 1;
  }

  .filter span {
    font-size: var(--font-size-xsmall);
  }

  .filter:hover .icon {
    transform: rotate(var(--left-tilt-double)) scale(1.05);
  }

  .icon {
    width: 48px;
    margin-left: 4px;
    transition: transform calc(var(--1s) * 0.25);
  }

  .icon:hover {
    transform: rotate(var(--left-tilt-double)) scale(1.05);
  }

  input {
    margin-left: 8px;
    width: 12em;
  }

  input::placeholder {
    font-family: var(--mono);
  }
</style>
