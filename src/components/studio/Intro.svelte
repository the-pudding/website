<script>
  let { copy } = $props();
</script>

<section class="intro">
  <h1 class="sr-only">{copy.title}</h1>
  <p><span>{@html copy.tag1}</span><span>{@html copy.tag2}</span></p>
</section>

<style>
  .intro {
    padding: 64px 32px;
  }

  p {
    font-size: clamp(var(--22px), 2.5vw, var(--44px));
    margin: 0 auto;
  }

  span {
    display: block;
  }

  @media only screen and (max-width: 1200px) {
    span {
      display: inline;
    }

    span:first-of-type {
      margin-right: 8px;
    }
  }

  @media only screen and (max-width: 800px) {
    .intro {
      padding: 32px 16px;
    }
  }
</style>
