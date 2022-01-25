<script setup>
import { openPost } from '../../store/post.js'

import Combobox from './filter/combobox.vue'
import FeedFilter from './filter/feedFilter.vue'

import feed from "../../store/feed.js"
import Cell from "./cells/cell.vue"
</script>

<template>
<div class="page">
  <Combobox/>
  <FeedFilter/>
  <div class="feedGrid">
    <Cell 
      v-for="(c, index) in feed" :key="index"
      :cell="c" @click="openPost(c)" 
    />
  </div>
</div>
</template>

<style lang="scss">
@import "../../css";

.feedGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  @media only screen and (max-width: $tablet) {
    grid-template-columns: 1fr;
  }
}
</style>
