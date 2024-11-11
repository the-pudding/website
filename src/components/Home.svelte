<script>
  import { descending } from "d3";
  import { getContext } from "svelte";
  import Stories from "$components/Home.Stories.svelte";

  const { stories, copy } = getContext("Home");

  let searchValue = $state("");

  // todo load more story data

  let filtered = $derived.by(() => {
    const query = searchValue.toLowerCase();
    const f = stories.filter((d) => {
      // todo flesh out
      const search = [d.short, d.tease].join(" ").toLowerCase();
      return search.includes(query);
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
</script>

<div class="ui">
  <div class="search">
    <span>Search</span>
    <img class="icon" src="assets/stickers/search@2x.png" alt="search sticker" />
    <input placeholder="Find a story" bind:value={searchValue} />
  </div>
  <div class="filters">
    <span>Filter By</span>
    {#each filters as filter}
      {@const slug = filter.toLowerCase().replace(/[^a-z]/g, "_")}
      <span class="filter">
        <img class="icon" src="assets/stickers/{slug}@2x.png" alt="{slug} sticker" />

        <span class="name">{filter}</span>
      </span>
    {/each}
  </div>
</div>
<Stories stories={filtered} />

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

  .search {
    display: flex;
    align-items: center;
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

  .icon {
    width: 48px;
    margin-left: 4px;
  }

  input {
    margin-left: 8px;
  }

  input::placeholder {
    font-family: var(--mono);
  }
</style>
