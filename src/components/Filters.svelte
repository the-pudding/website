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
  {#each filters as filter, i}
    {@const slug = filter?.toLowerCase()?.replace(/[^a-z]/g, "_")}
    {@const active = override ? slug === override : slug === activeFilter || !activeFilter}
    <button class="{i % 2 === 0 ? 'button-even': ''}" class:active onclick={() => (activeFilter = slug === activeFilter ? undefined : slug)}>
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
    -webkit-font-smoothing: antialiased;
  }

  .filters--desktop button:hover .icon {
    transform: rotate(var(--left-tilt-double)) scale(1.05);
  }

  .filters--desktop .icon {
    width: 48px;
    margin-left: 4px;
    transition: transform calc(var(--1s) * 0.25);
    transform: rotate(var(--right-tilt));
  }

  .filters--desktop .button-even .icon {
    transform: rotate(var(--left-tilt));
  }

  .filters--desktop .button-even:hover .icon {
    transform: rotate(-6deg) scale(1.05);
  }

  .filters--mobile {
    display: none;
    color: var(--color-bg);
    margin-top: 1px;
    -webkit-font-smoothing: antialiased;
  }

  .filters--mobile select {
    border: 1px solid rgb(214 214 214);
    background-color: var(--color-input-bg);
    color: var(--color-fg);
    border-radius: 6px;
    line-height: normal;
    font-size: 1rem;
    max-width: 120px;
    padding: 12px 8px;
    padding-right: 24px;
    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.1);
    
  }

  @media (max-width: 960px) {
    .filters--desktop {
      display: none;
    }

    .filters--mobile {
      display: inline-block;
    }
  }

  @media only screen and (min-width: 400px) {
    .filters--mobile select {
      transform: scale(0.875);
      padding: 8px;
      padding-right: 24px;
      max-width: none;
    }
  }

</style>
