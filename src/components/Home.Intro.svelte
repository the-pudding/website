<script>
  import { onMount, getContext } from "svelte";
  import { shuffle } from "d3";

  import wordmark from "$svg/wordmark.svg";

  const { stories, staff, copy } = getContext("Home");

  let personalHTML = "";
  let personalName = "";

  $: personalVisible = !!personalHTML;

  const madlibToHTML = ({ category, filterFunction }) => {
    filterFunction = filterFunction || (() => true);

    const textProp = `home_${category}`;

    const filteredStories = stories.filter((d) => d[textProp]).filter(filterFunction);

    if (!filteredStories.length) return "";

    shuffle(filteredStories);

    const regex = new RegExp(`\\[${category}\\]`, "g");

    const html = copy[category].replace(regex, () => {
      const story = filteredStories.pop();
      return `
    		<a href="https://pudding.cool/${story.url}" rel="external">
    			${story[textProp]}
    			<img src="common/assets/thumbnails/320/${story.slug}.jpg" alt="" />
    		</a>
    	`;
    });

    return html;
  };

  const popularHTML = madlibToHTML({ category: "popular" });

  const renderPersonal = () => {
    const { id, name } = staff[Math.floor(Math.random() * staff.length)];
    const filterFunction = (d) => d.personal_pick.includes(id);

    personalHTML = madlibToHTML({ category: "personal", filterFunction });
    personalName = name;
  };

  onMount(() => {
    renderPersonal();
  });
</script>

<h1 aria-label={copy.title}><div class="wordmark">{@html wordmark}</div></h1>

<div class="letter">
  <p>
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
