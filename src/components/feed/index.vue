<script setup>
import { togglePost } from '../../store/post.js'

import Combobox from './filter/combobox.vue'
import FeedFilter from './filter/feedFilter.vue'
import Cell from './cells/cell.vue'
import Longcell from './cells/longcell.vue'
import Widecell from './cells/widecell.vue'
</script>

<template>
<div class="page">
  <Combobox/>
  <FeedFilter/>
  <div class="feedGrid" @click="togglePost()">
    <Widecell>
      <img src="http://chomsky.imgix.net/brewing.jpg?q=20&auto=format,compress&cs=tinysrgb" width="150" alt="Vue.js">
    </Widecell>
    <Cell>
      <p>In contemporary use, the <span>practice and study</span> of typography include a broad range, 
        covering all aspects of letter design and application, both mechanical (typesetting,
        type design, and typefaces) and manual (handwriting and calligraphy). 
      </p>
    </Cell>
    <Cell>
      <h3>this is text</h3>
    </Cell>
    <Longcell>
      <h1>This is a title</h1>
    </Longcell>
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
  //grid-auto-rows: minmax(200px, auto);
  grid-gap: 50px;
  @media only screen and (max-width: $tablet) {
    grid-template-columns: 1fr;
  }
}

.author {
  --size: 40px;
  
  background-color: var(--flavor);
  border-radius: 100%;
  overflow: hidden;

  width: var(--size);
  height: var(--size);
  
  z-index: 3;
  position: absolute;
  bottom: calc(0px - var(--size) / 2);

  @media only screen and (max-width: $tablet) {
    --size: 30px;
  }
}

.cell {
  cursor: pointer;
  //max-width: 520px;
  max-height: 500px;
  background: var(--shade);
  border-radius: var(--radius);
  position: relative; z-index: 2;
  grid-column: span 2;
  padding: var(--marginx);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
   justify-self: start;
   align-self: start;
  }

  * {
    z-index: 3;
  }

  &:hover {
    * {
      //position: relative;
      z-index: 3000;
    }
  }

  &:hover:after {
    z-index: 2000;
  }

  &:hover:before {
    z-index: 1000;
    transform: scale(1.1, 1.2);
  }

  &:active:before {
    transform: scale(1.05, 1.15);
  }

  &:after {
    content: "";
    position: absolute; z-index: -4;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: var(--shade);
    opacity: 1;
    border-radius: var(--radius);
  }
  
  &:before {
    content: "";
    position: absolute; z-index: -5;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: var(--flavor);
    opacity: 1;
    border-radius: var(--radius);
    transition: transform 0.2s ease-in-out;
  }
}
</style>
