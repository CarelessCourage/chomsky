<template>
<div class="flex d">
  <div class="author"></div>
</div>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  .author {
    position: relative;
    background-image: url("../../assets/headshot18.jpg");
    background-size: cover;
    background-position: center;
    &:after {
      opacity: 0.5;
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: var(--flavor)
    }
  }
}

</style>