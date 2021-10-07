<script>
  import Social from "$components/Header.Social.svelte";
  import SlideOut from "$components/Header.SlideOut.svelte";
</script>

<header>
  <Social />
  <SlideOut />
</header>

<style>
  header {
    box-shadow: 0 4px 4px var(--color-off-white);
    position: relative;
  }
</style>
