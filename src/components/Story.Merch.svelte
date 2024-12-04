<script>
  import { base } from "$app/paths";
  import checkScreenMode from "$utils/checkScreenMode.js";
  import { onMount } from "svelte";

  let merchTeeImage = $state(`${base}/assets/img/merch-tee-light.png`);

  const updateImage = () => {
    const screenMode = checkScreenMode();
    merchTeeImage = screenMode === "dark"
      ? `${base}/assets/img/merch-tee-light.png`
      : `${base}/assets/img/merch-tee-dark.png`;
  };

  onMount(() => {
    updateImage();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => { updateImage(); };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  });
</script>

<div class="interstitial-inner">
  <p>If you like our stories,<br /> you’ll love our merch</p>
  <div class="sticker-set">
    <img
      class="icon"
      src={merchTeeImage}
      alt="pudding tee with a skeleton working on a computer"
    />
    <img
      class="sticker-left"
      src="{base}/assets/img/merch-sticker-left.png"
      alt="a red and yellow technical sticker that reads The Pudding: Visual Data Stories About Just About Everything"
    />
    <img
      class="sticker-right"
      src="{base}/assets/img/merch-sticker-right.png"
      alt="a green blob sticker that reads Pudding Dot Cool"
    />
  </div>
  <a href="https://the-pudding.printify.me/products">Shop our swag</a>
</div>

<style>
  .interstitial-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px;
  }

  .sticker-set:hover .sticker-left {
    transform: rotate(3deg) scale(1.05);
  }

  .sticker-set:hover .sticker-right {
    transform: rotate(-5deg) scale(1.05);
  }

  .sticker-set:hover .icon {
    transform: translate(-50%, -50%) scale(1.05);
  }

  .sticker-set {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .icon {
    width: 100%;
    max-width: 300px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform calc(var(--1s) * 0.25);
  }

  .sticker-left {
    width: 40%;
    position: absolute;
    bottom: 10%;
    left: 5%;
    transform: rotate(-5deg);
    transition: transform calc(var(--1s) * 0.25);
  }

  .sticker-right {
    width: 30%;
    position: absolute;
    top: 10%;
    right: 5%;
    transform: rotate(5deg);
    transition: transform calc(var(--1s) * 0.25);
  }

  p {
    margin: 0;
    font-family: var(--sans);
    font-size: var(--font-size-medium);
    text-align: center;
    line-height: 1;
    width: 100%;
    color: var(--color-fg);
  }

  a {
    font-family: var(--sans);
    font-size: var(--font-size-xsmall);
    font-family: var(--mono);
    color: var(--color-bg);
    text-decoration: none;
    text-transform: uppercase;
    margin: 0;
    padding: 12px;
    background: var(--color-fg);
    border-radius: 2px;
    transition: transform calc(var(--1s) * 0.25);
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
  }

  a:hover {
    transform: translateY(-4px);
    background: var(--color-secondary-gray);
  }
</style>
