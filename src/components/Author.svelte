<script>
  import Story from "$components/Story.svelte";
  export let stories;
  export let author;

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

<section id="info">
  <!-- <img src="/common/assets/authors/{author.id}.jpg" alt={author.name} /> -->
  <h1><strong>{author.name}</strong></h1>

  <p>
    <span class="sr-only">{author.name} </span>{@html author.bio}
    {#if linkHTML}{@html linkHTML}{/if}
  </p>
</section>

<section id="stories">
  <h2><strong>Stories</strong></h2>
  <ul>
    {#each stories as { tease, url, slug }}
      <li>
        <Story {tease} {url} {slug} />
      </li>
    {/each}
  </ul>
</section>
