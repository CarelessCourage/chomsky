<template>
<div class="flex dot">
  <div class="author img"></div>
</div>
</template>

<style lang="scss" scoped>
@import "../../css";

.flex {
  --size: 3em;
  height: var(--size); 
  width: var(--size);
  
  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: .2s ease-in-out;

  @media only screen and (max-width: $tablet) {
    --size: 30px;
  }
  .author {
    position: relative;
    width: 100%; height: 100%;
    overflow: hidden;
    border-radius: 100%;
  
    background-color: var(--flavor);
    background-image: url("../../assets/headshot18.jpg");
    background-size: cover;
    background-position: center;

    &:after {
      content: "";

      position: absolute;
      top: 0px; left: 0px;
      width: 100%; height: 100%;

      opacity: 0.5;
      background: var(--flavor);
      transition: .2s ease-in-out;
    }
  }
}

</style>