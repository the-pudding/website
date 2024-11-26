<script>
  import { setContext } from "svelte";
  import { browser } from "$app/environment";
  import Meta from "$components/Meta.svelte";
  import Home from "$components/Home.svelte";

  // import HiddenAuthors from "$components/HiddenAuthors.svelte";
  import version from "$utils/version.js";
  import copy from "$data/home.json";

  let { data } = $props();

  version();

  const preloadFont = [
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasTypewriter-Medium-Web.woff2"
  ];

  const { stories, authors } = data;

  const { title, description, url, keywords } = copy;

  setContext("Home", { stories, copy, authors });
</script>

<Meta {copy} {preloadFont} />
<Home />
