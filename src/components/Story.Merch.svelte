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
        padding: 36px;
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
    }

    a:hover {
        transform: translateY(-4px);
        background: var(--color-secondary-gray);
    }
</style>