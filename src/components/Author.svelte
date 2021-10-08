<script>
  import Story from "$components/Story.svelte";
  import HeroText from "$components/HeroText.svelte";
  import { descending } from "d3";

  export let stories;
  export let author;

  stories.sort((a, b) => descending(a.date, b.date));

  const getLinkHTML = () => {
    const twitter = author.twitter
      ? `You can follow them on <a href=${author.twitter} rel="external">Twitter</a>`
      : undefined;
    const url = author.url
      ? `out their <a href=${author.url} rel="external">website</a>`
      : undefined;

    if (twitter && url)
      return `
			${twitter} or check ${url}. 
		`;
    else if (twitter) return twitter;
    else if (author) return `Check ${url}.`;

    return undefined;
  };

  const linkHTML = getLinkHTML();
</script>

<section id="intro" class="column">
  <HeroText>
    <!-- <img src="/common/assets/authors/{author.id}.jpg" alt={author.name} /> -->
    <h1>{author.name}</h1>

    <p>
      <span class="sr-only">{author.name} </span>{@html author.bio}
      {#if linkHTML}{@html linkHTML}{/if}
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
