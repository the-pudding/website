<script>
  import Story from "$components/Story.svelte";
  import HeroText from "$components/HeroText.svelte";
  import { descending } from "d3";
  import numberAsText from "$utils/numberAsText.js";

  export let stories;
  export let author;

  stories.sort((a, b) => descending(a.date, b.date));

  const { name, url, twitter, pronoun } = author;
  const bio = author.bio || "is a contributor to The Pudding.";

  const pronounA = pronoun === "They" ? "them" : pronoun === "He" ? "him" : "her";
  const pronounB = pronoun === "They" ? "their" : pronoun === "He" ? "his" : "her";
  const getLinkHTML = () => {
    const t = twitter
      ? `You can follow ${pronounA} on <a href="https://twitter.com/${twitter}">Twitter</a>`
      : undefined;
    const u = url ? `out ${pronounB} <a href="${url}">website</a>` : undefined;

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
  const has = pronoun === "They" ? "have" : "has";
  const published = `${pronoun} ${has} worked on ${count} stor${suffix} to date. Explore them all below.`;
</script>

<section id="intro" class="column-wide">
  <HeroText>
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
