<script>
  import { page } from "$app/stores";
  export let copy;
  const { title, description } = copy;
  const base = "https://pudding.cool";
  const url = `${base}${$page.path}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content={description} />
  <meta name="author" content="The Pudding" />
  <meta name="news_keywords" content="" />

  <meta property="og:title" content={title} />
  <meta property="og:site_name" content="The Pudding" />
  <meta property="og:url" content={url} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="en_US" />

  <meta property="og:image" content="/common/assets/social/facebook.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="600" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="https://pudding.cool" />
  <meta name="twitter:creator" content="@puddingviz" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/common/assets/social/twitter.jpg" />

  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.webmanifest" />

  <meta name="robots" content="max-image-preview:large" />

  <link
    rel="preload"
    type="font/woff2"
    as="font"
    crossorigin
    href="/assets/fonts/metropolis/Metropolis-Black.woff2"
  />

  <link
    rel="preload"
    type="font/woff2"
    as="font"
    crossorigin
    href="/assets/fonts/metropolis/Metropolis-Thin.woff2"
  />

  <link
    rel="preload"
    type="font/woff2"
    as="font"
    crossorigin
    href="/assets/fonts/metropolis/Metropolis-Regular.woff2"
  />

  <link
    rel="alternate"
    type="application/rss+xml"
    title="Latest from The Pudding"
    href="https://feeds.feedburner.com/pudding/feed"
  />

  <link rel="canonical" href="{url}/" />
</svelte:head>
