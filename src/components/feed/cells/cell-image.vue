<script setup>
import Cell from "./cell.vue";
</script>

<template>
  <Cell class="imgcell">
    <slot></slot>
  </Cell>
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
