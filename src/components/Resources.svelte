<script>
  import HeroText from "$components/HeroText.svelte";
  import Link from "$components/Resources.Link.svelte";
  import data from "$data/resources.csv";
  import wordmark from "$svg/wordmark.svg";

  export let copy;

  const { sections } = copy;
</script>

<section id="intro" class="column">
  <HeroText>
    <h1>The Pudding</h1>
    <p>{copy.dek}</p>
  </HeroText>
</section>

{#each sections as { hed, id }}
  <section {id}>
    <h2 class="column">{hed}</h2>
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
  <h2 class="column">FAQ</h2>
  {#each copy.faq as { question, answer }}
    <details class="column">
      <summary>{question}</summary>
      {@html answer}
    </details>
  {/each}
</section>

<style>
  #intro {
    padding: 4em 0;
  }

  h2 {
    text-transform: uppercase;
    transform: translate(0, 0.2em);
  }

  section {
    margin-bottom: 4em;
  }
</style>
