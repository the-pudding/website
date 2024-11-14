<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { shuffle } from "d3";
  import wordmark from "$svg/wordmark-sticker.svg";
  import linkOutArrow from "$svg/arrow-up-right.svg";

  let localURL;
  let storiesRecent = $state([]);
  let storiesTopics = $state([]);
  let storyCount = $state(0);

  let { topics = false, recent = false } = $props();

  const v = Date.now();
  const url = `https://pudding.cool/assets/data/stories.json?v=${v}`;

  const about = [
    { name: "Our Team", url: "https://pudding.cool/about" },
    { name: "Our Resources", url: "https://pudding.cool/resources/" },
    { name: "Pitch a Story", url: "https://pudding.cool/pitch/" },
    { name: "Brand Partnerships", url: "https://polygraph.cool" },
    { name: "Privacy", url: "https://pudding.cool/pitch/" }
  ];

  const follow = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/the.pudding"
    },
    { name: "Twitter/X", url: "https://twitter.com/puddingviz/" },
    { name: "TikTok", url: "https://www.tiktok.com/@the_pudding" },
    { name: "YouTube", url: "https://www.youtube.com/@thepudding" },
    { name: "RSS", url: "https://pudding.cool/feed/index.xml" }
  ];

  onMount(async () => {
    localURL = window.location.href;

    if (topics || recent) {
      const response = await fetch(url);
      const data = await response.json();

      const filtered = data.filter((d) => !localURL.includes(d.url));

      storyCount = data.length;
      storiesRecent = recent ? filtered.slice(0, 4) : [];
      storiesTopics = topics ? shuffle(filtered.filter((d) => d.short)).slice(0, 3) : [];
    }
  });
</script>

<footer>
  <div class="c">
    <div class="top">
      {#if storiesTopics.length}
        <section class="topics">
          We’ve published <strong>{storyCount}</strong> awesome stories on topics such as
          {#each storiesTopics as { short, url }, i}
            <a href={url} target="_blank" rel="noreferrer">{short}</a>,&nbsp;
          {/each}and more.
        </section>
      {/if}

      <!-- {#if storiesRecent.length}
        <section class="recent">
          <div
            class="stories-wrapper"
            style="min-width: {storiesRecent.length * (300 + 20) + 30}px;"
          >
            {#each storiesRecent as { date, bgColor, fgColor, tease, url, image }}
              {@const href = url.startsWith("http") ? url : `https://pudding.cool/${url}`}
              <div class="story">
                <a {href}>
                  <div class="story-img-wrapper">
                    <img
                      src="https://pudding.cool/common/assets/thumbnails/960/{image}.jpg"
                      alt="thumbnail"
                    />
                  </div>

                  <div class="story-desc" style="background-color:{bgColor}; color:{fgColor};">
                    <p class="story-hed">{tease}</p>
                    <p class="story-date">
                      {date.slice(0, 2)}/{date.slice(6, 10)}
                    </p>
                  </div>
                </a>
              </div>
            {/each}
          </div>
        </section>
      {/if} -->
    </div>
    <div class="bottom">
      <div class="cta-wrapper">
        <section class="donate">
          <div class="img-wrapper">
            <a href="https://patreon.com/thepudding">
              <img src="{base}/assets/stickers/donate-footer-square@2x.png" alt="donate sticker" />
            </a>
          </div>
          <div class="text-wrapper">
            <p>
              <a href="https://patreon.com/thepudding">Support us on Patreon</a>
              <span class="arrow">{@html linkOutArrow}</span>
            </p>
            <p>
              We pour our heart into these stories, but they take time and money. For just $2/month,
              you can help support us. Join our growing community of data-driven enthusiasts.
            </p>
          </div>
        </section>

        <section class="subscribe">
          <div class="img-wrapper">
            <a href="https://pudding.cool/subscribe">
              <img src="{base}/assets/stickers/subscribe-footer@2x.png" alt="donate sticker" />
            </a>
          </div>
          <div class="text-wrapper">
            <p>
              <a href="https://pudding.cool/subscribe">Subscribe to our newsletter</a>
              <span class="arrow">{@html linkOutArrow}</span>
            </p>
            <p>
              Get all our latest stories in your inbox. Plus get links to some of our favorite
              projects from around the web.
            </p>
          </div>
        </section>
      </div>

      <section class="links">
        <div class="img-wrapper">
          <span class="wordmark">{@html wordmark}</span>
        </div>
        <div class="inner">
          <div class="about">
            <p class="title">About Us</p>
            <ul>
              {#each about as { name, url }}
                <li><a href={url}>{name}</a></li>
              {/each}
            </ul>
          </div>

          <div class="follow">
            <p class="title">Follow Us</p>
            <ul>
              {#each follow as { name, url }}
                <li><a href={url}>{name}</a></li>
              {/each}
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</footer>

<style>
  footer {
    margin-top: 100px;
  }
  .c {
    max-width: calc(var(--width-column-wide) - var(--margin) * 2);
    padding: 16px;
    margin: 32px auto 100px auto;
    font-family: var(--sans);
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    gap: 48px;
  }

  .cta-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 48px;
  }

  .cta-wrapper section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }

  .links {
    width: 100%;
    min-width: 300px;
  }

  .links p.title {
    font-family: var(--mono);
    font-weight: bold;
    text-transform: uppercase;
    font-size: var(--font-size-xsmall, 14px);
  }

  .links .inner {
    display: flex;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  a {
    font-weight: 700;
  }

  a:hover {
    color: var(--color-link-hover);
    text-decoration: 2px underline var(--color-link-hover, blue);
  }

  a:hover + .arrow {
    left: -2px;
  }

  :global(a:hover + .arrow svg path) {
    stroke: var(--color-link-hover, blue);
  }

  ul {
    padding: 0;
  }

  .about,
  .follow {
    width: 50%;
  }

  li {
    list-style-type: none;
    font-size: var(--14px);
  }

  .text-wrapper {
    width: 100%;
  }

  .text-wrapper p {
    font-size: var(--14px);
  }

  .img-wrapper {
    width: 100%;
    max-width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links .img-wrapper {
    max-width: none;
    width: 100%;
    height: auto;
  }

  .donate img {
    transform: rotate(var(--right-tilt));
    width: 100%;
    max-width: 180px;
    transition: transform calc(var(--1s) * 0.25);
  }

  .donate .img-wrapper:hover img {
    transform: rotate(0) scale(1.05);
  }

  .subscribe img {
    width: 100%;
    max-width: 180px;
    transition: transform calc(var(--1s) * 0.25);
  }

  .subscribe .img-wrapper:hover img {
    transform: rotate(var(--left-tilt)) scale(1.05);
  }

  .wordmark {
    transform: rotate(var(--left-tilt));
    max-width: 360px;
    transition: transform calc(var(--1s) * 0.25);
  }

  .wordmark:hover {
    transform: rotate(0) scale(1.05);
  }

  .arrow {
    display: inline-block;
    width: 18px;
    height: 18px;
    position: relative;
    top: 4px;
    left: -4px;
    transition: left calc(var(--1s) * 0.25);
  }

  @media only screen and (min-width: 720px) {
    .bottom {
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      gap: 48px;
    }

    .cta-wrapper {
      width: 66.66%;
      flex-direction: column;
      gap: 48px;
    }

    .cta-wrapper section {
      width: 100%;
      flex-direction: row;
      gap: 24px;
    }

    .text-wrapper {
      width: 66.66%;
    }

    .text-wrapper p {
      font-size: var(--16px);
    }

    .img-wrapper {
      width: 33.33%;
      max-width: 160px;
      height: 160px;
      align-items: center;
      justify-content: center;
    }
    .links {
      width: 33.33%;
    }

    li {
      font-size: var(--16px);
    }

    .arrow {
      width: 24px;
      height: 24px;
      top: 6px;
      left: -4px;
    }
  }

  @media only screen and (min-width: 960px) {
    .cta-wrapper {
      width: 66.66%;
      flex-direction: row;
      gap: 48px;
    }

    .cta-wrapper section {
      width: 50%;
      flex-direction: column;
      gap: 0;
    }

    .text-wrapper {
      width: 100%;
    }

    .img-wrapper {
      max-width: none;
      width: 100%;
      height: 180px;
    }

    .links .img-wrapper {
      max-width: none;
      height: 180px;
    }

    .subscribe img {
      max-width: 200px;
    }
  }
</style>
