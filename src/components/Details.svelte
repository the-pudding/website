<script>
  let { summary, text, list } = $props();
</script>

<details>
  <summary>{@html summary}</summary>
  <div class="inner">
    {#if text && typeof text === "string"}
      <p>{@html text}</p>
    {:else if text}
      {#each text as { value }}
        <p>{@html value}</p>
      {/each}
    {/if}

    {#if list}
      <ul>
        {#each list as value}
          <li>
            {#if value.lead}<strong>{@html value.lead}</strong>{/if}
            {@html value.description || value}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</details>

<style>
  summary {
    color: var(--color-off-black);
    padding-bottom: 0.75rem;
    font-size: max(16px,var(--font-size-small));
    cursor: pointer;
    transition: transform calc(var(--1s) * 0.25);
  }

  summary:hover {
    transform: translateX(4px)
  }

  details {
    font-size: var(--font-size-small);
    font-family: var(--sans);
    font-weight: var(--font-weight-bold);
    padding: 1em 0 0 0;
    border-bottom: 1px solid var(--color-border);
  }

  .inner {
    padding: 1em;
    font-family: var(--serif);
    font-weight: var(--font-weight-normal);
  }

  details ul {
    width: 100%;
  }

  :global(details a:hover) {
    color: var(--color-link-hover);
    text-decoration: underline 2px var(--color-link-hover);
  }

  li {
    padding-bottom: 1rem;
  }
</style>
