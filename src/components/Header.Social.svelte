<script>
  import Icon from "$components/helpers/Icon.svelte";
  import { follow } from "$data/links.js";

  import tiktokLogo from "$svg/tiktok.svg";
  import mastodonLogo from "$svg/mastodon.svg";

  const names = [
    "Twitter",
    "Facebook",
    "Instagram"
    //"TikTok", "Mastodon"
  ];
  const platforms = follow.filter((d) => names.includes(d.name));
  const ctas = follow.filter((d) => d.cta);
</script>

<div class="container">
  <div class="platforms">
    {#each platforms as { name, url }}
      <!-- {#if name == "TikTok"}
        <a class="solid" href={url} aria-label={name}>
          <div><div class="round-svg">{@html tiktokLogo}</div></div>
        </a>
      {:else if name == "Mastodon"}
        <a class="solid" href={url} aria-label={name}>
          <div><div class="round-svg">{@html mastodonLogo}</div></div>
        </a>
      {:else} -->
      <a class={name === "Instagram" ? "stroke" : "solid"} href={url} aria-label={name}
        ><Icon name={name.toLowerCase()} /></a
      >
      <!-- {/if} -->
    {/each}
  </div>

  <div class="cta">
    {#each ctas as { cta, url }}
      <a class="btn" href={url} rel="external">{cta}</a>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    display: inline-block;
    line-height: 1;
    margin: 0 0.5em;
    background-image: none;
    font-size: var(--font-size-small);
  }

  .round-svg {
    margin-top: 0.125rem;
  }

  :global(a.solid svg, .round-svg svg) {
    fill: var(--color-off-black);
    stroke: none;
  }

  :global(.solid svg:hover, .round-svg svg:hover) {
    fill: var(--color-accent);
  }

  :global(a.stroke svg:hover) {
    stroke: var(--color-accent);
  }

  .platforms {
    line-height: 1;
    margin-right: 1em;
  }

  a:focus {
    box-shadow: 0 0 0 2px var(--color-focus);
  }
</style>
