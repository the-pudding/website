<script>
  import { page } from "$app/stores";
  let { copy, preloadFont = [] } = $props();
  const base = "https://pudding.cool";
  const url = `${base}${$page.url.pathname}`;
</script>

<svelte:head>
  <title>{copy.title}</title>
  <meta name="description" content={copy.description} />
  <meta name="author" content="The Pudding" />
  <meta name="news_keywords" content={copy.keywords || ""} />

  <meta property="og:title" content={copy.title} />
  <meta property="og:site_name" content="The Pudding" />
  <meta property="og:url" content={url} />
  <meta property="og:description" content={copy.description} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="en_US" />

  <meta property="og:image" content="https://pudding.cool/common/assets/social/og-facebook.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="628" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="https://pudding.cool" />
  <meta name="twitter:creator" content="@puddingviz" />
  <meta name="twitter:title" content={copy.title} />
  <meta name="twitter:description" content={copy.description} />
  <meta
    name="twitter:image:src"
    content="https://pudding.cool/common/assets/social/og-twitter.jpg"
  />

  <meta name="robots" content="max-image-preview:large" />

  <link rel="canonical" href="{url}/" />

  {#each preloadFont as href}
    <link rel="preload" {href} as="font" type="font/woff2" crossorigin />
  {/each}
</svelte:head>
