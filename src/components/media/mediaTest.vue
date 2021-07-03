<template>
  <div
    class="timebar" ref="timebar"
    @mousedown="clickStart()"
    v-holdpress="() => hold++"
  >
    <div class="at">
      <div class="handle left"></div>
      <div class="handle right"></div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
//import _ from 'lodash'

import { cssVariable } from '@/utils/utils.js'
import barHandler from './utils/index.js'

export default {
  name: "mediaTest",
  setup() {
    let hold = ref(0)
    let click = ref(false)

    let barLeft = ref(0)
    let barRight = ref(0)

    let shrink = ref(false)

    let timebar = ref(null)
    let { holdMousePos, barPercentage } = barHandler(timebar, click, () => clickDone())
    watch(holdMousePos, (newValue) => {
      shrink.value ?
        barLeft.value = newValue : 
        barRight.value = newValue 
    })

    function clickStart() {
      let limit = barPercentage(timebar) + 5
      console.log(limit);
      if(limit < barRight.value) {
        shrink.value = true
      } else {
        shrink.value = false
      }

      click.value = true
    }

    function clickDone() {
      hold.value = 0
      click.value = false
    }

    /*cssVariable(
      '--transition',
      hold, (value) => value > 0 ? 'none' : 'width 0.4s ease-in-out',
      timebar
    )*/

    cssVariable(
      '--right',
      barRight, (value) => value + '%',
      timebar
    )

    cssVariable(
      '--left',
      barLeft, (value) => value + '%',
      timebar
    )

    return {
      clickStart,
      timebar,
      hold
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
  --transition: 0.04s;
  --right: 50%;
  --left: 0%;
}

.timebar .at {
  position: relative;
  height: 100%;
  left: var(--left);
  //width: var(--width);
  position: absolute;
  top: 0px;
  left: var(--left);
  right: calc(100% - var(--right));
  background: turquoise;
  transition: var(--transition);
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
