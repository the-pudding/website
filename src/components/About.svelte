<script>
  export let copy;

  const { sections } = copy;
</script>

<h1>{copy.title}</h1>

{#each sections as { id, hed }}
  <section {id}>
    {#if hed}
      <h2>{hed}</h2>
    {/if}

    {#if id === "awards"}
      <p>awards</p>
    {:else if id === "team"}
      <p>team</p>
    {:else}
      {#each copy[id] as { value }}
        <p>{@html value}</p>
      {/each}
    {/if}

    {#if id === "bio"}
      <details>
        <summary>Read more about why and how we exist</summary>
        {#each copy.bioMore as { value }}
          <p>{@html value}</p>
        {/each}
      </details>
    {/if}
  </section>
{/each}
