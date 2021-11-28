<script setup>
</script>

<template>
  <div class="cell">
    <div class="author"></div>
  </div>
</template>

<style lang="scss" scoped>
  .cell {
    grid-row: span 2;
    @media only screen and (max-width: 850px) {
      grid-row: span 1;
    }
  }
</style>
