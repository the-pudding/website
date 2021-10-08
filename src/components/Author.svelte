<script>
  import Story from "$components/Story.svelte";
  import HeroText from "$components/HeroText.svelte";
  import { descending } from "d3";

  export let stories;
  export let author;

  stories.sort((a, b) => descending(a.date, b.date));

  const { name, url, twitter } = author;
  const bio = author.bio || "is a contributor to The Pudding.";

  const getLinkHTML = () => {
    const t = twitter
      ? `You can follow them on <a href=${twitter} rel="external">Twitter</a>`
      : undefined;
    const u = url ? `out their <a href=${url} rel="external">website</a>` : undefined;

    if (t && u)
      return `
			${t} or check ${u}. 
		`;
    else if (t) return t;
    else if (u) return `Check ${u}.`;

    return undefined;
  };

  const link = getLinkHTML();
</script>

<section id="intro" class="column">
  <HeroText>
    <!-- <img src="/common/assets/authors/{id}.jpg" alt={author.name} /> -->
    <h1>{name}</h1>

    <p>
      <span class="sr-only">{name} </span>{@html bio}
      {#if link}{@html link}{/if}
    </p>
  </HeroText>
</section>

<section id="stories">
  <h2 class="column">Stories</h2>
  <ul>
    {#each stories as { tease, url, slug, date }}
      <li>
        <Story {tease} {url} {slug} />
      </li>
    {/each}
  </ul>
</section>

<style>
  #intro {
    padding: 4em 0;
  }

  h2 {
    text-transform: uppercase;
    transform: translate(0, 0.2em);
  }
</style>
