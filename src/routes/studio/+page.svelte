<script>
  import Meta from "$components/Meta.svelte";
  import Studio from "$components/studio/Studio.svelte";
  import copy from "$data/studio-home.json";
  import general from "$data/studio-general.json";

  let { data } = $props();

  const preloadFont = [
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasTypewriter-Medium-Web.woff2"
  ];
</script>

<Meta {copy} {preloadFont} />
<Studio {copy} {general} projects={data.projects} />
