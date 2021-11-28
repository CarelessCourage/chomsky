<script setup>
import Combobox from './combobox.vue'
import FeedFilter from './feedFilter.vue'
import Cell from './cell.vue'
import Longcell from './longcell.vue'
import Widecell from './widecell.vue'
</script>

<template>
  <Combobox/>
  <FeedFilter/>
  <div class="feedGrid">
    <Widecell />
    <Cell />
    <Cell />
    <Longcell />
    <Cell />
    <Cell />
  </div>
</template>

<style lang="scss">
.feedGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 50px;
  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
}

.author {
  --size: 3em;
  
  background-color: var(--flavor);
  border-radius: 100%;
  overflow: hidden;

  width: var(--size);
  height: var(--size);
  
  z-index: 3;
  position: absolute;
  bottom: calc(0px - var(--size) / 2);
}

.cell {
  background: var(--shade);
  border-radius: var(--radius);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-column: span 2;
}
</style>
