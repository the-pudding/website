<script>
  export let summary;
  export let text;
  export let list;
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
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.75rem;
    font-size: var(--font-size-small);
    cursor: pointer;
  }

  details {
    font-size: var(--font-size-small);
    padding: 1em 0;
  }

  .inner {
    padding: 1em;
  }

  details ul {
    width: 100%;
  }

  li {
    padding-bottom: 1rem;
  }
</style>
