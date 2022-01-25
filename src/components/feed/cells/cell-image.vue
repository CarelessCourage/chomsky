<script setup>
import Cellbase from "./cell-base.vue";
</script>

<template>
  <Cellbase class="imgcell">
    <slot></slot>
  </Cellbase>
</template>

<style lang="scss">
  .imgcell.cellbase {
    padding: 0px;
    grid-row: span 2;
    @media only screen and (max-width: 850px) {
      grid-row: span 1;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: var(--radius);
    }
  }
</style>
