<script setup>
// This starter template is using Vue 3 <script setup>
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Intro from './components/intro.vue'
import Feed from './components/feed.vue'
import Post from './components/post.vue'

import img from './assets/logo.png'

</script>

<template>
  <img :src="img" />
  <Post />
  <div class="page">
    <Feed />
  </div>
</template>

<style lang="scss">
//@import '~@fortawesome/fontawesome-free/scss/fontawesome';
//@import '~@fortawesome/fontawesome-free/scss/solid';

@font-face {
  font-family: "Roboto VF";
  src: url('./assets/fonts/GT-Flexa-VF-Trial.woff2') format('woff2 supports variations'),
      url('./assets/fonts/GT-Flexa-VF-Trial.woff2') format('woff2-variations');
  font-stretch: 75% 100%;
  font-style: oblique 0deg 12deg;
  font-weight: 100 900;
}

* {
  box-sizing: border-box;
  margin: 0px;
}

:root {
  --background: #f3f6ea;
  --foreground: #3e505b;
  --flavor: #368f8b;
  --shade: #fdfff6;
  --flavor-contrast: var(--background);

  --margin: 25px;
  --marginx: calc(2 * var(--margin));
  --marginxx: calc(4 * var(--margin));
  --marginxxx: calc(8 * var(--margin));

  --radius: 5px;

  @media only screen and (max-width: 850px) {
    --margin: 12px;
  }

  @media only screen and (max-width: 360px) {
    --margin: 6px;
  }
}

html {
  background: var(--foreground);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: "Roboto VF", sans-serif;
  background: var(--background);
  color: var(--foreground);

  padding-bottom: var(--marginxxx);
}

h1 {
  font-size: clamp(2em, 5vw, 8em);
}

.page {
  max-width: calc(100vw - var(--marginxx));
  width: 60em;
  margin: auto;
  padding-top: var(--marginxx);
}
</style>
