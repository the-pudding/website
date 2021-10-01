<script>
  export let copy;

  const { sections } = copy;
  const lists = ["principles", "send"];
</script>

<h1>{copy.title}</h1>

{#each sections as { hed, id }}
  <section {id}>
    {#if hed}
      <h2>{hed}</h2>
    {/if}

    {#each copy[id] as { value }}
      <p>{@html value}</p>
    {/each}

    {#if lists.includes(id)}
      <ul>
        {#each copy[`${id}List`] as { lead, description }}
          <li><strong>{@html lead}</strong> {@html description}</li>
        {/each}
      </ul>
    {/if}
  </section>
{/each}
