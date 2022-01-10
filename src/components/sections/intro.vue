<script setup>
defineProps({
  post: Boolean,
})
</script>

<template>
  <div class="intro" :class="{active: !post}">
    <div class="sunrise">
      <div class="sun"></div>
    </div>
    <h1 class="logo">Chomsky</h1>
  </div>
</template>

<style lang="scss" scoped>
.sunrise {
  --radius: 55vw;
  width: var(--radius);
  height: var(--radius);
  background-color: #2CFFE2;
  border-radius: 100%;
  position: absolute;
  bottom: calc((var(--radius) / 2) * -1);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.4s;

  //&:hover {
    //width: 140vw;
    //height: 140vw;
    //bottom: calc((140vw / 2) * -1);
    //animation: sundial 1s infinite cubic-bezier(.76,.05,.86,.06) alternate-reverse;;
  //}

  .sun {
    --radius: 37vw;
    width: var(--radius);
    height: var(--radius);
    background-color: var(--background);
    border-radius: 100%;
    animation: zero 5s ease-in-out forwards;
  }
}

@keyframes zero {
  0% {
    width: 56vw;
    height: 56vw;
  }

  40% {
    width: 56vw;
    height: 56vw;
  }

  80% {
    width: 37vw;
    height: 37vw;
  }

  100% {
    //width: 0px;
    //height: 0px;
  }
}


@keyframes sundial {
  0% { width: 55vw; height: 55vw; bottom: calc((55vw / 2) * -1);}
  30% { width: 55vw; height: 55vw; bottom: calc((55vw / 2) * -1);}
  80% { width: 140vw; height: 140vw; bottom: calc((140vw / 2) * -1);}
  100% { width: 140vw; height: 140vw; bottom: calc((140vw / 2) * -1);}
}

.intro {
  max-height: 200vh;
  transition: all 0.4s ease-in-out;
  &:not(.active) {
    max-height: 0vh;
  }
}

.intro {
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
    //color: var(--flavor);
    transition: 0.4s ease-in-out;
    animation: varia2 4s ease-in-out forwards;
  }

  //&:hover h1.logo {
  //  font-variation-settings: "wght" 280, "wdth" 200;
  //}
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
    line-height: 7.2rem;
    font-variation-settings: "wght" 900, "wdth" 100;
  }
}


@keyframes varia {
  0% { 
    line-height: 5rem;
    font-variation-settings: "wght" 900, "wdth" 100;
  }
  20% {
    line-height: 20rem;
    font-size: 60rem;
    letter-spacing: -3rem;
    font-variation-settings: "wght" 280, "wdth" -50;
  }
  32% {
    line-height: 5rem;
    letter-spacing: 0rem;
    font-variation-settings: "wght" 280, "wdth" -50;
  }
  64% {
    letter-spacing: -2rem;
    font-variation-settings: "wght" 280, "wdth" 200;
  }
  100% { 
    line-height: 5rem;
    font-variation-settings: "wght" 900, "wdth" 100;
  }
}


</style>
