<script>
  import { onMount, getContext } from "svelte";
  import madlibToHtml from "$utils/madlibToHtml";

  import wordmark from "$svg/wordmark.svg";

  const { stories, staff, copy } = getContext("Home");

  let personalHTML = "";
  let personalName = "";
  let popularHTML = madlibToHtml({ stories, copy, category: "popular" });

  $: personalVisible = !!personalHTML;

  const renderPersonal = () => {
    const { id, name } = staff[Math.floor(Math.random() * staff.length)];
    const filterFunction = (d) => d.personal_pick.includes(id);

    const unused = stories.filter((d) => !popularHTML.includes(d.url));
    personalHTML = madlibToHtml({ stories: unused, copy, category: "personal", filterFunction });
    personalName = name;
  };

  onMount(() => {
    popularHTML = madlibToHtml({ stories, copy, category: "popular" });
    renderPersonal();
  });
</script>

<h1 aria-label={copy.title}><div class="wordmark">{@html wordmark}</div></h1>

<div class="letter">
  <p>
    <span class="sr-only">The Pudding</span>
    {@html popularHTML}
    <span class="personal">{@html personalHTML}</span>
    {copy.welcome}
  </p>
  <p class="signature" class:is-visible={personalVisible}>
    <span class="name">{personalName}</span>
    <span class="tk">Pudding team member</span>
  </p>
</div>

<style>
  .wordmark {
    max-width: 8em;
  }

  .signature {
    display: none;
  }

  .signature.is-visible {
    display: block;
  }

  :global(.letter img) {
    display: inline-block;
    max-width: 10em;
  }
</style>
