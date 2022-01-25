<script setup>
import Cellbase from "./cell-base.vue";
</script>

<template>
  <Cellbase>
    <slot></slot>
  </Cellbase>
</template>

<style lang="scss" scoped>
  .cellbase {
    grid-column: span 4;
    @media only screen and (max-width: 850px) {
        grid-column: span 2;
    }
  }
</style>
