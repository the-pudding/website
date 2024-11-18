<script>
  import colors from "$data/thumbnail-colors.json";
  let { id, href, slug, short, tease, month } = $props();

  const DEFAULT_COLOR = {
    primary: "rgb(239,239,239)"
  };

  const lookupColor = (version) => {
    const match = colors.find((d) => d.slug === slug);
    return match ? match[version] : DEFAULT_COLOR;
  };

  const style = `
	--primary: ${lookupColor("primary")};
	--secondary: ${lookupColor("secondary")};
	--tertiary: ${lookupColor("tertiary")};
	--default-primary: ${DEFAULT_COLOR["primary"]};
	--default-secondary: ${DEFAULT_COLOR["primary"]};
	--default-tertiary: ${DEFAULT_COLOR["primary"]};
  `;

  const youtube = href.includes("youtube") || href.includes("youtu.be");
</script>

<div class="story" {style} class:youtube>
  <div class="info">
    <p class="id">#{id}</p>
    <p class="month">{month}</p>
  </div>
  <a {href} rel="external" target="_blank" class="inner">
    <div class="screenshot">
      <img
        src="/common/assets/thumbnails/test/{slug}.jpg"
        alt="thumbnail for story"
        srcset="/common/assets/thumbnails/test/{slug}.jpg 1280w,
			/common/assets/thumbnails/test/{slug}.jpg 960w,
			/common/assets/thumbnails/test/{slug}.jpg 640w"
        sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
        loading="lazy"
      />
    </div>
    <div class="text">
      <h3 class="short">
        <strong>{@html short}</strong>
      </h3>
      <p class="tease">
        {@html tease}
      </p>
    </div>
  </a>
</div>

<style>
  .info {
    display: flex;
    justify-content: space-between;
    font-family: var(--mono);
    margin-bottom: 8px;
    align-items: center;
    user-select: none;
    transition: transform calc(var(--1s) * 0.25);
  }

  .id {
    border: 1px solid var(--color-fg);
    width: 4em;
    text-align: center;
    padding: 4px;
    border-radius: 2em;
  }

  .info p {
    font-size: var(--14px);
    text-transform: uppercase;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .story:hover .info {
    transform: translateY(-4px);
  }

  .story:not(.youtube):hover .screenshot img {
    transform: translate(-50%, 0) scale(1.05);
  }

  .youtube:hover .screenshot img {
    transform: translate(-50%, 50%) scale(1.05);
  }

  .screenshot {
    background: var(--primary, var(--color-gray-100));
    /* background: var(--color-gray-1000); */
    /* background: var(--secondary, var(--color-gray-100)); */
    /* background: var(--tertiary, var(--color-gray-100)); */
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;
  }

  img {
    position: absolute;
    /* top: var(--padding); */
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0) scale(1);
    width: calc(100% - (var(--padding) * 2));
    transform-origin: center center;
    transition: transform calc(var(--1s) * 0.25);
    /* border: 1px solid var(--color-fg); */
  }

  .youtube img {
    bottom: 50%;
    transform: translate(-50%, 50%);
    transform-origin: center center;
  }

  .text {
    font-family: var(--sans);
    margin-top: 8px;
  }

  h3.short {
    color: var(--color-gray-900);
    font-size: var(--28px);
    line-height: 1;
    margin: 0;
    margin-bottom: 8px;
  }

  p.tease {
    color: var(--color-gray-600);
    font-size: var(--16px);
  }

  @media only screen and (min-width: 1250px) {
    h3.short {
      font-size: var(--36px);
    }
  }
</style>
