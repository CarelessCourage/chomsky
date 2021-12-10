<script setup>
import Combobox from './feed/combobox.vue'
import FeedFilter from './feed/feedFilter.vue'
import Cell from './feed/cell.vue'
import Longcell from './feed/longcell.vue'
import Widecell from './feed/widecell.vue'
</script>

<template>
<div class="page">
  <Combobox/>
  <FeedFilter/>
  <div class="feedGrid">
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
  position: relative;
  grid-column: span 2;
  padding: var(--marginx);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    justify-self: start;
    align-self: start;
  }
}
</style>
