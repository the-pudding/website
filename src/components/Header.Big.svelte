<script>
  import wordmark from "$svg/wordmark-plain.svg";
  import about from "$svg/about.svg";
  import donate from "$svg/donate.svg";
  import subscribe from "$svg/subscribe.svg";
</script>

<header>
  <div class="wordmark">
    <a href="https://pudding.cool" aria-label="The Pudding" target="_self">{@html wordmark}</a>
  </div>
  <div class="bottom">
    <div class="stories">
      Visual data stories on just about everything, <br />including <a href="#">Spotify</a>,
      <a href="#">birthdays</a>, <a href="#">rickrolling</a>, and more.
    </div>
    <ul class="menu">
      <li>
        <a href="about" aria-label="About" target="_self">about</a>
      </li>
      <li>
        <a href="donate" aria-label="Donate" target="_self">donate</a>
      </li>
      <li>
        <a
          href="https://pudding.cool/subscribe"
          rel="external"
          aria-label="subscribe"
          target="_self">subscribe</a
        >
      </li>
    </ul>
  </div>
</header>

<style>
  header {
    padding: 0 0 0 0;
    /* TODO */
    max-width: 1460px;
    margin: 0 auto;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    transform: translate(5vw, -5vw);
  }

  .stories {
    font-family: var(--sans);
  }

  .menu {
    padding: 0;
    display: flex;
    align-items: center;
    font-family: var(--mono);
  }

  li {
    list-style-type: none;
    text-transform: uppercase;
    font-size: 14px;
    margin: 0 8px;
  }

  li a {
    display: block;
    width: 100%;
  }

  .wordmark {
    margin: 0 auto;
  }

  .wordmark a {
    border: none;
    display: block;
    color: var(--color-fg);
    width: 100%;
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  :global(header svg) {
    display: block;
    width: 100%;
  }
</style>
