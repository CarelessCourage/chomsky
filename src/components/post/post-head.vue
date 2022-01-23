<script setup>
import Sunrise from "../elements/sunrise.vue"
import { post, pickCell } from '../../store/post.js'
</script>

<template>
  <div class="post-head">
    <Sunrise>
      <img src="../../assets/headshot18.jpg" alt="Profile Image">
    </Sunrise>

    <div class="wrapper">
      <component :is="pickCell(post.cell.component)">
        <img v-if="post.cell.media" :src="post.cell.media" width="150" :alt="post.cell.text">
        <p v-else>{{post.cell.text}}</p>
      </component>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  position: relative; z-index: 20;
  margin-bottom: var(--marginxx);
  margin-top: 13vw; 
  height: max-content;
  
  .cellbase.imgcell {
    width: 100%; height: 100%;
    object-fit: cover;
  }
}

.sun img {
  position: relative; top: 55%;
  height: 30em; width: 30em;
  border-radius: 100%;
  background: var(--flavor);
  object-fit: cover;
}

.post-head .wrapper .cellbase {
  width: 40em; height: max-content;
  max-width: 100vw;
  max-height: 100vw;
  background: var(--background);
  &:after,
  &:before {
    display: none;
    background: var(--background);
  }
}

.post-head {
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  grid-column: span 2;

  .sunrise {
    top: calc((var(--radius) / 2) * -1);
    bottom: auto;
  }
}

</style>
