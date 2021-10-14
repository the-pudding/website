<script>
  import colors from "$data/thumbnail-colors.json";
  export let collapse;
  export let url;
  export let slug;
  export let tease;

  const DEFAULT_COLOR = "hsl(0, 0%, 80%)";

  const lookupColor = ({ slug, version }) => {
    if (collapse) return DEFAULT_COLOR;

    const match = colors.find((d) => d.slug === slug);
    return match ? match[version] : DEFAULT_COLOR;
  };
</script>

<div
  class="story"
  class:is-collapsed={collapse}
  style="--light: {lookupColor({
    slug,
    version: 'light'
  })}; --dark: {lookupColor({
    slug,
    version: 'dark'
  })};"
>
  <a class="column-wide" href="https://pudding.cool/{url}" rel="external">
    <img
      src="/common/assets/thumbnails/32/{slug}.jpg"
      alt="thumbnail for story"
      srcset="/common/assets/thumbnails/1280/{slug}.jpg 1280w,
			/common/assets/thumbnails/640/{slug}.jpg 640w,
			/common/assets/thumbnails/480/{slug}.jpg 480w"
      sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
      loading="lazy"
    />
    <h3 class="tease">
      <span>{@html tease}</span>
    </h3>
  </a>
</div>

<style>
  .story {
    background: var(--light);
    margin-bottom: 0.25rem;
  }

  .story a {
    background: none;
    display: flex;
    padding: 4rem 0;
    align-items: flex-start;
  }

  .story a .tease span {
    color: var(--color-body);
  }

  .story a:hover .tease span,
  .story a:hover .tease span {
    background-image: linear-gradient(var(--dark), var(--dark));
    background-size: 100% 0.1em;
    background-position: 0 90%;
    background-repeat: no-repeat;
  }

  .story.is-collapsed img {
    width: 20%;
    filter: grayscale(1);
  }

  img {
    max-width: 640px;
    width: 40%;
    border: 1px solid var(--dark);
  }

  .tease {
    margin: 0;
    padding: 0 1em;
    flex-grow: 1;
    color: currentColor;
    font-weight: var(--font-weight-normal);
  }

  .story a img {
    transition: transform var(--transition-medium) var(--transition-ease);
  }

  .story a:hover img {
    transform: scale(1.05, 1.05);
  }
</style>
