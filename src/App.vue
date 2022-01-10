<script setup>
import { ref, onMounted } from "vue"

import Structure from './components/structure.vue'
import Intro from './components/sections/intro.vue'
import Feed from './components/feed.vue'
import Post from './components/post.vue'
import Interact from "./components/interact.vue"
import CircleBurger from "./components/circleBurger.vue"

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

const variable = ref(0)

var tl = gsap.timeline( { defaults: {   // You can now define default property values for all tweens in a timeline!!
  ease: "bounce.out",
}, repeat:0, repeatDelay: 0 } );

onMounted(() => {
  tl.to(variable, {
    keyframes: [
      {value: 0, duration: 3},
      {value: 100, duration: 1},
      {value: 100, duration: 0.1},
      {value: 0, duration: 2},
      {value: 100, duration: 0.5},
      {value: 0, duration: 0.5},
      {value: 100, duration: 0.5},
      {value: 0, duration: 0.5},
      {value: 100, duration: 0.5},
      {value: 0, duration: 1},
      
    ]
  });
});

const interact = ref(true);
</script>

<template>
  <div class="read-layer" :class="{active: interact}">
    <div class="opacity-layer" @click="interact = true">
      <Intro v-if="true"/>
      <Structure v-if="false"/>
      <Post v-if="false" />
      <Feed />
    </div>
  </div>
  <CircleBurger @click="interact = !interact" :color="variable"/>
  <div class="write-layer">
    <Interact :color="variable"/>
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
    cursor: pointer;
    opacity: .1;
    transition: opacity .4s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }

  &.active {
    transform:
      translateY(0px)
      translateX(0px);

    .opacity-layer {
      opacity: 1;
      cursor: default;
    }
  }
}

.write-layer {
  position: fixed;
  top: 0px;
  left: 0px;
}

@font-face {
  font-family: "Roboto VF";
  src: url('./assets/fonts/legacy/GT-Alpina-Italic-VAR-Trial.woff2') format('woff2 supports variations'),
      url('./assets/fonts/legacy/GT-Alpina-Italic-VAR-Trial.woff2') format('woff2-variations');
  font-stretch: 75% 100%;
  font-style: oblique 0deg 12deg;
  font-weight: 100 900;
}

@font-face {
  font-family: "Roboto VF";
  src: url('./assets/fonts/legacy/GT-Maru-Mega-Trial-VF.woff2') format('woff2 supports variations'),
      url('./assets/fonts/legacy/GT-Maru-Mega-Trial-VF.woff2') format('woff2-variations');
  font-stretch: 75% 100%;
  font-style: oblique 0deg 12deg;
  font-weight: 100 900;
}

@font-face {
  font-family: "Roboto VF";
  src: url('./assets/fonts/legacy/GT-Ultra-Trial-VF.woff2') format('woff2 supports variations'),
      url('./assets/fonts/legacy/GT-Ultra-Trial-VF.woff2') format('woff2-variations');
  font-stretch: 75% 100%;
  font-style: oblique 0deg 12deg;
  font-weight: 100 900;
}

@font-face {
  font-family: "Flexa";
  src: url('./assets/fonts/GT-Flexa-Mono-VF-Trial.woff2') format('woff2 supports variations'),
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
  --flavor2: #2CFFE2;

  --success: #6BFFB8;
  --warnings: #CF4D6F;
  --gold: #FCCA46;

  --black: #1D1E2C;

  --shade: #fdfff6;
  --shadedark: #3e505b;
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

.page {
  max-width: calc(100vw - var(--marginxx));
  width: 1000px;
  margin: auto;
  padding-top: var(--marginxx);
}
</style>
