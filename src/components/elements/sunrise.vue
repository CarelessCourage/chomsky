<template>
  <div class="sunrise">
    <div class="sun">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../css";

.sunrise {
  --radius: 55vw;
  @media only screen and (max-width: $tablet) {
    --radius: 65vw;
  }
  @media only screen and (max-width: $phablet) {
    --radius: 85vw;
  }
}

.sun {
  --stroke: 250px;
  @media only screen and (max-width: $tablet) {
    --stroke: 150px;
  }
}

.sunrise {
  width: var(--radius);
  height: var(--radius);
  
  background-color: var(--flavor);
  border-radius: 100%;
  position: absolute;
  bottom: calc((var(--radius) / 2) * -1);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.4s;
  .sun {
    width: calc(var(--radius) - var(--stroke));
    height:  calc(var(--radius) - var(--stroke));
    background-color: var(--shade);
    border-radius: 100%;

    overflow: hidden;
    position: relative;

    display: flex;
    justify-content: center;
    align-content: center;

    animation: zero 5s ease-in-out forwards;
    transition: 0.4s ease-in-out;
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
}


</style>
