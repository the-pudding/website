<script>
  import HeroText from "$components/HeroText.svelte";
  let { copy } = $props();

  const { sections } = copy;
</script>

<div class="announcement"><p>{copy.announcement}</p></div>

<section id="intro" class="column-wide">
  <HeroText>
    <h1>{copy.title}</h1>
    <p>{@html copy.dek}</p>
  </HeroText>
</section>

{#each sections as { hed, id }}
  <section {id} class="column-regular">
    {#if hed}
      <h2 class="hed-dek">{hed}</h2>
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
 h1, h2 {
    font-family: var(--serif);
  }
  
  p, ul {
    font-family: var(--sans);
  }

  li {
    padding: 0.25rem 0;
  }

  .announcement {
    background-color: var(--color-gray-200);
    font-family: var(--sans);
    font-weight: 700;
    padding: 0.5rem 1rem;
    text-align: center;
  }
</style>
