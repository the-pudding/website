<script>
  import HeroText from "$components/HeroText.svelte";
  let { copy } = $props();

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
      <h2>{hed}</h2>
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
