<script setup>
</script>

<template>
  <div class="cell">
    <div class="author"></div>
  </div>
</template>

<style lang="scss" scoped>
  .cell {
    grid-column: span 4;
    @media only screen and (max-width: 850px) {
        grid-column: span 2;
    }
  }

  .feedGrid .author {
    @media only screen and (min-width: 850px) {
        --size: 4.5em;
    }
  }
</style>
