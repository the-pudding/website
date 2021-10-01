<script>
  export let copy;

  const { sections } = copy;
</script>

<h1>{copy.title}</h1>

{#each sections as { hed, id }}
  <section {id}>
    <h2>{hed}</h2>
    {#if id === "awards"}
      <p>awards</p>
    {:else if id === "team"}
      <p>team</p>
    {:else}
      {#each copy[id] as { value }}
        <p>{@html value}</p>
      {/each}
    {/if}
  </section>
{/each}
