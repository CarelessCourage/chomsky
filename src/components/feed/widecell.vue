<script setup>
import authordot from "../shared/authordot.vue";
</script>

<template>
  <div class="cell widecell">
    <slot></slot>
    <authordot/>
  </div>
</template>

<style lang="scss">
  .cell.widecell {
    grid-row: span 2;
    @media only screen and (max-width: 850px) {
      grid-row: span 1;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: var(--radius);
    }
  }
</style>
