<script>
  import Meta from "$components/Meta.svelte";
  import About from "$components/About.svelte";
  import copy from "$data/about.json";

  let { data } = $props();
  const { authors } = data;

  const preloadFont = [
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasTypewriter-Medium-Web.woff2"
  ];
</script>

<Meta {copy} {preloadFont} />
<About {copy} {authors} />
