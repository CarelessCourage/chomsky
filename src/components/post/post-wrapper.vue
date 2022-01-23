<script setup>
import Post from '../../store/post.js'
</script>

<template>
  <div class="post-wrapper" :class="{active: Post.toggle}">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.post-wrapper {
  overflow: hidden;
  max-height: 200vh;
  padding-bottom: var(--marginxx);
  transition: all 0.8s;
  &:not(.active) {
    max-height: 0vh;
    padding-bottom: 0px;
  }
}
</style>