<script setup>
import Node from "./node.vue"
import audio from "../../store/audio"
</script>

<template>
<div class="interact">
  <div class="header">
    <h1 class="logo">Chomsky {{audio.volume}}</h1>
  </div>
  <div class="panel">
    <div class="listeners">
      <p class="web">Room:</p>
      <p><span> 11 / 22 </span></p>
    </div>
    <div class="audioNode">
      <Node :color="audio.volume"/>
      <Node/>
      <Node/>
      <Node/>
      <Node/>
      <Node/>
      <Node/>
      <Node/>
      <Node/>
      <Node/>
      <Node/>
    </div>
    <div class="listeners">
      <p class="web">Listeners:</p>
      <p><span> 45 </span></p>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.listeners {
  //background: var(--flavor);
  max-width: 100%;
  padding: 1rem;
  padding-left: 4.5rem;
  //max-height: 4.5rem;
  //border-radius: 0.5rem;
  //border-top: solid 3px var(--background);
  overflow: hidden;
  p {
    font-size: 2rem !important;
    font-variation-settings: "wght" 800, "wdth" 100;
    letter-spacing: 1px;
    text-transform: uppercase;
    span {
      font-size: 4rem !important;
      line-height: 4rem;
      font-family: "Flexa", sans-serif;
    }
  }
}

.audioNode {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-rows: min-content;
  justify-content: center;  

  gap: 0.5em; padding: 1em;

  height: 100%;

  .node {
    justify-self: center;
    align-self: center;
  }
}

.header h1.logo {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 70px;
  letter-spacing: -0.15rem;
  line-height: 0.64rem;
  padding-top: 0.08rem;
  font-family: "Flexa", sans-serif;
}

.interact {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  width: calc(98.9vw);
  height: 100vh;
  color: var(--background);
  background: var(--foreground);
}

.header {
  grid-column: span 2;
  background: var(--foreground);
  height: var(--interactY);
  display: grid;
  align-items: center;
}

.panel {
  background: red;
  grid-row: 2;
  grid-column: 2 / span 1;
  background: var(--foreground);
  width: var(--interactX);
  height: 100%;
  display: grid;
}
</style>