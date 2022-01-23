<script setup>
import Cell from "./cell.vue";
</script>

<template>
  <Cell>
    <slot></slot>
  </Cell>
</template>

<style lang="scss" scoped>
  .cellbase {
    grid-column: span 4;
    @media only screen and (max-width: 850px) {
        grid-column: span 2;
    }
  }
</style>
