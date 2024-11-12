<script>
  import { onMount } from "svelte";
  import { shuffle } from "d3";
  import wordmark from "$svg/wordmark-sticker.svg";

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
      <section class="donate">
        <img src="assets/stickers/donate-footer@2x.png" alt="donate sticker" />
        <p><a href="https://patreon.com/thepudding">Support us on Patreon</a></p>
        <p>
          We pour our heart into these stories, but they take time and money. For just $2/month, you
          can help support us. Join our growing community of data-driven enthusiasts.
        </p>
      </section>

      <section class="subscribe">
        <img src="assets/stickers/subscribe-footer@2x.png" alt="donate sticker" />
        <p><a href="https://pudding.cool/subscribe">Subscribe to our newsletter</a></p>
        <p>
          Get all our latest stories in your inbox. Plus get links to some of our favorite projects
          from around the web.
        </p>
      </section>

      <section class="links">
        <span class="wordmark">{@html wordmark}</span>
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
  .c {
    max-width: calc(var(--width-column-wide) - var(--margin) * 2);
    padding: 16px;
    margin: 32px auto 0 auto;
    font-family: var(--sans);
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  section {
    width: 33.33%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
  }

  .links p.title {
    font-family: var(--mono);
    font-weight: bold;
    text-transform: uppercase;
    font-size: var(--font-size-xsmall, 14px);
  }

  .links .inner {
    display: flex;
  }

  ul {
    padding: 0;
  }

  .about {
    padding-right: 16px;
  }

  li {
    list-style-type: none;
  }
</style>
