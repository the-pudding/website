<script>
    import { base } from "$app/paths";
</script>
<div class="interstitial-inner">
    <div class="sticker-set">
        <img class="icon" src="{base}/assets/stickers/mailbox@2x.png" alt="mailbox sticker" />
    </div>
    <p>Get The Pudding in your inbox</p>

    <form action="https://buttondown.com/api/emails/embed-subscribe/thepudding"
        method="post"
        class="embeddable-buttondown-form"
    >
        <input type="email" class="email-input" name="email" placeholder="you@example.com" />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" class="submit-input" value="Subscribe" />
    </form>
    <p class="credit">
        <a href="https://buttondown.com" target="_blank">
        Powered by Buttondown.
        </a>
    </p>
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
        width: 180px;
        margin: 16px 0;
        transition: transform calc(var(--1s) * 0.25);
    }

    .icon:hover {
        transform: rotate(var(--left-tilt-double)) scale(1.05);
     }

    p {
        margin: 0;
        font-family: var(--mono);
        font-size: var(--font-size-medium);
        text-align: center;
        max-width: 260px;
        line-height: 1;
        text-transform: uppercase;
        color: var(--color-fg);
    }

    form {
        margin: 32px 0 0 0;
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .email-input {
        width: 65%;
        font-size: var(--font-size-xsmall);
        border-radius: 1px 0 0 1px;
        outline: 2px solid var(--color-fg);
        color: var(--color-secondary-gray);
    }

    .submit-input {
        width: 35%;
        background: var(--color-fg);
        font-size: var(--font-size-xsmall);
        text-transform: uppercase;
        min-width: 80px;
        outline: 2px solid var(--color-fg);
        border-radius: 0 1px 1px 0;
    }

    .submit-input:hover {
        background: #A290E9;
        outline: 2px solid #A290E9;
        color: var(--color-gray-1000);
    }

    .credit {
        text-align: right;
        width: 100%;
        margin: 0;
        padding: 0;
        max-width: none;
    }

    a {
        font-family: var(--sans);
        font-size: var(--font-size-xsmall);
        color: var(--color-secondary-gray);
        text-decoration: underline 2px var(--color-secondary-gray);
        text-transform: none;
        margin: 0;
        padding: 0;
    }

    a:hover {
        color: var(--color-fg);
        text-decoration: underline 2px var(--color-fg);
    }
</style>