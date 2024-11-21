<script>
  import { ascending } from "d3";
  import HeroText from "$components/HeroText.svelte";
  import Details from "$components/Details.svelte";
  import Team from "$components/About.Team.svelte";
  import Awards from "$components/About.Awards.svelte";

  let { copy, authors } = $props();

  const { sections } = copy;
  const staff = authors.filter((d) => d.position === "Staff");

  // hack to get contributors in details list form in copy
  const contributors = authors.filter((d) => d.position !== "Staff" && d.id !== "pudding");
  contributors.sort((a, b) => ascending(a.name, b.name));
  copy.contributors.detailsList = contributors.map(({ slug, name }) => {
    return `<a href="/author/${slug}">${name}</a>`;
  });
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
      <h2 class="hed-dek">{hed}</h2>
    {/if}

    {#if id === "awards"}
      <Awards />
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
  :global(#contributors ul) {
    display: flex;
    flex-wrap: wrap;
  }
  :global(#contributors li) {
    padding-bottom: 0;
    width: 33.3%;
  }

  :global(.hed-dek) {
    line-height: 1.2;
  }

  :global(.inner a, .column-regular a) {
    color: var(--color-fg);
    text-decoration: underline 2px var(--color-fg);
  }

  @media only screen and (max-width: 700px) {
    :global(#contributors li) {
      width: 50%;
    }
  }

  @media only screen and (max-width: 400px) {
    :global(#contributors li) {
      width: 100%;
    }
  }
</style>
