<script>
  import { onMount, getContext } from "svelte";
  import madlibToHtml from "$utils/madlibToHtml.js";
  import HeroText from "$components/HeroText.svelte";
  import wordmark from "$svg/wordmark.svg";

  const { stories, staff, copy } = getContext("Home");

  let altTagline = "";
  let popularHTML = "";
  let personalHTML = "";
  let personalName = "";
  let personalSlug = "";
  let welcome = "";
  let position = "";

  const renderPopular = () => {
    popularHTML = madlibToHtml({ stories, copy, category: "popular", filter: "popular" });
  };

  const renderPersonal = () => {
    const ran = Math.floor(Math.random() * staff.length);
    const { id, name, slug } = staff[ran];

    const unused = stories.filter((d) => !popularHTML.includes(d.url));
    personalHTML = madlibToHtml({ stories: unused, copy, category: "personal", filter: id });
    personalName = name;
    personalSlug = slug;
  };

  const renderAltTagline = () => {
    const r = Math.floor(Math.random() * copy.altTaglines.length);
    altTagline = ` ${copy.altTaglines[r]}`;
  };

  const renderSignature = () => {
    if (!personalHTML) return;
    welcome = copy.welcome;
    position = "Pudding team member";
  };

  onMount(() => {
    renderAltTagline();
    renderPopular();
    renderPersonal();
    renderSignature();
  });
</script>

<section id="intro" class="column-wide">
  <HeroText>
    <h1 aria-label={copy.title}><div class="wordmark">{@html wordmark}</div></h1>
    <div class="letter">
      <p>
        <span class="sr-only">The Pudding</span>

        <span class="tagline" class:is-del={altTagline}>
          {@html copy.tagline}<span class="tagline-alt" class:is-visible={altTagline}
            >{altTagline}.</span
          >
        </span>

        <span class="popular" class:is-visible={popularHTML}>{@html popularHTML}</span>

        <span class="personal" class:is-visible={popularHTML}>
          {@html personalHTML}
        </span>

        <span class="welcome" class:is-visible={personalHTML}>{@html welcome}</span>
      </p>
    </div>
  </HeroText>
  <div class="signature" class:is-visible={personalHTML}>
    <p class="name">
      {#if personalSlug}
        <a href="/author/{personalSlug}">{personalName}</a>
      {/if}
    </p>
    <p class="position">{position}</p>
  </div>
</section>

<style>
  .wordmark {
    max-width: calc(var(--font-size-giant) * 1.5);
  }

  .letter {
    min-height: 60vh;
  }

  .letter p {
    margin: 0;
  }

  :global(.letter del) {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-repeat: no-repeat;
    background-size: 0 0.1em;
    background-position: 0 50%;
    transition: background-size 1s ease-in;
  }

  :global(.letter .is-del del) {
    background-size: 100% 0.1em;
  }

  .tagline-alt {
    opacity: 0;
    transition: opacity 1s ease-in 1s;
  }

  .tagline-alt.is-visible {
    opacity: 1;
  }

  .popular {
    opacity: 0;
    transition: opacity 1s ease-in 3s;
  }

  .popular.is-visible {
    opacity: 1;
  }

  .personal {
    opacity: 0;
    transition: opacity 1s ease-in 4s;
  }

  .personal.is-visible {
    opacity: 1;
  }

  .welcome {
    opacity: 0;
    transition: opacity 1s ease-in 5s;
  }

  .welcome.is-visible {
    opacity: 1;
  }

  .signature {
    opacity: 0;
    transition: opacity 1s ease-in 6s;
    font-size: var(--font-size-small);
    margin-top: 2em;
  }

  .signature.is-visible {
    opacity: 1;
  }

  :global(.letter img) {
    display: inline-block;
    width: 2em;
    transform: translate(0, 25%);
    outline: 1px solid var(--color-off-black);
  }
</style>
