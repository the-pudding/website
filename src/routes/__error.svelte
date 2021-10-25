<script context="module">
  export function load({ page, error, status }) {
    return {
      props: {
        page,
        status,
        message: error.message
      }
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import HeroText from "$components/HeroText.svelte";
  export let status;

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
    <h1 style="color: {hsl};">THIS SITE REQUIRES FLASH</h1>
    <p>
      Just kidding, this is a {status}. The Pudding link you are looking for must have a typo.
      <a href="https://pudding.cool#stories">Search all of our stories</a>, you will find it there.
    </p>
  </HeroText>
</section>

<style>
  h1 {
    transition: all 100ms ease-out;
  }
</style>
