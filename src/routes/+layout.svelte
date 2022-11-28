<script>
  import "$styles/app.css";
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";
  export const trailingSlash = "always";
</script>

<Header />
<main id="content">
  <slot />
</main>
<Footer />
