<script>
  import { ascending } from "d3";
  import HeroText from "$components/HeroText.svelte";
  import Details from "$components/Details.svelte";
  import Team from "$components/About.Team.svelte";
  import Awards from "$components/About.Awards.svelte";

  export let copy;
  export let staff;

  const { sections } = copy;
</script>

<section id="intro" class="column-wide">
  <HeroText>
    <h1>{copy.title}</h1>
    <p>{@html copy.dek}</p>
  </HeroText>
</section>

{#each sections as { id, hed }}
  <section {id} class="column-regular below">
    {#if hed}
      <h2>{hed}</h2>
    {/if}

    {#if Array.isArray(copy[id])}
      {#each copy[id] as { value }}
        <p>{@html value}</p>
      {/each}
    {/if}

    {#if copy[id] && copy[id].text}
      {#each copy[id].text as { value }}
        <p>{@html value}</p>
      {/each}
    {/if}

    <!-- special cases -->
    {#if id === "awards"}
      <Awards />
    {/if}

    {#if id === "team"}
      <Team {staff} />
    {/if}

    {#if copy[id] && copy[id].detailsSummary}
      <Details
        summary={copy[id].detailsSummary}
        text={copy[id].detailsText}
        list={copy[id].detailsList}
      />
    {/if}
  </section>
{/each}

<style>
  h2 {
    margin-top: 2em;
  }
</style>
