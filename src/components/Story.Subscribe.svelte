<script>
  import { base } from "$app/paths";
</script>

<div class="interstitial-inner">
  <div class="sticker-set">
    <img class="icon" src="{base}/assets/stickers/mailbox@2x.png" alt="mailbox sticker" />
  </div>
  <p>Get The Pudding <br />in your inbox:</p>

  <form
    action="https://buttondown.com/api/emails/embed-subscribe/thepudding"
    method="post"
    class="embeddable-buttondown-form"
  >
    <input type="email" class="email-input" name="email" placeholder="you@example.com" />
    <label for="bd-email">Prove you&lsquo;re human:</label>
    <input placeholder="What is 1+1?" type="number" step="1" name="metadata__captcha" id="captcha" required />
    <input type="hidden" value="1" name="embed" />
    <input type="submit" class="submit-input" value="Subscribe" />
  </form>
</div>

<style>

  label {
    font-family: var(--sans);
  }
  input.email-input, input#captcha {
    outline: none;
    border: 1px solid rgba(48, 48, 48, .4);
    background: white;
    -webkit-box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    width: 175px;
    font-family: var(--sans);
  }
  .interstitial-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    overflow: hidden;
  }

  .sticker-set {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 150px;
    margin: 16px 0;
    transition: transform calc(var(--1s) * 0.25);
  }

  .icon:hover {
    transform: rotate(var(--left-tilt-double)) scale(1.05);
  }

  p {
    margin: 0;
    font-family: var(--sans);
    font-size: var(--font-size-medium);
    text-align: center;
    max-width: 260px;
    line-height: 1;
    color: var(--color-fg);
  }

  form {
    margin: 32px 0 0 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    transition: transform calc(var(--1s) * 0.25);
    justify-content: center;
    gap: 10px;
    margin-top: 16px;
  }

  .submit-input {
    text-transform: uppercase;
    transition: all calc(var(--1s) * 0.25);
    letter-spacing: 1px;
    border-radius: 3px;
    padding: 12px 8px;
  }

  .submit-input:hover {
    transform: translateY(-4px);
  }

  input::placeholder {
    font-family: var(--sans);
  }
  input::-webkit-input-placeholder {
    font-family: var(--sans);
  }

  input::-moz-placeholder {
    font-family: var(--sans);
  }

  input:-ms-input-placeholder {
    font-family: var(--sans);
  }

  @media screen and (prefers-color-scheme:dark) {
    input.email-input {
      border: none;
      color: var(--color-bg);
    }

    input::placeholder {
      color: var(--color-bg);
    }
    input::-webkit-input-placeholder {
      color: var(--color-bg);
    }
    input::-moz-placeholder {
      color: var(--color-bg);
    }

    input:-ms-input-placeholder {
      color: var(--color-bg);
    }
  }


</style>
