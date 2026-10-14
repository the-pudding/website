<script>
  import { ascending, descending, groups } from "d3";
  import Project from "$components/studio/Project.svelte";

  let { projects } = $props();

  let selected = $state("");

  let categories = $derived(
    [...new Set([...projects.features, ...projects.others].map((d) => d.category))].sort(
      ascending
    )
  );

  let features = $derived(
    selected ? projects.features.filter((d) => d.category === selected) : projects.features
  );

  let others = $derived(
    groups(
      selected ? projects.others.filter((d) => d.category === selected) : projects.others,
      (d) => d.year
    ).sort((a, b) => descending(+a[0], +b[0]))
  );
</script>

<div class="filters">
  <label for="studio-category">Filter by</label>
  <select id="studio-category" bind:value={selected}>
    <option value="">All</option>
    {#each categories as category (category)}
      <option value={category}>{category}</option>
    {/each}
  </select>
</div>

{#if features.length}
  <section class="features">
    {#each features as d (d.title)}
      <Project {...d} />
    {/each}
  </section>
{/if}

{#if others.length}
  <section class="others">
    <h3>
      All {features.length ? "Other " : ""}Work{selected && !features.length ? ` (${selected}s)` : ""}
    </h3>
    {#each others as [year, group] (year)}
      <div class="year">
        <h4>{year}</h4>
        <ul>
          {#each group as { title, company, url } (url + title)}
            <li>
              <a href={url} target="_blank" rel="noreferrer">{title}</a> &mdash;
              <span class="company">{company}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>
{/if}

<style>
  section {
    margin-bottom: 64px;
  }

  .filters {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    padding: 0 32px;
  }

  label {
    font-family: var(--mono);
    font-size: var(--font-size-xsmall);
    text-transform: uppercase;
    color: var(--color-secondary-gray);
  }

  select {
    font-family: var(--mono);
    text-transform: uppercase;
    font-size: var(--14px);
    border: 1px solid var(--color-border);
    background-color: var(--color-input-bg);
    color: var(--color-fg);
    border-radius: 6px;
    padding: 8px;
    padding-right: 24px;
  }

  h3 {
    font-family: var(--sans);
    font-size: clamp(var(--22px), 2.5vw, var(--48px));
    text-transform: uppercase;
    margin: 64px 0 16px 0;
  }

  h4 {
    font-family: var(--mono);
    font-size: clamp(var(--14px), 1.25vw, var(--24px));
    color: var(--color-secondary-gray);
    letter-spacing: 0.05em;
    margin-top: 32px;
  }

  .others {
    padding: 0 32px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1em;
  }

  li a {
    color: var(--color-fg);
  }

  .company {
    color: var(--color-secondary-gray);
  }

  @media only screen and (max-width: 800px) {
    .filters,
    .others {
      padding: 0 16px;
    }

    li {
      font-size: var(--14px);
    }
  }
</style>
