<template>
  <div 
    class="timebar" ref="timebar"
    @mousedown="clickStart()"
    v-holdpress="clickHold"
    :style="transitionCSS"
  >
    <div class="at" :style="formatedCSS">
      <div class="handle left"></div>
      <div class="handle right"></div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useCssVar } from '@vueuse/core'
import barHandler from './utils/index.js'

export default {
  name: "mediaTest",
  setup() {
    let hold = ref(0)
    let click = ref(false)

    let timebar = ref(null)
    let { timey, barPercentage } = barHandler(timebar, click, () => clickDone())

    function clickStart() {
      timey.value = barPercentage(timebar)
      click.value = true
    }

    function clickDone() {
      hold.value = 0
      click.value = false
    }

    function clickHold() {
      hold.value++
    }

    const transition = useCssVar('--color', el)

    let transitionCSS = computed(() => {
      let value = hold.value > 1 ? 0.01 : 0.4
      return '--transition: ' + value + 's'
    })

    let formatedCSS = computed(() => {
      return '--y: ' + timey + '%'
    })

    return {
      clickStart,
      clickHold,
      timebar,
      transitionCSS,
      formatedCSS,
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
