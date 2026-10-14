<script>
  import { base } from "$app/paths";
  import inView from "$actions/inView.js";
  import arrowUpRight from "$svg/arrow-up-right.svg";

  let { company, title, description, url, urlText, media, alt, color } = $props();

  let mediaEl = $state();

  let video = $derived(media?.includes(".mp4"));
  let src = $derived(media ? `${base}/assets/studio/${media.replace(".png", ".jpg")}` : "");
</script>

<div
  class="project"
  style:--accent-color="var(--color-{color || 'gray'}-dark)"
  style:--accent-color-fg="var(--color-{color || 'gray'}-darkest)"
  use:inView
  onenter={() => video && mediaEl?.play()}
  onexit={() => video && mediaEl?.pause()}
>
  <div class="left">
    <hr />
    <div class="top">
      <p class="company">{company}</p>
      <h3 class="title">{title}</h3>
    </div>
    <hr />
    <div class="bottom">
      <p class="description">{@html description}</p>
      <div class="link">
        <a href={url} role="button">
          {urlText}
          <span class="icon">{@html arrowUpRight}</span>
        </a>
      </div>
    </div>
  </div>
  <div class="right">
    {#if media}
      <div class="media">
        {#if video}
          <video bind:this={mediaEl} playsinline muted loop {src}></video>
        {:else}
          <img {src} {alt} />
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  .project {
    display: flex;
    flex-wrap: wrap;
  }

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 32px;
    width: 40%;
  }

  .right {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .media {
    max-width: min(40em, 80%);
    margin: 64px 0;
    padding: 0 32px;
  }

  .media img,
  .media video {
    display: block;
    width: 100%;
    height: 100%;
    box-shadow:
      0 16px 16px 4px rgba(0, 0, 0, 0.25),
      0 8px 24px 12px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
  }

  .top {
    display: flex;
    flex-direction: column;
  }

  .bottom {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 32px;
  }

  .company {
    font-family: var(--mono);
    font-size: clamp(var(--14px), 1.25vw, var(--24px));
    text-transform: uppercase;
    color: var(--color-secondary-gray);
    letter-spacing: 0.05em;
    margin: 0;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .title {
    font-family: var(--sans);
    text-transform: uppercase;
    font-size: clamp(var(--32px), 3.5vw, var(--64px));
    line-height: 0.9;
    color: var(--accent-color-fg);
    margin: 0;
    padding-bottom: 16px;
  }

  @media screen and (prefers-color-scheme: dark) {
    .title {
      color: var(--accent-color);
    }
  }

  .description {
    line-height: 1.625;
    font-size: clamp(var(--16px), 1.25vw, var(--28px));
  }

  hr {
    border: none;
    border-top: 1px solid var(--studio-gray-light);
    width: 100%;
  }

  .link {
    display: inline-flex;
    align-items: center;
    margin-top: 32px;
  }

  .link a {
    display: inline-flex;
    align-items: center;
    font-family: var(--mono);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: var(--color-white);
    background: var(--accent-color-fg);
    padding: 12px;
  }

  .link a:hover {
    background: var(--accent-color);
  }

  .icon {
    display: block;
    width: 1.25em;
    margin-left: 8px;
  }

  @media only screen and (max-width: 800px) {
    .project {
      flex-direction: column;
    }

    .left,
    .right {
      width: 100%;
    }

    .left {
      margin: 16px 0;
      padding: 16px;
      padding-bottom: 0;
    }

    .title {
      font-size: clamp(var(--40px), 6vw, var(--64px));
    }

    .description {
      margin: 0;
    }

    .media {
      margin: 32px 0;
      max-width: min(40em, 100%);
    }

    .media img,
    .media video {
      box-shadow:
        0 8px 16px 4px rgba(0, 0, 0, 0.2),
        0 8px 16px 8px rgba(0, 0, 0, 0.2);
    }
  }
</style>
