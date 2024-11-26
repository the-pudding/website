<script>
  import { base } from "$app/paths";
  import { getContext } from "svelte";
  import { shuffle } from "d3";
  const { stories, staff } = getContext("Home");

  const numStories = 3;
  const faveStories = stories.filter((d) => d.faves);
  const randomId = shuffle(faveStories)[0].faves.trim();
  const author = staff.find((d) => d.id === randomId);
  const randomFaves = faveStories.filter((d) => d.faves === randomId).slice(0, numStories);

  const urls = randomFaves
    .map(({ href, short }) => `<a href=${href} rel="external">${short}</a>`)
    .join(", ");
  // replace last ", " with ", and "
  const links = urls.replace(/,([^,]*)$/, " and$1");
</script>

<div class="interstitial-inner">
  <img class="icon" src="{base}/assets/stickers/our_faves@2x.png" alt="heart sticker" />
  <p>Some of my favorite projects are about {@html links}.</p>

  <div class="credit">
    <a href="{base}/author/{author.slug}">
      <img src="{base}/common/assets/authors/{author.id}.jpg" alt="headshot of {author.name}" />
      <p class="name">{author.name}</p>
      <p class="title">Pudding Staff</p>
    </a>
  </div>
</div>

<style>
  .interstitial-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 36px 36px 36px;
  }

  p {
    margin: 0;
    font-family: var(--sans);
    text-align: center;
    line-height: 1.2;
    max-width: 260px;
    color: var(--color-fg);
    font-size: var(--24px, 24px);
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
    width: 60px;
    aspect-ratio: 1;
  }

  .credit .name {
    color: var(--color-fg);
    font-size: var(--font-size-small);
    font-family: var(--mono);
    text-transform: uppercase;
    text-decoration: underline 2px var(--color-fg);
    padding: 8px 0;
    margin: 0;
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
