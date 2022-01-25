<script setup>
import Authordot from "../../elements/authordot.vue";

defineProps({
  class: String
})
</script>

<template>
  <div class="cell cellbase" :class="class">
    <slot></slot>
    <Authordot/>
  </div>
</template>

<style lang="scss">
.cellbase {
  max-height: 500px;
  background: var(--shade);
  border-radius: var(--radius);
  padding: var(--marginx);

  display: flex;
  align-items: center;
  justify-content: center;
  
  p {
    justify-self: start;
    align-self: start;
  }
}

.cell {
  cursor: pointer;
  position: relative; z-index: 2;
  grid-column: span 2;
}

.cell .dot {
  position: absolute;
  bottom: calc(0px - var(--size) / 2);
  .author:after {
    opacity: 0.69;
  }
}

//Responsive ring
.cell h1, 
.cell h2, 
.cell h3, 
.cell p { 
  position: relative; 
  z-index: 20; 
}

.cell:after {
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

.cell:before {
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

.cell:hover:before {
  transform: scale(1.1, 1.2);
}

.cell:active:before {
  transform: scale(1.05, 1.15);
}

.cell:hover .dot {
  --size: 12rem;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  & .author:after {
    opacity: 0.69;
    background: var(--shade);
  }
}

</style>