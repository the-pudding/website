<script>
  let { activeFilter = $bindable(), filters } = $props();
</script>

<div class="filters--desktop">
  <span>Filter By</span>
  {#each filters as filter}
    {@const slug = filter?.toLowerCase()?.replace(/[^a-z]/g, "_")}
    {@const active = slug === activeFilter || !activeFilter}
    <button class:active onclick={() => (activeFilter = slug === activeFilter ? undefined : slug)}>
      <img class="icon" src="assets/stickers/{slug}@2x.png" alt="{slug} sticker" />
      <span class="name">{filter}</span>
    </button>
  {/each}
</div>

<div class="filters--mobile">
  <label for="filter-select">Filter by</label>
  <select id="filter-select" bind:value={activeFilter}>
    <option value="">All</option>
    {#each filters as filter}
      {@const slug = filter?.toLowerCase()?.replace(/[^a-z]/g, "_")}
      <option value={slug}>{filter}</option>
    {/each}
  </select>
</div>

<style>
  .filters--desktop {
    display: flex;
    align-items: center;
  }

  .filters--desktop > span {
    font-size: var(--font-size-xsmall);
    display: block;
  }

  .filters--desktop button {
    margin: 0 8px;
    display: flex;
    align-items: center;
    background: none;
    padding: 0;
    border: none;
    text-transform: uppercase;
    opacity: 0.33;
    flex: auto;
    transition: opacity var(--transition-fast);
  }

  .filters--desktop button.active {
    opacity: 1;
  }

  .filters--desktop span {
    font-size: var(--font-size-xsmall);
    text-align: left;
  }

  .filters--desktop button:hover .icon {
    transform: rotate(var(--left-tilt-double)) scale(1.05);
  }

  .filters--desktop .icon {
    width: 48px;
    margin-left: 4px;
    transition: transform calc(var(--1s) * 0.25);
  }

  .filters--desktop .icon:hover {
    transform: rotate(var(--left-tilt-double)) scale(1.05);
  }

  .filters--mobile {
    display: none;
  }

  label {
    font-size: var(--font-size-small);
  }

  @media (max-width: 1200px) {
    .filters--desktop {
      display: none;
    }

    .filters--mobile {
      display: block;
    }
  }
</style>
