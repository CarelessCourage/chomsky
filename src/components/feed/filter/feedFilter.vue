<script setup>
import {ref, watch} from "vue"
import { useMousePressed } from '@vueuse/core'

const feedFilter = ref(null);

const mouseOutside = ref(true);
const { pressed } = useMousePressed()
watch(pressed, () => {
  mouseOutside.value ?
    changeFilterStatus("default") :
    null
})

const filterStatus = ref("default")
function changeFilterStatus(newStatus) {
  filterStatus.value === "default" ?
    filterStatus.value = newStatus :
    filterStatus.value = "default"
}

</script>

<template>
<div
  ref="feedFilter"
  class="feedFilter" 
  :class="filterStatus"
>
  <h1 @click="changeFilterStatus(`type`)">Feed</h1>
  <div 
    class="solid"
    @mouseover="mouseOutside = false"
    @mouseleave="mouseOutside = true"
  ></div>
  <div class="rangeWrapper" @click="changeFilterStatus(`range`)">
    <p class="web"><span>global</span></p>
    <p class="details">15km</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.solid {
  height: 0px;
  border-top: 2px solid var(--foreground);
  transition: 0.4s ease-in-out;
  @media only screen and (max-width: 450px) {
    border-top: 0px dotted var(--foreground);
  }
}

.type .rangeWrapper,
.range h1 {
  max-width: 0px;
  overflow: hidden;
}

.feedFilter:not(.default) {
  padding-bottom: var(--marginx);
  .solid {
    height: 300px;
    border-top: 0px solid var(--foreground);
    transform: translateY(0em);
    background-color: var(--shade);
    border-radius: var(--radius);
  } 
}

.feedFilter {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: var(--margin);
  padding-bottom: var(--margin);
  transition: 0.2s;
  &:not(.default) {
    grid-gap: 0px;
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding-bottom: var(--marginx);
  }
}

@mixin makeButton {
  background-color: var(--shade);
  border-radius: var(--radius);
  padding: 12px;
  h2 {opacity: 1}
}

h1, 
.rangeWrapper {
  cursor: pointer;
  transition: 0.8s;
  overflow: hidden;
  max-width: 200px;
  padding: 1rem 0px 0.5rem;
  @media only screen and (max-width: 450px) {line-height: 24px;}
  &:hover {@include makeButton}
  p {text-align: right;}
}

.range .rangeWrapper,
.type h1 {
  @include makeButton
}

.type h1 {
  border-radius: var(--radius) 0px 0px var(--radius);
}

.range .rangeWrapper {
  border-radius: 0px  var(--radius) var(--radius) 0px;
}

.rangeWrapper {
  @media only screen and (max-width: 450px) {
    h2 {
      opacity: 0.2;
      transition: .4s ease-in-out;
    }
    p {display: none}
  }
}

</style>
