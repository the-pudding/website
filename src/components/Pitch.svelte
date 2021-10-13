<script>
  import HeroText from "$components/HeroText.svelte";
  export let copy;

  const { sections } = copy;
</script>

<section id="intro" class="column-wide">
  <HeroText>
    <h1>{copy.title}</h1>
    <p>{@html copy.dek}</p>
  </HeroText>
</section>

{#each sections as { hed, id }}
  <section {id} class="column-regular">
    {#if hed}
      <h3>{hed}</h3>
    {/if}

    {#if copy[id]}
      {#each copy[id] as { value }}
        <p>{@html value}</p>
      {/each}
    {/if}

    {#if copy[`${id}List`]}
      <ul>
        {#each copy[`${id}List`] as { lead, description }}
          <li><strong>{@html lead}</strong> {@html description}</li>
        {/each}
      </ul>
    {/if}
  </section>
{/each}

<style>
  section:not(#intro) {
    padding-bottom: 4rem;
  }
</style>
