<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="desktop">
    <div class="title">
      <div>
        <h2>financial</h2>
        <h1>servi<span>ces</span></h1>
      </div>
    </div>
    <div class="services">
      <div><h2>excha<span>nge</span></h2></div>
      <div><h2>excha<span>nge</span></h2></div>
      <div><h2>excha<span>nge</span></h2></div>
      <div><h2>excha<span>nge</span></h2></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services {
  display: grid;
  padding: 12em 6em var(--marginx);
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(12, 1fr);

  --one: #000000;
  --two: #8000FF;
  --three: red;
  --four: #00FFE2;

  div {
    background: red;
    border-radius: 2em;
    padding: calc(var(--margin) + 5px);
    display: grid;
    align-items: end;

    h2 {
      display: flex;
      flex-direction: column;
      color: var(--background);
      line-height: 23px;
      font-size: 35px;
      font-weight: 400;
    }
    
    &:nth-of-type(1) {
      grid-row: span 3;
      background: var(--one);
    }
    &:nth-of-type(2) {
      grid-row: span 6;
      background: var(--three);
    }
    &:nth-of-type(3) {
      grid-row: span 9;
      background: var(--two);
    }
    &:nth-of-type(4) {
      grid-row: span 6;
      background: var(--four);
    }
  }
}

.desktop {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
}

.title {
  display: grid;
  align-items: end;
  border-right: var(--foreground) solid 3px;
  height: 100%;
  div {
    padding-bottom: var(--marginx);
    padding-right: 60px;
  }
  h1 {
    display: flex;
    flex-direction: column;
    text-align: right;
    line-height: 60px;
    text-transform: uppercase;
    font-weight: 900;
  }
  h2 {
    color: red;
    text-align: right;
    text-transform: uppercase;
    font-weight: 900;
  }
}
</style>
