<script>
    import { base } from "$app/paths";
</script>
<div class="interstitial-inner">
    <p>If you like our stories, you'll love our merch</p>
    <div class="sticker-set">
        <img class="icon" src="{base}/assets/img/merch-tease.png" alt="pudding tee" />
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
        padding: 64px 36px 36px 36px;
    }

    .sticker-set {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .icon {
        width: 80%;
        max-width: 260px;
        margin: 24px 0;
    }

    p {
        margin: 0;
        font-family: var(--mono);
        font-size: var(--font-size-small);
        text-align: center;
        line-height: 1;
        max-width: 260px;
        text-transform: uppercase;
        color: var(--color-fg);
    }

    a {
        font-family: var(--sans);
        font-size: var(--font-size-xsmall);
        font-family: var(--mono);
        color: var(--color-gray-1000);
        text-decoration: underline 2px var(--color-gray-1000);
        text-transform: uppercase;
        margin: 0;
        padding: 8px 16px;
        background: var(--color-electric-green);
        height: 36px;
        border-radius: 24px;
        transition: transform calc(var(--1s) * 0.25);
        cursor: pointer;
    }

    a:hover {
        transform: translateY(-4px);
        opacity: 0.9;
    }
</style>