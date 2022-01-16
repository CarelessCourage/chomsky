<script setup>
import { onMounted } from "vue"

import Intro from './components/intro.vue'
import Feed from './components/feed/index.vue'
import Post from './components/post.vue'
import Interact from "./components/audio/interact.vue"
import CircleBurger from "./components/audio/circleBurger.vue"

import ReadLayer from "./components/layers/read-layer.vue"
import WriteLayer from "./components/layers/write-layer.vue"

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

onMounted(() => {
  gsap.to(window, 2,{delay: 4, scrollTo:{y:595, ease: "power4.inOut"}});
});
</script>

<template>
  <ReadLayer>
    <Intro/>
    <Post/>
    <Feed/>
  </ReadLayer>
  <CircleBurger/>
  <WriteLayer>
    <Interact/>
  </WriteLayer>
</template>

<style lang="scss">
@import "./css";
</style>
