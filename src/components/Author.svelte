<script>
  import { descending } from "d3";
  import Stories from "$components/Stories.svelte";
  import HeroText from "$components/HeroText.svelte";
  import numberAsText from "$utils/numberAsText.js";

  let { author, stories } = $props();

  stories.sort((a, b) => descending(a.date, b.date));

  const { name, email, url, social, pronoun, position } = author;
  const bio = author.bio || "is a contributor to The Pudding.";

  const pronounA = pronoun === "They" ? "them" : pronoun === "He" ? "him" : "her";
  const pronounB = pronoun === "They" ? "their" : pronoun === "He" ? "his" : "her";
  const getLinkHTML = () => {
    const t = social
      ? `You can follow ${pronounA} on <a href="${social}">the socials</a>`
      : undefined;
    const u = url ? `out ${pronounB} <a href="${url}">website</a>` : undefined;

    if (t && u)
      return `
			${t} or check ${u}. 
		`;
    else if (t) return `${t}.`;
    else if (u) return `Check ${u}.`;

    return undefined;
  };

  const link = getLinkHTML();
  const count = numberAsText(stories.length);
  const suffix = stories.length === 1 ? "y" : "ies";
  const has = pronoun === "They" ? "have" : "has";
  const explore = count === 1 ? "it" : "them all";
  const published = `${pronoun} ${has} worked on ${count} stor${suffix} to date. Explore ${explore} below.`;
  const first = name.split(" ")[0].toLowerCase();
</script>

<section id="intro" class="column-wide">
  <HeroText>
    <h1>{name}</h1>

    <p>
      <span class="sr-only">{name} </span>{@html bio}
      {#if link}{@html link}{/if}
      {#if stories.length}{published}{/if}
    </p>

    {#if position === "Staff" && email}
      <p>Get in touch: <a href="mailto:{email}">{first}@pudding.cool</a></p>
    {/if}
  </HeroText>
</section>

{#if stories.length}
  <div class="column-regular">
    <h2 class="hed-dek">Stories</h2>
  </div>

  <Stories {stories} />
{/if}
