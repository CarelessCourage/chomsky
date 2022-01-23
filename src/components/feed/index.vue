<script setup>
import { openPost } from '../../store/post.js'

import Combobox from './filter/combobox.vue'
import FeedFilter from './filter/feedFilter.vue'

import Cell from './cells/cell.vue'
import CellFeature from './cells/cell-feature.vue'
import CellImage from './cells/cell-image.vue'


const cells = {
  Cell,
  CellFeature,
  CellImage
}

const feed = [
  {text: "Media image", component: "CellImage", media: "http://chomsky.imgix.net/brewing.jpg?q=20&auto=format,compress&cs=tinysrgb"},
  {text: "this is text", component: "Cell", media: null},
  {text: "this is text", component: "Cell", media: null},
  {text: "this is text", component: "CellFeature", media: null},
  {text: "this is text", component: "Cell", media: null},
  {text: "this is text", component: "Cell", media: null},
]

function pickCell(c = "Cell") {
  return cells[c]
}
</script>

<template>
<div class="page">
  <Combobox/>
  <FeedFilter/>
  <div class="feedGrid">
    <component 
      v-for="(c, index) in feed" 
      :is="pickCell(c.component)" 
      :key="index"
      @click="openPost(c)"
    >
      <img v-if="c.media" :src="c.media" width="150" :alt="c.text">
      <p v-else>{{c.text}}</p>
    </component>


    <CellImage>
      <img src="http://chomsky.imgix.net/brewing.jpg?q=20&auto=format,compress&cs=tinysrgb" width="150" alt="Vue.js">
    </CellImage>
    <Cell>
      <p>In contemporary use, the <span>practice and study</span> of typography include a broad range, 
        covering all aspects of letter design and application, both mechanical (typesetting,
        type design, and typefaces) and manual (handwriting and calligraphy). 
      </p>
    </Cell>
    <Cell>
      <h3>this is text</h3>
    </Cell>
    <CellFeature>
      <h3>This is a title</h3>
    </CellFeature>
    <Cell>
      <p><span>In contemporary use,</span> the practice and study of typography include a broad range, 
        covering all aspects of letter design and application, both mechanical (typesetting,
        type design, and typefaces) and manual (handwriting and calligraphy). 
      </p>
    </Cell>
    <Cell>
      <p>In contemporary use, the practice and study of typography include a broad range, 
        covering all aspects of letter design and application,
      </p>
    </Cell>

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
