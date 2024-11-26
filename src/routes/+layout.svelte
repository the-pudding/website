<script>
  import "$styles/app.css";
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";

  let { children } = $props();
</script>

<Header />
<main id="content">
  {@render children?.()}
</main>
<Footer />
