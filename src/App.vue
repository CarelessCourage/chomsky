<script setup>
import { onMounted } from "vue"

import PostParent from './components/post/post-parent.vue'
import PostWrapper from './components/post/post-wrapper.vue'
import PostHead from './components/post/post-head.vue'
import PostBody from "./components/post/post-body.vue"
import PostFeed from './components/feed/index.vue'

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
    <div class="PostContext">
      <PostParent/>
      <PostWrapper>
        <PostHead/>
        <PostBody v-if="true"/>
      </PostWrapper>
    </div>
    <PostFeed/>
  </ReadLayer>

  <CircleBurger/>

  <WriteLayer>
    <Interact/>
  </WriteLayer>
</template>

<style lang="scss">
@import "./css";

@font-face {
  font-family: "Ultra";
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

.read-layer:not(.open) .PostContext{
   --shade: var(--background);
}

.PostContext {
  background: var(--shade);
  transition: all 0.4s ease-in-out;
}
</style>
