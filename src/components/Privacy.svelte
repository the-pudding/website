<script>
  export let copy;

  const { sections } = copy;
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

    {#if copy[`${id}List`]}
      <ul>
        {#each copy[`${id}List`] as value}
          <li>{@html value}</li>
        {/each}
      </ul>
    {/if}
  </section>
{/each}
