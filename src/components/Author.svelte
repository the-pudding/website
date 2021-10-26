<script>
  import Story from "$components/Story.svelte";
  import HeroText from "$components/HeroText.svelte";
  import { descending } from "d3";
  import numberAsText from "$utils/numberAsText.js";

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
  const count = numberAsText(stories.length);
  const suffix = stories.length === 1 ? "y" : "ies";
  const published = `They have worked on ${count} stor${suffix} to date. Explore them all below.`;
</script>

<section id="intro" class="column-wide">
  <HeroText>
    <!-- <img src="/common/assets/authors/{id}.jpg" alt={author.name} /> -->
    <h1>{name}</h1>

    <p>
      <span class="sr-only">{name} </span>{@html bio}
      {#if link}{@html link}{/if}
      {#if stories.length}{published}{/if}
    </p>
  </HeroText>
</section>
{#if stories.length}
  <section id="stories">
    <h2 class="column-wide upper">Stories</h2>
    <ul>
      {#each stories as { tease, url, slug, month }}
        <li>
          <Story {tease} {url} {slug} {month} />
        </li>
      {/each}
    </ul>
  </section>
{/if}

<style>
  li {
    margin: 0;
  }
</style>
