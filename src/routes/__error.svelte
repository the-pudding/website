<script>
  import { onMount } from "svelte";
  import HeroText from "$components/HeroText.svelte";

  let hsl = "hsl(0, 0%, 0%)";
  onMount(() => {
    setInterval(() => {
      const h = Math.abs(Math.cos(Date.now() * 0.0001) * 256);
      hsl = `hsl(${h}, 80%, 50%)`;
    }, 100);
  });
</script>

<section class="column-wide">
  <HeroText>
    <h2 style="color: {hsl};">THIS SITE REQUIRES FLASH</h2>
    <p>
      Just kidding, this is a 404. The Pudding link you are looking for must have a typo.
      <a href="https://pudding.cool#stories">Search all of our stories</a>, you will find it there.
    </p>
  </HeroText>
</section>

<style>
  h2 {
    transition: all 100ms ease-out;
  }
</style>
