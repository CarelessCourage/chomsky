<template>
  <div
    id="mediaSlider"
    :class="{debug: debug}"
    @mousedown="clickStart($event)"
    @mousemove="inputHovered($event)"
    @mouseup="clickDone($event)"
    v-holdpress="clickHold"
  >
    <input class="marker" type="range" min="0" max="100" :value="$store.state.media.timeui.marker">
    <input class="present" type="range" min="0" max="100" :value="$store.state.media.timeui.present">
    <input class="future" type="range" min="0" max="100" :value="$store.state.media.timeui.future.y">
    <input class="future" type="range" min="0" max="100" :value="$store.state.media.timeui.future.x">
  </div>
</template>

<script>
import useQickStore from './shortStore.js'
import { numberToPercent } from '@/utils/utils.js'
import { useStore } from 'vuex'
import _ from 'lodash'

export default {
  name: "mediaSlider",
  props: {
    debug: {
      type: Boolean,
      default: true
    },
  },
  setup() {
    const proximity = 1
    const store = useStore()
    let qs = useQickStore()

    function clickStart() {
      qs.click(true)
      qs.marker(true)
      qs.clip(true)
    }

    function clickDone(e) {
      let fut = store.state.media.timeui.future.y
      let pre = store.state.media.timeui.present
   
      let perc = barPercentage(e)
      let onPresent = Math.abs(pre - perc) < proximity
      let onFuture = Math.abs(fut - perc) < proximity

      if(!onPresent && !onFuture) fut = perc
      if(onFuture) {
        pre = perc
        qs.marker(false)
        qs.clip(false)
      }

      //Send time info
      qs.present(pre)
      qs.futureX(pre)
      qs.futureY(fut)

      //Reset enact info
      qs.hold(0)
      qs.click(false)
    }

    function inputHovered(e) {
      let value = barPercentage(e)
      store.state.media.enact.hold > 0 ?
        qs.futureY(value) : 
        qs.marker(value)  
    }

    function clickHold() {
      let newValue = store.state.media.enact.hold + 1
      qs.hold(newValue)
    }

    function barPercentage(e) {
      const inputWidth = e.target.clientWidth
      let perc = numberToPercent(e.offsetX, inputWidth)
      perc = _.clamp(perc, 0, 100)
      return perc
    }

    return {
      inputHovered, 
      clickStart, 
      clickHold, 
      clickDone,
    }
  },
};
</script>

<style lang="scss" scoped>
@use "@/css" as *;
#mediaSlider {
  --opacity: 0;
  opacity: var(--opacity);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 500;
}

#mediaSlider.debug {
  --opacity: 1;
}

input {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  background: transparent; /* Otherwise white in Chrome */
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]::-ms-track {
  cursor: pointer;
}

/* All the same stuff for Firefox */
input[type=range]::-moz-range-thumb {
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 3px;
  background: pink;
  width: 5px;
  opacity: .5;
  opacity: var(--opacity);
}

input[type=range].present::-moz-range-thumb {
  border: 1px solid #000000;
  border-radius: 3px;
  background: purple;
  cursor: pointer;
  opacity: var(--opacity);
}

input[type=range].future::-moz-range-thumb {
  border: 1px solid #000000;
  border-radius: 3px;
  background: yellow;
  cursor: pointer;
  opacity: var(--opacity);
}
</style>
