<script setup>
import Authordot from "../elements/authordot.vue";
defineProps({
  color: Number
})
</script>

<template>
<div class="node">
  <p class="">Samuel <br> Bednarz</p>
  <Authordot/>
  <Authordot/>
</div>
</template>

<style lang="scss">
.node {
  height: 4em;
  width: 4em;

  --sound: 0px;
  position: relative;
  border: solid 0px var(--background);
  border-radius: 0.5em;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  transition: .2s ease-in-out;

  &:nth-of-type(1) {
    --sound: calc((v-bind(color) / 10) * 1px);
  }
}

.node p {
  user-select:none;
  opacity: 0;
  top: 1rem;
  left: 1rem;
  position: absolute; z-index: 20;
  font-variation-settings: "wght" 800, "wdth" 100;
  transform: translate(-2em, -0rem);
  transition: .4s ease-in-out;
}

.node:hover {
  --sound: 10px;
  border: solid 3px var(--background);
  height: 6em;
  width: 8em;
  & p {
    opacity: 1;
    transform: translate(-0em, -0rem);
  }
}

.node:active {
  --sound: 20px;
  color: var(--foreground);
  background: var(--background);
  transition: .2s ease-in-out;

  p {
    transition: .001s ease-in-out;
  }
}


.node .dot {
  --size: 3em;
  position: absolute;
  border-radius: 100%;
  opacity: 0.5;

  transition: .002s ease-in-out;

  &:nth-of-type(1) {
    transform: translate(var(--sound), 0px);
  }
  &:nth-of-type(2) {
    transform: translate(calc(0px - var(--sound)), 0px);
  }
}
</style>