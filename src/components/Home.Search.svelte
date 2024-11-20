<script>
  import { getContext } from "svelte";
  import { page } from "$app/stores";
  import deburr from "lodash.deburr";
  import { sum, ascending } from "d3";

  let { value = $bindable("") } = $props();
  const { stories } = getContext("Home");

  const MIN_CHARS = 3;
  const WEIGHTS = [
    {
      prop: "hed",
      weight: 1
    },
    {
      prop: "dek",
      weight: 1
    },
    {
      prop: "tease",
      weight: 1
    },
    {
      prop: "keyword",
      weight: 2
    }
  ];
  const data = stories.map((d) => ({
    slug: d.slug,
    search: tokenize(d)
  }));

  function tokenize(d) {
    return WEIGHTS.map(({ prop }) => {
      if (typeof d[prop] !== "string") return { prop, tokens: d[prop] };

      const deburred = deburr(d[prop].toLowerCase());
      const split = deburred.split(/\W/);
      const clean = split.filter((d) => d.length >= MIN_CHARS);
      return {
        prop,
        tokens: clean
      };
    });
  }

  function getPropScore({ prop, tokens }, fullQuery) {
    const queryWords = fullQuery
      .split(/\W/)
      .filter((d) => d.length >= MIN_CHARS)
      .map((d) => d.toLowerCase());

    const { weight } = WEIGHTS.find((d) => d.prop === prop);

    // full word match
    const wordResults = queryWords.map((queryTerm) => tokens.includes(queryTerm));
    const wordMatches = wordResults.filter((d) => d).length;
    const wordScore = wordMatches * weight;

    // substring
    const subResults = queryWords.map((queryTerm) => tokens.join(" ").includes(queryTerm));
    const subMatches = subResults.filter((d) => d).length;
    const subScore = subMatches * weight * 0.5;

    return wordScore + subScore;
  }

  function getTotalScore(search, fullQuery) {
    const scores = search.map((d) => getPropScore(d, fullQuery));
    return sum(scores);
  }

  function sortResults(fullQuery) {
    const results = data
      .map((d) => ({
        ...d,
        score: getTotalScore(d.search, fullQuery)
      }))
      .filter((d) => d.score > 0);

    results.sort((a, b) => ascending(a.score, b.score));

    return results;
  }

  let query = $derived(value.toLowerCase().trim());
  let results = $derived.by(() => (query.length >= MIN_CHARS ? sortResults(query) : data));
  // $: if (query.length >= MIN_CHARS) dispatch("focus");
  // let matchSuffix = $derived(highlight.length === 1 ? "y" : "ies");

  $effect(() => {
    const search = $page.url.searchParams.get("search");
    value = search || "";
    window.history.replaceState({}, "", $page.url.pathname);
  });
</script>

<div id="search">
  <div class="inner">
    <span>Search</span>
    <img class="icon" src="assets/stickers/search@2x.png" alt="search sticker" />
    <input placeholder="Find a story" bind:value />
    <!-- <p>{highlight.length} stor{matchSuffix}</p> -->
  </div>
</div>

<style>
  #search {
    background: var(--background-body);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--z-top);
    padding: 1em 0;
    display: flex;
    flex-direction: row;
  }

  .inner {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    width: 12em;
    font-size: var(--font-size-x-small);
    font-family: var(--mono);
    padding: 0.5em;
    line-height: 1;
    margin-left: 8px;
  }

  p {
    margin: 0;
    margin-left: 1em;
    color: var(--color-gray-dark);
    font-size: var(--font-size-small);
  }

  .icon {
    width: 48px;
    margin-left: 4px;
    transition: transform calc(var(--1s) * 0.25);
    pointer-events: auto;
  }

  .icon:hover {
    transform: rotate(var(--left-tilt-double)) scale(1.05);
  }

  @media only screen and (max-width: 540px) {
    input {
      font-size: var(--font-size-small);
      width: 12em;
    }
  }
</style>
