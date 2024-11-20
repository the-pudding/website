<script>
  import { descending } from "d3";
  import { getContext } from "svelte";
  import Stories from "$components/Stories.svelte";
  import Filters from "$components/Home.Filters.svelte";

  const { stories, copy } = getContext("Home");

  const filters = ["Our Faves", "Audio", "Video", "Updating", "Your Input", "Collabs"];

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
</script>

<div class="c">
  <div class="ui column-wide">
    <div class="search">
      <span>Search</span>
      <img class="icon" src="assets/stickers/search@2x.png" aria-hidden="true" alt="" />
      <input placeholder="Find a story" bind:value={searchValue} />
    </div>
    <div class="filters">
      <Filters {filters} bind:activeFilter></Filters>
    </div>
  </div>
  <Stories stories={filtered} />
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
  }

  .search {
    display: flex;
    align-items: center;
  }

  .search span {
    font-size: var(--font-size-xsmall);
  }

  input {
    margin-left: 8px;
    width: 12em;
  }

  input::placeholder {
    font-family: var(--mono);
  }

  .icon {
    width: 48px;
    margin-left: 4px;
  }
</style>
