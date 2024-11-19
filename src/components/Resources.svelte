<script>
  import HeroText from "$components/HeroText.svelte";
  import Link from "$components/Resources.Link.svelte";
  import Details from "$components/Details.svelte";
  import data from "$data/resources.csv";
  import Stories from "$components/Stories.svelte";

  let { copy } = $props();

  const { sections } = copy;

  // id, href, slug, short, tease, month
  const stories = data.map((d) => ({
    ...d,
    href: d.url,
    short: d.title,
    tease: d.description
  }));
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
    <Stories stories={stories.filter((d) => d.category === id)} resource={true} />
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

  li {
    margin: 0;
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

  /* TODO fix */
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
