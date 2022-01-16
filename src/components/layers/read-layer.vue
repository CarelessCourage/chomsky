<script setup>
import interact, { toggleInteract } from "../../store/interact"
</script>

<template>
  <div class="read-layer" :class="{active: interact.toggle}">
    <div class="opacity-layer" @click="toggleInteract(true)">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../css";

#app {
  --interactY: 90px;
  --interactX: 320px;
}

@media only screen and (max-width: $phablet) {
  #app {--interactX: 100vw;}
}

.read-layer {
  background: var(--background);
  padding-bottom: var(--marginxxx);
  position: relative;
  z-index: 1;
  transform:
    translateY(var(--interactY))
    translateX(calc(0px - var(--interactX)));
  transition: .4s ease-in-out;

  &.active {
    transform:
      translateY(0px)
      translateX(0px);
  }
}

.read-layer .opacity-layer {
  cursor: pointer;
  opacity: .1;
  transition: opacity .4s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
}

.read-layer.active .opacity-layer {
    opacity: 1;
    cursor: default;
}
</style>
