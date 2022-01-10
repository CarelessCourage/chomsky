<script setup>
defineProps({
  color: Number
})
</script>

<template>
<div class="node">
  <p class="">Samuel <br> Bednarz</p>
  <div class="d"></div>
  <div class="d"></div>
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

  //border: solid 3px var(--background);

  transition: .2s ease-in-out;

  &:nth-of-type(1) {
    --sound: calc((v-bind(color) / 10) * 1px);
    .d {
      background-image: url("../assets/headshot2.jpg");
    }
  }


  p {
    user-select:none;
    opacity: 0;
    top: 1rem;
    left: 1rem;
    position: absolute; z-index: 20;
    font-variation-settings: "wght" 800, "wdth" 100;
    transform: translate(-2em, -0rem);
    transition: .4s ease-in-out;
  }

  &:hover {
    --sound: 10px;
    border: solid 3px var(--background);

    height: 6em;
    width: 8em;

    p {
      opacity: 1;
      transform: translate(-0em, -0rem);
    }
    .d {
      transition: .2s ease-in-out;
    }
  }
  &:active {
    --sound: 20px;
    color: var(--foreground);
    background: var(--background);
    transition: .2s ease-in-out;

    p {
      transition: .001s ease-in-out;
    }

    .d {
      background-color: red;
      transition: .1s ease-in-out;
    }
  }
}

.d {
  --size: 3em;
  position: absolute;
  background: var(--flavor);

  background-image: url("../assets/headshot.jpg");
  background-size: cover;
  background-position: center;

  opacity: 0.5;
  height: var(--size);
  width: var(--size);
  border-radius: 100%;

  transition: .002s ease-in-out;

  &:nth-of-type(1) {
    transform: translate(var(--sound), 0px);
  }
  &:nth-of-type(2) {
    transform: translate(calc(0px - var(--sound)), 0px);
  }
}

.node:nth-of-type(2) .d {
  background-image: url("../assets/headshot3.jpg");
}

.node:nth-of-type(3) .d {
  background-image: url("../assets/headshot4.jpg");
}

/*.node:nth-of-type(4) .d {
  background-image: url("../assets/headshot5.jpg");
}

.node:nth-of-type(5) .d {
  background-image: url("../assets/headshot6.jpg");
}

.node:nth-of-type(6) .d {
  background-image: url("../assets/headshot7.jpg");
}

.node:nth-of-type(7) .d {
  background-image: url("../assets/headshot8.jpg");
}

.node:nth-of-type(8) .d {
  background-image: url("../assets/headshot9.jpg");
}

.node:nth-of-type(9) .d {
  background-image: url("../assets/headshot10.jpg");
}

.node:nth-of-type(10) .d {
  background-image: url("../assets/headshot11.jpg");
}*/
</style>