<script>
  import wordmark from "$svg/wordmark-sticker.svg";
</script>

<header>
  <div class="stories">
    Visual data stories on just about everything, <br />including <a href="#">Spotify</a>,
    <a href="#">birthdays</a>, <a href="#">rickrolling</a>, and more.
  </div>
  <div class="wordmark">
    <a href="https://pudding.cool" aria-label="The Pudding" target="_self">{@html wordmark}</a>
  </div>
  <ul class="menu">
    <li>
      <a href="about" aria-label="About" target="_self"
        ><img src="assets/stickers/about@2x.png" alt="about sticker" /></a
      >
    </li>
    <li>
      <a href="donate" aria-label="Donate" target="_self"
        ><img src="assets/stickers/donate@2x.png" alt="donate sticker" /></a
      >
    </li>
    <li>
      <a href="https://pudding.cool/subscribe" rel="external" aria-label="subscribe" target="_self"
        ><img src="assets/stickers/subscribe@2x.png" alt="subscribe sticker" /></a
      >
    </li>
    <!-- <button aria-label="Menu" target="_self">{@html more}</a> -->
  </ul>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--sans);
    padding: 32px 16px;
    /* TODO */
    max-width: 1400px;
    margin: 0 auto 64px auto;
  }

  .stories,
  .menu {
    width: 30%;
  }

  .menu {
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    list-style-type: none;
  }

  li a {
    display: block;
    width: 100%;
  }

  li:nth-of-type(1) {
    transform: rotate(-2deg);
  }

  li:nth-of-type(2) {
    transform: rotate(-3deg);
  }

  .wordmark {
    width: 40%;
    margin: 0 auto;
    transform: rotate(-4deg);
    display: flex;
    justify-content: center;
  }

  .wordmark a {
    border: none;
    display: block;
    color: var(--color-fg);
    max-width: 16em;
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  :global(header svg) {
    display: block;
    width: 100%;
  }
</style>
