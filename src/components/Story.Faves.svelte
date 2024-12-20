<script>
  import { base } from "$app/paths";
  import { getContext } from "svelte";
  import { shuffle } from "d3";
  const { stories, staff } = getContext("Home");

  let links = $state(undefined);
  let author = $state(undefined);

  $effect(() => {
    const numStories = 3;
    const faveStories = stories.filter((d) => d.faves);
    const randomId = shuffle(faveStories)[0].faves.trim();
    const randomFaves = faveStories.filter((d) => d.faves === randomId).slice(0, numStories);

    author = staff.find((d) => d.id === randomId);

    const urls = randomFaves
      .map(({ href, short }) => `<a href=${href} rel="external" class="bold-link">${short}</a>`)
      .join(", ");
    links = urls.replace(/,([^,]*)$/, " and$1");
  });
</script>

<div class="interstitial-inner">
  {#if links}
    <p>Some of my favorite projects: {@html links}.</p>
    <div class="credit">
      <a href="{base}/author/{author.slug}">
        <img src="{base}/common/assets/authors/{author.id}.jpg" alt="headshot of {author.name}" />
        <p class="name">{author.name}</p>
        <p class="title">Pudding Staff</p>
      </a>
    </div>
  {/if}
</div>

<style>
  .interstitial-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 36px;
    justify-content: center;
  }

  :global(.interstitial-inner .bold-link) {
    font-weight: var(--font-weight-bold);
    -webkit-font-smoothing: antialiased;
  }

  :global(.interstitial-inner .bold-link:hover) {
    color: var(--color-secondary-gray);
    text-decoration: underline 2px var(--color-secondary-gray);
  }

  p {
    margin: 0;
    width: 100%;
    font-family: var(--sans);
    text-align: center;
    line-height: 1.2;
    color: var(--color-fg);
    font-size: var(--font-size-medium);
    margin-bottom: 32px;
  }

  .credit a {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none !important;
  }

  img {
    width: 80px;
    aspect-ratio: 1;
    transition: transform calc(var(--1s) * 0.25);
  }

  .credit a:hover img {
    transform: rotate(var(--left-tilt)) scale(1.05);
  }

  .credit .name {
    color: var(--color-fg);
    font-size: var(--font-size-small);
    font-family: var(--mono);
    text-transform: uppercase;
    text-decoration: underline 2px var(--color-fg);
    padding: 8px 0 4px 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  .credit .title {
    font-size: var(--font-size-xsmall);
    color: var(--color-secondary-gray);
    padding: 0;
    margin: 0;
  }

  a:hover {
    color: var(--color-secondary-gray);
  }
  .credit a:hover .name {
    color: var(--color-secondary-gray);
    text-decoration: underline 2px var(--color-secondary-gray);
  }
</style>
