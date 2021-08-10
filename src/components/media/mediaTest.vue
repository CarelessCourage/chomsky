<template>
  <div
    class="timebar" ref="timebar"
    @mousedown="clicked = true"
    v-holdpress="() => hold++"
  >
    <div class="at">
      <div class="handle left"></div>
      <div class="handle right"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import { cssVariable } from '@/utils/utils.js'
import { barHandles, barClick } from './utils/index.js'

export default {
  name: "mediaTest",
  setup() {
    let hold = ref(0)
    let clicked = ref(false)

    let timebar = ref(null)
    let { barPerc } = barClick(timebar, clicked, () => clickDone(), true)
    let { barLeft, barRight } = barHandles(barPerc, false)

    function clickDone() {
      hold.value = 0
      clicked.value = false
    }

    cssVariable(
      '--transition',
      hold, (value) => value > 0 ? 'none' : '0.4s',
      timebar
    )

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
      clicked,
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
  cursor: pointer;
  --transition: .4s;
  --right: 50%;
  --left: 0%;
}

.timebar .at {
  position: relative;
  height: 100%;
  left: var(--left);
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
