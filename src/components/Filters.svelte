<script>
  import { base } from "$app/paths";
  let { resource, activeFilter = $bindable(), filters } = $props();

  let override = $state();

  export function set(f) {
    override = f;
  }

  $effect(() => {
    // when active filter changes, reset override
    if (activeFilter) override = undefined;
  });
</script>

<div class="filters--desktop" class:resource>
  {#each filters as filter}
    {@const slug = filter?.toLowerCase()?.replace(/[^a-z]/g, "_")}
    {@const active = override ? slug === override : slug === activeFilter || !activeFilter}
    <button class:active onclick={() => (activeFilter = slug === activeFilter ? undefined : slug)}>
      <img class="icon" src="{base}/assets/stickers/{slug}@2x.png" alt="{slug} sticker" />
      <span class="name">{filter}</span>
    </button>
  {/each}
</div>

<div class="filters--mobile">
  <!-- <label for="filter-select">Filter by</label> -->
  <select id="filter-select" bind:value={activeFilter}>
    <option value="">{resource ? "Choose Type" : "All"}</option>
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

  .filters--desktop button {
    margin: 0 16px 0 -8px;
    display: flex;
    align-items: center;
    background: none;
    padding: 0;
    border: none;
    text-transform: uppercase;
    opacity: 0.33;
    transition: opacity var(--transition-fast);
  }

  .filters--desktop button.active {
    opacity: 1;
  }

  .filters--desktop span {
    font-size: var(--font-size-xsmall);
    text-align: left;
    color: var(--color-fg);
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

  .filters--mobile select {
    border: 2px solid var(--color-fg);
    background-color: var(--color-input-bg);
    border-radius: 3px;
    line-height: normal;
    font-size-adjust: 0.5;
    transform: translateY(1px);
    font-size: var(--font-size-small);
  }

  @media (max-width: 960px) {
    .filters--desktop {
      display: none;
    }

    .filters--mobile {
      display: inline-block;
      margin-top: -3px;
    }
  }
</style>
