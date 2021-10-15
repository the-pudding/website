<script>
  import HeroText from "$components/HeroText.svelte";
  import Link from "$components/Resources.Link.svelte";
  import Details from "$components/Details.svelte";
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
    <h2 class="upper column-wide">{hed}</h2>
    <ul>
      {#each data.filter((d) => d.category === id) as { url, slug, title, description }}
        <li>
          <Link {url} {slug} {title} {description} />
        </li>
      {/each}
    </ul>
  </section>
{/each}

<section id="faq" class="column-regular">
  <h2 class="upper">FAQ</h2>
  {#each copy.faq as { question, answer }}
    <Details summary={question} text={answer} />
  {/each}
</section>

<style>
  section {
    margin-bottom: 4em;
  }
</style>
