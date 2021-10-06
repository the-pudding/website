<script>
  import Social from "$components/Header.Social.svelte";
  import SlideOut from "$components/Header.SlideOut.svelte";

  const platforms = [
    { name: "twitter", url: "https://twitter.com/puddingviz/" },
    {
      name: "instagram",
      url: "https://www.instagram.com/the.pudding"
    },
    { name: "facebook", url: "https://facebook.com/pudding.viz/" }
  ];

  const cta = [
    { text: "Support The Pudding", url: "https://patreon.com/thepudding/" },
    { text: "Join our newsletter", url: "http://eepurl.com/czym6f" }
  ];
</script>

<header>
  <Social {cta} {platforms} />
  <SlideOut {cta} />
</header>

<style>
  header {
    box-shadow: 0 2px red;
    position: relative;
  }
</style>
