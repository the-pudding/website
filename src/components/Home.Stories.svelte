<script>
  import { getContext } from "svelte";
  import { ascending, descending } from "d3";
  import colors from "$data/thumbnail-colors.json";

  export const jump = () => {
    const { top } = sectionEl.getBoundingClientRect();
    const y = window.scrollY + top - 64;
    window.scrollTo(0, y);
  };

  export let highlight;

  const DEFAULT_COLOR = "hsl(0, 50%, 50%)";
  const { stories, copy } = getContext("Home");
  let sectionEl;

  stories.sort((a, b) => descending(a.date, b.date));

  let sortedStories = stories.map((d) => ({ ...d }));

  const lookupColor = ({ slug, version }) => {
    if (!highlight.includes(slug)) return DEFAULT_COLOR;

    const match = colors.find((d) => d.slug === slug);
    return match ? match[version] : DEFAULT_COLOR;
  };

  const reSort = () => {
    sortedStories.sort(
      (a, b) =>
        descending(highlight.indexOf(a.slug), highlight.indexOf(b.slug)) ||
        descending(a.date, b.date)
    );

    sortedStories = sortedStories;
  };

  $: highlight, reSort();
</script>

<section id="stories" bind:this={sectionEl}>
  <h2><strong>{copy.storiesHed}</strong></h2>
  <ul>
    {#each sortedStories as { tease, url, slug }}
      <li
        class="story"
        class:is-collapsed={!highlight.includes(slug)}
        style="--light: {lookupColor({
          slug,
          version: 'light'
        })}; --dark: {lookupColor({
          slug,
          version: 'dark'
        })};"
      >
        <a href="https://pudding.cool/{url}" rel="external">
          <img
            src="common/assets/thumbnails/32/{slug}.jpg"
            alt="teaser for story"
            srcset="common/assets/thumbnails/1280/{slug}.jpg 1280w,
						common/assets/thumbnails/640/{slug}.jpg 640w,
						common/assets/thumbnails/480/{slug}.jpg 480w"
            sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
            loading="lazy"
          />
          <h3 class="tease">
            <span>{@html tease}</span>
          </h3>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    padding-top: 4em;
  }

  h2 {
    font-size: clamp(1.5em, 4vw, 4em);
    text-transform: uppercase;
    max-width: 90%;
    margin: 0 auto;
    line-height: 1;
    transform: translate(0.2em, 0.2em);
  }

  .story {
    background: var(--light);
  }

  .story.is-collapsed {
  }

  .story.is-collapsed img {
    display: none;
  }

  .story a {
    display: flex;
    padding: 2em;
    text-decoration: none;
    font-size: 2vw;
    max-width: 1920px;
    margin: 0 auto;
    align-items: flex-start;
    text-decoration: none;
  }

  .story a .tease span {
    background-image: linear-gradient(var(--dark), var(--dark));
    background-repeat: no-repeat;
    background-position: 0 90%;
    background-size: 0% 0.1em;
  }

  .story a:hover .tease span,
  .story a:focus .tease span {
    background-size: 100% 0.1em;
  }

  img {
    max-width: 640px;
    width: 40%;
    padding: 0 1em;
  }

  .tease {
    margin: 0;
    padding: 0 1em;
    width: 60%;
    color: currentColor;
  }
</style>
