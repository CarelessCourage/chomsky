<script setup>
import Sunrise from "../elements/sunrise.vue"
import { post, pickCell } from '../../store/post.js'
</script>

<template>
 
    <div class="post-head">
      <Sunrise>
        <img src="../../assets/headshot18.jpg" alt="">
      </Sunrise>

      <component :is="pickCell(post.cell.component)">
        <img v-if="post.cell.media" :src="post.cell.media" width="150" :alt="post.cell.text">
        <p v-else>{{post.cell.text}}</p>
      </component>

      <div class="cellbase" v-if="false">
        {{post.cell.text}}
      </div>
    </div>

</template>

<style lang="scss">
.sun img {
  position: relative; top: 55%;
  height: 30em; width: 30em;
  border-radius: 100%;
  background: var(--flavor);
  object-fit: cover;
}

.post-head .cellbase {
  height: max-content;
  position: absolute;
  top: 13vw;
  z-index: 20;
  background: var(--background);
}

.post-head {
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 60vh;
  grid-column: span 2;

  .sunrise {
    top: calc((var(--radius) / 2) * -1);
    bottom: auto;
  }
}

/*.post-wrapper {
  max-height: 200vh;
  //background: var(--shade);
  transition: all 0.4s ease-in-out;
  &:not(.active) {
    max-height: 0vh;
    overflow: hidden;
  }
}*/

</style>
