<script>
    import { base } from "$app/paths";
    import { getContext } from "svelte";
    import { shuffle } from "d3";
    const { stories, authors } = getContext("Home");

    const numStories = 3;
    const staff = authors.filter((d) => d.position === "Staff");
    const faves = stories.filter((d) => d.filters.includes("our_faves"));

    const randomStaff = shuffle(staff).slice(0, 1);
    const randomFaves = shuffle(faves).slice(0, numStories);
</script>
<div class="interstitial-inner">
    <img class="icon" src="{base}/assets/stickers/our_faves@2x.png" alt="heart sticker" />
    <p>Some of my favorite projects are about 
        <a href={randomFaves[0].href}>{randomFaves[0].short}</a>,
        <a href={randomFaves[1].href}>{randomFaves[1].short}</a>, and
        <a href={randomFaves[2].href}>{randomFaves[2].short}</a>.
    </p>

    <div class="credit">
        <a href="/author/jan-diehm">
            <img src="/common/assets/authors/jan.jpg" alt="headshot of jan diehm" />
            <p class="name">Jan Diehm</p>
            <p class="title">Journalist-Engineer</p>
          </a>
    </div>
</div>

<style>
    .interstitial-inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 64px 36px 36px 36px;
    }

    p {
        margin: 0;
        font-family: var(--sans);
        text-align: center;
        line-height: 1.2;
        max-width: 260px;
        color: var(--color-fg);
        font-size: var(--24px, 24px);
        margin-bottom: 32px;
    }

    .credit a {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none !important;
    }

    img {
        width: 60px;
        aspect-ratio: 1;
    }

    .credit .name {
        color: var(--color-fg);
        font-size: var(--font-size-small);
        font-family: var(--mono);
        text-transform: uppercase;
        text-decoration: underline 2px var(--color-fg);
        padding: 8px 0;
        margin: 0;
    }

    .credit .title {
        font-size: var(--font-size-xsmall);
        color: var(--color-secondary-gray);
        padding: 0;
        margin: 0;
    }

    a:hover {
        color: var(--color-secondary-gray);
    }
    .credit a:hover .name {
        color: var(--color-secondary-gray);
        text-decoration: underline 2px var(--color-secondary-gray);
    }
</style>