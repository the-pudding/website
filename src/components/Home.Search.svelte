<script>
  import { getContext, createEventDispatcher } from "svelte";
  import deburr from "lodash.deburr";
  import { sum, ascending } from "d3";

  export let highlight;

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
  const dispatch = createEventDispatcher();
  let value = "";

  const tokenize = (d) => {
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
  };

  const getPropScore = ({ prop, tokens }, fullQuery) => {
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
  };

  const getTotalScore = (search, fullQuery) => {
    const scores = search.map((d) => getPropScore(d, fullQuery));
    return sum(scores);
  };

  const sortResults = (fullQuery) => {
    const results = data
      .map((d) => ({
        ...d,
        score: getTotalScore(d.search, fullQuery)
      }))
      .filter((d) => d.score > 0);

    results.sort((a, b) => ascending(a.score, b.score));

    return results;
  };

  const data = stories.map((d) => ({
    slug: d.slug,
    search: tokenize(d)
  }));

  $: query = value.toLowerCase().trim();
  $: results = query.length >= MIN_CHARS ? sortResults(query) : data;
  $: highlight = results.map((d) => d.slug);
  $: if (query.length >= MIN_CHARS) dispatch("focus");
</script>

<div id="search">
  <div class="inner">
    <input placeholder="Search stories (e.g., Spotify)" bind:value />
  </div>
</div>

<!-- {#each results as { hed }}
  <p>{hed}</p>
{/each} -->
<style>
  #search {
    background: var(--background-body);
    box-shadow: 0 4px 4px var(--color-off-white);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1em;
    z-index: var(--z-top);
  }

  .inner {
    width: 90%;
    margin: 0 auto;
  }

  input {
    width: 15em;
    font-size: 1.25em;
    padding: 0.5em;
    line-height: 1;
  }
</style>
