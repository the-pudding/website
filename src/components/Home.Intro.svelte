<script>
  import { onMount, getContext } from "svelte";
  import madlibToHtml from "$utils/madlibToHtml";

  import wordmark from "$svg/wordmark.svg";

  const { stories, staff, copy } = getContext("Home");

  let altTagline = "";
  let popularHTML = "";
  let personalHTML = "";
  let personalName = "";
  let welcome = "";
  let position = "";

  const renderPopular = () => {
    popularHTML = madlibToHtml({ stories, copy, category: "popular" });
  };

  const renderPersonal = () => {
    const { id, name } = staff[Math.floor(Math.random() * staff.length)];
    const filterFunction = (d) => d.personal_pick.includes(id);

    const unused = stories.filter((d) => !popularHTML.includes(d.url));
    personalHTML = madlibToHtml({ stories: unused, copy, category: "personal", filterFunction });
    personalName = name;
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
      <strong>{@html personalHTML}</strong>
    </span>

    <span class="welcome" class:is-visible={personalHTML}>{@html welcome}</span>
  </p>
  <p class="signature" class:is-visible={personalHTML}>
    <span class="name">{personalName}</span>
    <span class="position">{position}</span>
  </p>
</div>

<style>
  .wordmark {
    max-width: 8em;
  }

  .letter {
    font-size: 5vw;
    min-height: 480px;
  }

  :global(del) {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-repeat: no-repeat;
    background-size: 0 0.1em;
    background-position: 0 50%;
    transition: background-size 1s ease-in;
  }

  :global(.is-del del) {
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
    transition: opacity 1s ease-in 2s;
  }

  .popular.is-visible {
    opacity: 1;
  }

  .personal {
    opacity: 0;
    transition: opacity 1s ease-in 3s;
  }

  .personal.is-visible {
    opacity: 1;
  }

  .welcome {
    opacity: 0;
    transition: opacity 1s ease-in 3s;
  }

  .welcome.is-visible {
    opacity: 1;
  }

  .signature {
    opacity: 0;
    transition: opacity 1s ease-in 4s;
  }

  .signature.is-visible {
    opacity: 1;
  }

  :global(a) {
    text-decoration: none;
  }

  :global(.letter img) {
    display: inline-block;
    width: 8vw;
  }
</style>
