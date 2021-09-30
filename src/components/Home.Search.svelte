<script>
  import { getContext } from "svelte";

  export let highlight;

  const { stories } = getContext("Home");

  const data = stories.map((d) => ({
    slug: d.slug,
    search: d.hed.toLowerCase()
  }));

  let value = "";

  $: query = value.toLowerCase().trim();
  $: results = query.length > 2 ? data.filter((d) => d.search.includes(query)) : data;
  $: highlight = results.map((d) => d.slug);
</script>

<div class="search">
  <input placeholder="Search stories (e.g., Spotify)" bind:value />
</div>

<!-- {#each results as { hed }}
  <p>{hed}</p>
{/each} -->
<style>
  .search {
    border-bottom: 2px solid teal;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>
