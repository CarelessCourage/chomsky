<script setup>
import authordot from "../shared/authordot.vue";
</script>

<template>
  <div class="cell">
    <slot></slot>
    <authordot/>
  </div>
</template>

<style lang="scss" scoped>
  .cell {
    grid-column: span 4;
    @media only screen and (max-width: 850px) {
        grid-column: span 2;
    }
  }
</style>
