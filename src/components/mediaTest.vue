<template>
  <div 
    class="timebar"
    ref="timebar"
    @mousedown="clickStart($event)"
    @mousemove="inputHovered($event)"
    @mouseleave="clickDone($event)"
    @mouseup="clickDone($event)"
    :style="'--transition: ' + transition + 's'"
  >
    <div class="at" :style="'--y: ' + y + '%'">
      <div class="handle left"></div>
      <div class="handle right"></div>
    </div>
  </div>
</template>

<script>
import useQickStore from './shortStore.js'
import { ref, computed } from 'vue'

import { numberToPercent } from '@/utils/utils.js'
import _ from 'lodash'

export default {
  name: "mediaTest",
  setup() {
    //const proximity = 1
    let qs = useQickStore()
    let y = ref(0)
    let hover = ref(0)
    let click = ref(false)

    let transition = computed(() => {
      //doesnt work
      return click.value ? 0.01 : 0.4
    })

    function clickStart(e) {
      y.value = barPercentage(e)
      click.value = true
    }

    function clickDone() {
      click.value = false
      qs.hold(0)
    }

    function inputHovered(e) {
      let hoverPerc = barPercentage(e)
      hover.value = hoverPerc
      if(click.value) y.value = hoverPerc
    }

    let timebar = ref(null);

    function barPercentage(e) {
      const inputWidth = timebar.value.clientWidth
      let client = timebar.value.getBoundingClientRect()
      let x = e.clientX - client.left
      
      let perc = numberToPercent(x, inputWidth)
      perc = _.clamp(perc, 0, 100)
      return perc
    }

    return {
      inputHovered, 
      clickStart, 
      clickDone,
      timebar,
      y,
      hover,
      transition
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
