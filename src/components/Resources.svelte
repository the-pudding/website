<script>
  import { browser } from "$app/environment";
  import HeroText from "$components/HeroText.svelte";
  import Details from "$components/Details.svelte";
  import Stories from "$components/Stories.svelte";
  import Filters from "$components/Filters.svelte";
  import data from "$data/resources.csv";
  import inView from "$actions/inView.js";

  let { copy } = $props();
  let filtersComponent = $state();

  const { sections } = copy;
  const filters = [
    "How-To Blogs",
    "Live Coding",
    "Presentations",
    "Podcasts",
    "Pudding Cup",
    "FAQ"
  ];

  // id, href, slug, short, tease, month
  const stories = data.map((d) => ({
    ...d,
    href: d.url,
    short: d.title,
    tease: d.description
  }));
  let activeFilter = $state(undefined);

  function slugify(str) {
    return str.toLowerCase()?.replace(/[^a-z]/g, "_");
  }

  $effect(() => {
    // jump to anchor link when activeFilter changes
    if (browser && activeFilter) {
      const el = document.getElementById(activeFilter);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  });
</script>

<section id="intro" class="column-wide">
  <HeroText>
    <h1>{copy.title}</h1>
    <p>{@html copy.dek}</p>
  </HeroText>
</section>

<div class="c">
  <div class="ui column-wide">
    <div class="filters">
      <Filters {filters} bind:activeFilter resource={true} bind:this={filtersComponent}></Filters>
    </div>
  </div>
  {#each sections as { hed }}
    {@const id = slugify(hed)}
    <section {id} use:inView onenter={() => filtersComponent.set(id)}>
      <!-- <h2 class="upper column-wide">{hed}</h2> -->
      <Stories stories={stories.filter((d) => slugify(d.group) === id)} resource={true} />
    </section>
  {/each}

  <section id="faq" class="column-regular">
    <h2 class="upper">FAQ</h2>
    {#each copy.faq as { question, answer }}
      <Details summary={question} text={answer} />
    {/each}
  </section>
</div>

<style>
  section {
    margin-bottom: 4em;
  }

  .ui {
    position: sticky;
    top: 0;
    left: 0;
    z-index: var(--z-overlay);
    background: var(--color-bg);
    padding: 16px;
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
