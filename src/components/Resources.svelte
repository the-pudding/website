<script>
  import HeroText from "$components/HeroText.svelte";
  import Link from "$components/Resources.Link.svelte";
  import data from "$data/resources.csv";
  import wordmark from "$svg/wordmark.svg";

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
  <section {id}>
    <h2 class="column-wide upper">{hed}</h2>
    <ul>
      {#each data.filter((d) => d.category === id) as { url, slug, title, description }}
        <li>
          <Link {url} {slug} {title} {description} />
        </li>
      {/each}
    </ul>
  </section>
{/each}

<section id="faq">
  <h2 class="column-wide upper">FAQ</h2>
  {#each copy.faq as { question, answer }}
    <details class="column-regular">
      <summary>{question}</summary>
      {#if Array.isArray(answer)}
        <ul>
          {#each answer as { lib }}
            <li class="libs">{@html lib}</li>
          {/each}
        </ul>
      {:else}
        <p>{@html answer}</p>
      {/if}
    </details>
  {/each}
</section>

<style>
  section {
    margin-bottom: 4em;
  }

  li:hover {
    outline: 0.25rem solid var(--color-off-black);
  }

  details li:hover {
    outline: none;
  }
</style>
