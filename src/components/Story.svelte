<script>
  import colors from "$data/thumbnail-colors.json";
  import playSvg from "$svg/play.svg";
  let { id, href, slug, short, tease, month, color_override, resource, footer } = $props();

  const DEFAULT_COLOR = "rgb(239,239,239)";

  function lookupColor() {
    if (color_override) return color_override;
    const match = colors.find((d) => d.slug === slug);
    return match ? match.bg : DEFAULT_COLOR;
  }

  const style = `
	--bg: ${lookupColor()};
	--default-bg: ${DEFAULT_COLOR};
  `;

  const youtube = href.includes("youtube") || href.includes("youtu.be");
  const dir = resource ? "resources/480" : "thumbnails/screenshots";
  const imagePath = `/common/assets/${dir}`;
</script>

<div class="story" {style} class:youtube class:resource class:footer>
  {#if !resource && !footer}
    <div class="info">
      <p class="id">#{id}</p>
      <p class="month">{month}</p>
    </div>
  {/if}
  <a {href} rel="external" target="_blank" class="inner">
    <div class="screenshot">
      <img src="{imagePath}/{slug}.jpg" loading="lazy" alt="thumbnail for story" />
      {#if youtube}
        <span class="icon--play">{@html playSvg}</span>
      {/if}
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

  .story:not(.youtube):hover .screenshot img,
  .story:not(.resource):hover .screenshot img {
    transform: translate(-50%, 0) scale(1.05);
  }

  .story.youtube:hover .screenshot img,
  .story.resource:hover .screenshot img {
    transform: translate(-50%, 50%) scale(1.05);
  }

  .screenshot {
    background: var(--bg, var(--color-gray-100));
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;
  }

  span.icon--play {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4em;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: var(--z-top);
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

  .youtube img,
  .resource img {
    bottom: 50%;
    transform: translate(-50%, 50%);
    transform-origin: center center;
  }

  .text {
    font-family: var(--sans);
    margin-top: 12px;
  }

  h3.short {
    color: var(--color-gray-900);
    font-size: clamp(var(--24px), 6vw, var(--28px));
    line-height: 1;
    margin: 0;
    margin-bottom: 8px;
  }

  p.tease {
    color: var(--color-gray-600);
    font-size: var(--16px);
  }

  @media (min-width: 960px) {
    h3.short {
      font-size: clamp(var(--24px), 2.75vw, var(--32px));
    }
  }
</style>
