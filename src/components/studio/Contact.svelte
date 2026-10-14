<script>
  import logo from "$svg/wordmark_studio.svg";

  let { general } = $props();
</script>

<section class="contact">
  <h3>{@html general.genTitle}</h3>
  <p><a href="mailto:{general.genEmail}">{general.genEmail}</a></p>
  <div class="logo">{@html logo}</div>
</section>

<style>
  .contact {
    padding: 0 32px 32px 32px;
  }

  h3 {
    font-family: var(--sans);
    font-size: clamp(var(--22px), 2.5vw, var(--48px));
    text-transform: uppercase;
    margin: 64px 0 0 0;
  }

  .logo {
    margin: 64px auto 0 auto;
    max-width: 12em;
  }

  .logo :global(svg path) {
    fill: currentColor;
  }

  @media only screen and (max-width: 800px) {
    .contact {
      padding: 0 16px 32px 16px;
    }

    h3 {
      margin-top: 32px;
    }
  }
</style>
