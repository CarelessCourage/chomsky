<script setup>
import {ref} from "vue"

import Structure from './components/structure.vue'
import Feed from './components/feed.vue'
import Post from './components/post.vue'
import Interact from "./components/interact.vue"

const interact = ref(true);
</script>

<template>
  <div class="read-layer" :class="{active: interact}">
    <div class="opacity-layer">
      <Structure v-if="true"/>
      <Post />
      <Feed />
    </div>
  </div>
  <div class="cirle" @click="interact = !interact"></div>
  <div class="write-layer">
    <Interact/>
  </div>
</template>

<style lang="scss">
@import "./css";

.read-layer {
  background: var(--background);
  padding-bottom: var(--marginxxx);
  position: relative;
  z-index: 1;
  transform:
    translateY(var(--interactY))
    translateX(calc(0px - var(--interactX)));

  transition: .4s ease-in-out;

  .opacity-layer {
    opacity: .1;
    transition: opacity .4s ease-in-out;
  }

  &.active {
    transform:
      translateY(0px)
      translateX(0px);

    .opacity-layer {
      opacity: 1;
    }
  }
}

 .cirle {
    --size: 200px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: var(--flavor);
    position: fixed;
    z-index: 1000;
    top: calc(0px - var(--size) / 2);
    right: calc(0px - var(--size) / 2);
    cursor: pointer;
    transition: .4s ease-in-out;
    &:hover {
      --size: 300px;
    }
    &:active {
      --size: 240px;
      transition: .2s ease-in-out;
    }
  }

.write-layer {
  position: fixed;
  top: 0px;
  left: 0px;
}

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
}

:root {
  --radius: 5px;
  --margin: 25px;
  --marginx: calc(2 * var(--margin));
  --marginxx: calc(4 * var(--margin));
  --marginxxx: calc(8 * var(--margin));
  @media only screen and (max-width: $tablet) {--margin: 12px;}
  @media only screen and (max-width: $mobile) {--margin: 6px;}
}

html {
  background: var(--foreground);
}

#app {
  --interactY: 90px;
  --interactX: 320px;
  --vail: 0.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto VF", sans-serif;
  background: var(--background);
  color: var(--foreground);
}

@media only screen and (max-width: $phablet) {
  #app {--interactX: 100vw;}
}

//h1 {
  //font-size: clamp(2em, 5vw, 8em);
//}

.page {
  max-width: calc(100vw - var(--marginxx));
  width: 1000px;
  margin: auto;
  padding-top: var(--marginxx);
}
</style>
