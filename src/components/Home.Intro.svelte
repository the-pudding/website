<script>
  import { onMount } from "svelte";
  import { shuffle } from "d3";
  import wordmark from "$svg/wordmark.svg";
  import copy from "$data/home.json";

  export let stories;
  export let staff;

  let personalHTML = "";
  let signatureHTML = "";

  const popularStories = stories.filter((d) => d.home_popular);
  shuffle(popularStories);

  const popularHTML = copy.popular.replace(/\[popular\]/g, () => {
    const { url, home_popular } = popularStories.pop();
    return `<a href="https://pudding.cool/${url}" rel="external">${home_popular}</a>`;
  });

  onMount(() => {
    const { id, name } = staff[Math.floor(Math.random() * staff.length)];

    const personalStories = stories
      .filter((d) => d.home_personal)
      .filter((d) => d.personal_pick.includes(id));
    shuffle(personalStories);

    personalHTML = copy.personal.replace(/\[personal\]/g, () => {
      const { url, home_personal } = personalStories.pop();
      return `<a href="https://pudding.cool/${url}" rel="external">${home_personal}</a>`;
    });

    signatureHTML = name;
  });
</script>

<h1 aria-label={copy.title}><div class="wordmark">{@html wordmark}</div></h1>

<div class="letter">
  <p>
    {@html popularHTML}
    <span class="personal">{@html personalHTML}</span>
    {copy.welcome}
    <span class="signature">{@html signatureHTML}</span>
  </p>
</div>

<style>
  .wordmark {
    max-width: 8em;
  }
</style>
