<script setup>
</script>

<template>
  <div class="intro">
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

  &:hover {
    width: 140vw;
    height: 140vw;
    bottom: calc((140vw / 2) * -1);
    //animation: sundial 1s infinite cubic-bezier(.76,.05,.86,.06) alternate-reverse;;
  }

  .sun {
    --radius: 37vw;
    width: var(--radius);
    height: var(--radius);
    background-color: white;
    border-radius: 100%;
  }
}


@keyframes sundial {
  0% { width: 55vw; height: 55vw; bottom: calc((55vw / 2) * -1);}
  30% { width: 55vw; height: 55vw; bottom: calc((55vw / 2) * -1);}
  80% { width: 140vw; height: 140vw; bottom: calc((140vw / 2) * -1);}
  100% { width: 140vw; height: 140vw; bottom: calc((140vw / 2) * -1);}
}


.intro {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100vh;
  width: 100vw;

  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  h1.logo {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: -20px;
    font-size: clamp(4em, 12vw, 12em);
  }
}

</style>
