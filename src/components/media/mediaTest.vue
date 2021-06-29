<template>
  <div 
    class="timebar"
    ref="timebar"
    @mousedown="clickStart()"
    v-holdpress="clickHold"
    :style="'--transition: ' + transition + 's'"
  >
    <div class="at" :style="'--y: ' + timey + '%'">
      <div class="handle left"></div>
      <div class="handle right"></div>
    </div>
  </div>
</template>

<script>
import { ref, computed, } from 'vue'
import barHandler from './utils/index.js'

export default {
  name: "mediaTest",
  setup() {
    let hover = ref(0)
    let hold = ref(0)
    let click = ref(false)

    let timebar = ref(null)
    let {
      timey, 
      mouseWatch, 
      barPercentage
    } = barHandler(timebar, clickDone())

    function clickStart() {
      timey.value = barPercentage(timebar)
      click.value = true
      mouseWatch.resume()
    }

    function clickDone() {
      hold.value = 0
      click.value = false
      mouseWatch.pause()
    }

    function clickHold() {
      hold.value++
    }

    let transition = computed(() => {
      return hold.value > 1 ? 0.01 : 0.4
    })

    return {
      clickStart, 
      clickDone,
      clickHold,
      hover,
      timebar,
      transition,
      timey,
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@/css" as *;
.timebar {
  position: absolute;
  height: 100%;
  width: 100%;
  background: green;
}

.timebar .at {
  position: relative;
  height: 100%;
  width: var(--y);
  background: turquoise;
  transition: width var(--transition) ease-in-out;
  .handle {
    content: "";
    height: 100%;
    width: .5em;
    max-width: 50%;
    background: blue;
    position: absolute;
    top: 0px;
    transition: .4s ease-in-out;
    cursor: pointer;
    &:hover {
      width: 2em;
      opacity: .5;
    }
  }
  .handle.right {
    right: 0px;
  }
  .handle.left {
    left: 0px;
  }
}
</style>
