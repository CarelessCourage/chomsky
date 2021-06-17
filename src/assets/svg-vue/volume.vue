<template>
  <div class="svg" :class="{slide: status <= 0}">
    <div :class="{rotate: status <= 0}">
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 62.15 54.88"
      >
        <title>volume</title>
        <path
          v-if="status > 50"
          d="M62.15,27.68v.06a25.38,25.38,0,0,1-24,25.34,1.32,1.32,0,0,1-1.37-1.33v-6a1.32,1.32,0,0,1,1.2-1.32A16.73,16.73,0,0,0,53.48,27.72v0A16.71,16.71,0,0,0,37.93,11a1.32,1.32,0,0,1-1.2-1.32V4.21c0-1.29.62-1.91,1.37-1.88a25.43,25.43,0,0,1,24,25.35Z"
        />
        <path
          v-if="status > 10"
          d="M49.25,27.7v0a12.52,12.52,0,0,1-8.12,11.71,3.28,3.28,0,0,1-4.4-3.09V19.07A3.27,3.27,0,0,1,41.13,16a12.66,12.66,0,0,1,4.46,2.87A12.41,12.41,0,0,1,49.25,27.7Z"
        />
        <path
          d="M32.77,1.06V53.82a1.05,1.05,0,0,1-1.6.9L14.68,44.77a1,1,0,0,0-.54-.15H1.06A1.06,1.06,0,0,1,0,43.56V11.32a1.06,1.06,0,0,1,1.06-1.06H14.14a1,1,0,0,0,.54-.15L31.17.15A1.06,1.06,0,0,1,32.77,1.06Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueSVG_trash",
  props: {
    status: {
      type: Number,
      default: 60
    }
  },
};
</script>

<style lang="scss" scoped>
.svg {
  transition: 0.4s;
  &.slide {
    transform: translateX(-15px) translateX(5px);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .rotate {
    transform: rotate(90deg) translateX(5px);
  }
}
</style>