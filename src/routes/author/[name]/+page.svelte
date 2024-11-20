<script>
  import Meta from "$components/Meta.svelte";
  import Author from "$components/Author.svelte";

  let { data } = $props();

  const { stories, author } = data;

  const copy = {
    title: author.name,
    description: "Author bio and published stories"
  };

  const preloadFont = [
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasTypewriter-Medium-Web.woff2"
  ];
</script>

<Meta {copy} {preloadFont} />
<Author {stories} {author} />
