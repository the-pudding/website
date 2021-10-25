<script>
  import colors from "$data/thumbnail-colors.json";
  export let collapse;
  export let url;
  export let slug;
  export let tease;
  export let month;

  const DEFAULT_COLOR = {
    light: "hsl(0, 0%, 80%)",
    dark: "hsl(0, 0%, 44%)",
    darker: "hsl(0, 0%, 34%)"
  };

  const lookupColor = ({ slug, version }) => {
    if (collapse) return DEFAULT_COLOR[version];

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
  })};  --darker: {lookupColor({
    slug,
    version: 'darker'
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
    <div class="info">
      <h3 class="tease">
        <span>{@html tease}</span>
      </h3>
      {#if month}
        <p>{month}</p>
      {/if}
    </div>
  </a>
</div>

<style>
  .story {
    background: var(--light);
    margin-bottom: 0.25rem;
  }

  a {
    background: none;
    display: flex;
    padding: 4rem 0;
    align-items: flex-start;
  }

  .tease span {
    color: var(--color-body);
    background-size: 100% 0.05em;
    background-position: 0 90%;
    background-repeat: no-repeat;
    background-image: linear-gradient(var(--dark), var(--dark));
    transition: all var(--transition-fast) var(--transition-ease);
    padding: 0 0.05em;
  }

  a:hover .tease span,
  a:hover .tease span {
    background-size: 100% 0.1em;
    background-image: linear-gradient(var(--darker), var(--darker));
  }

  .story.is-collapsed img {
    width: 20%;
    filter: grayscale(1);
  }

  img {
    max-width: 640px;
    width: 40%;
    border: 1px solid var(--darker);
    transition: transform var(--transition-fast) var(--transition-ease);
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .tease {
    margin: 0;
    padding: 0 1em;
    flex-grow: 1;
    color: currentColor;
    font-weight: var(--font-weight-normal);
  }

  .info p {
    padding: 0 1.5em;
    flex-grow: 1;
    color: var(--dark);
  }

  a:hover img {
    transform: scale(1.02);
  }

  @media (max-width: 540px) {
    a {
      flex-direction: column;
      padding: 4em 1em;
    }
    img {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 1em;
    }

    .story.is-collapsed img {
      width: 100%;
      filter: grayscale(1);
    }

    .tease {
      padding: 0;
    }

    .info p {
      padding: 0;
    }
  }
</style>
