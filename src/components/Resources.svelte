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
  {#each sections as { hed, id }}
  <div>
    <a href="#{id}">{hed}</a>
  </div>
  {/each}
  <div>
    <a href="#faq">FAQ</a>
  </div>
</nav>

{#each sections as { hed, id }}
  <section {id}>
    <h2 class="upper column-wide">{hed}</h2>
    <ul>
      {#each data.filter((d) => d.category === id) as { url, slug, title, description }}
        <li class="no-padding-li">
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

  nav {
    background: var(--background-body);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--z-top);
    padding: 1em 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    box-shadow: 0 4px 4px var(--color-off-white);
    margin-bottom: 4rem;
  }

  nav div {
    width: calc(33.33% - 1rem);
    margin: 0 0.5rem;
    text-align: center;
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
  }

  nav div:nth-of-type(4n), nav div:nth-of-type(5n), nav div:nth-of-type(6n) {
    margin-top: 1rem;
  }
</style>
