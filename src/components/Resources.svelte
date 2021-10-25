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

<nav>
  <ul class="column-wide">
    {#each sections as { hed, id }}
      <li>
        <a href="#{id}">{hed}</a>
      </li>
    {/each}
    <li>
      <a href="#faq">FAQ</a>
    </li>
  </ul>
</nav>

{#each sections as { hed, id }}
  <section {id}>
    <h2 class="upper column-wide">{hed}</h2>
    <ul>
      {#each data.filter((d) => d.category === id) as { url, slug, title, description }}
        <li>
          <Link {id} {url} {slug} {title} {description} />
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

  h2 {
    transform: translate(0, 0.2em);
  }

  nav {
    background: var(--background-body);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--z-top);
    padding: 1em 0;
    margin-bottom: 4rem;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  nav li {
    margin: 0;
    margin-right: 1em;
    list-style-type: none;
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
  }

  /* TODO too custom */
  :global(#faq details:nth-of-type(2) p) {
    margin: 0;
    padding: 0;
  }

  :global(#faq details:nth-of-type(2) p::before) {
    content: "•";
    padding-right: 0.75rem;
  }

  :global(#faq details:nth-of-type(2) p:nth-of-type(1)) {
    padding: 1rem 0 0 0;
  }
</style>
