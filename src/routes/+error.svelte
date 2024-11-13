<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import HeroText from "$components/HeroText.svelte";
</script>

<section class="column-wide">
  <HeroText>
    <h2>THIS SITE REQUIRES FLASH</h2>
    <p>
      Just kidding, this is a 404. The Pudding link you are looking for must have a typo.
      <a href="https://pudding.cool">Search all of our stories</a>, you will find it there.
    </p>
  </HeroText>
</section>

<style>
  h2 {
    transition: all 100ms ease-out;
  }
</style>
