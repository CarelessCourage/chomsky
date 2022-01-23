<script setup>
import Sunrise from "../elements/sunrise.vue"
</script>

<template>
  <div class="intro">
    <Sunrise>
      <img src="../../assets/headshot18.jpg" alt="">
    </Sunrise>
    <div class="cellbase" v-if="false">
      <p>In contemporary use, the practice and study of typography include a broad range, 
        covering all aspects of letter design and application,</p>
    </div>
    <h1 class="logo">Chomsky</h1>
  </div>
</template>

<style lang="scss">
.intro .sun img {
  position: relative;
  height: 30em; width: 30em;
  border-radius: 100%;
  top: 55%; 
  background: var(--flavor);
  object-fit: cover;
}

.intro .cellbase {
  height: max-content;
  position: absolute;
  bottom: 13vw;
  z-index: 20;
  color: var(--background);
  &:after {
    background: var(--foreground);
  }
}

.intro {
  max-height: 200vh;
  transition: all 0.4s ease-in-out;
}

.intro {
  //background: var(--shade);
  display: flex;
  justify-content: center;
  align-items: end;

  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;

  overflow: hidden;
  position: relative;
  h1.logo {
    cursor: pointer;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: -20px;
    font-size: clamp(4em, 12vw, 12em);
    font-family: "Flexa", sans-serif;
    transition: 0.4s ease-in-out;
    animation: varia2 4s ease-in-out forwards;
  }
}

@keyframes varia2 {
  0% {
    opacity: 0;
    margin-bottom: 12rem;
    letter-spacing: -2rem;
    font-variation-settings: "wght" 280, "wdth" 200;
  }
  80% {
    opacity: 1;
  }
  100% {
    line-height: 7.8rem;
    font-variation-settings: "wght" 900, "wdth" 100;
  }
}

</style>
