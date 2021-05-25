<template>
  <div class="container">
    <div class="cap"></div>
    <div class="bar volume">
      <div class="max level">
        <div class="level"></div>
      </div>
    </div>
    <div class="bar time">
      <div class="progress level"></div>
      <div class="buffer"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "mediaControls",
  components: {},
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@use "@/css" as *;

.container {
  --radius: 2em;
  width: 70vw;
  position: fixed;
  bottom: 20px;
  left: 15vw;
  display: grid;
  grid-template-columns: 3em 1fr;
}

.cap {
  grid-row: span 2;
  background: $flavor;
  border-radius: var(--radius) 0em 0em var(--radius);
}

.bar {
  height: 2em;
  border-radius: 0em var(--radius) var(--radius) 0em;
  position: relative;
  &.time {
    background: $fg;
  }
  &.volume {
    height: 1.5em;
  }
  .level {
    position: relative;
    z-index: 5;

    background: $flavor;
    height: 100%;
    width: 40%;
    &.max {
      width: 15%;
      background: $fg;
    }

    border-radius: 0em var(--radius) var(--radius) 0em;

    will-change: width;
    transition: width 0.4s ease-in-out;
  }
  .buffer {
    position: absolute;
    top: 0px;
    left: 0px;

    background: rgba($flavor, 0.5);
    height: 100%;
    width: 40%;

    border-radius: 0em var(--radius) var(--radius) 0em;

    will-change: width;
    transition: width 0.4s ease-in-out;
  }
}
</style>
