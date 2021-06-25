<template>
  <div
    id="mediaSlider"
    class="debug"
    @mousedown="clickStart($event)"
    @mousemove="inputHovered($event)"
    @mouseup="clickDone($event)"
    v-holdpress="clickHold"
    v-clickout="markerOff"
  >
    <input class="marker" type="range" min="0" max="100" :value="$store.state.media.timeui.marker">
    <input class="present" type="range" min="0" max="100" :value="$store.state.media.timeui.present">
    <input class="future" type="range" min="0" max="100" :value="$store.state.media.timeui.future">
  </div>
</template>

<script>
import { numberToPercent } from '@/utils/utils.js'
import { useStore } from 'vuex'
import _ from 'lodash'

export default {
  name: "mediaSlider",
  props: {
    debug: Boolean,
  },
  setup() {
    const proximity = 1
    const store = useStore()

    function clickStart() {
      store.commit('interact', { time: "click", value: true })
      store.commit('interact', { time: "marker", value: true })
    }

    function markerOff() {
      console.log("markerOff")
      store.commit('interact', { time: "marker", value: false })
    }

    function clickDone(e) {
      let fut = store.state.media.timeui.future
      let pre = store.state.media.timeui.present
   
      let perc = barPercentage(e)
      let onPresent = Math.abs(pre - perc) < proximity
      let onFuture = Math.abs(fut - perc) < proximity

      if(!onPresent && !onFuture) fut = perc
      if(onFuture) {
        pre = perc
        markerOff()
      }

      store.commit('timeui', { time: "present", value: pre })
      store.commit('timeui', { time: "future", value: fut })
      store.commit('interact', { time: "hold", value: 0 })
      store.commit('interact', { time: "click", value: false })
    }

    function inputHovered(e) {
      let time = "marker"
      if(store.state.media.enact.hold > 0) time = "future"

      store.commit('timeui', {
        time: time,
        value: barPercentage(e)
      })
    }

    function clickHold() {
      let newValue = store.state.media.enact.hold + 1
      store.commit('interact', {
        time: "hold",
        value: newValue
      })
    }

    function barPercentage(e) {
      const inputWidth = e.target.clientWidth
      let perc = numberToPercent(e.offsetX, inputWidth)
      perc = _.clamp(perc, 0, 100)
      return perc
    }

    return {inputHovered, clickStart, clickHold, clickDone, markerOff}
  },
};
</script>

<style lang="scss" scoped>
@use "@/css" as *;
#mediaSlider {
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
}

#mediaSlider.debug {
  opacity: 1;
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
  width: 1px;
  opacity: .5;
  opacity: 0;
}

input[type=range].present::-moz-range-thumb {
  border: 1px solid #000000;
  border-radius: 3px;
  background: blue;
  cursor: pointer;
  opacity: 0;
}

input[type=range].future::-moz-range-thumb {
  border: 1px solid #000000;
  border-radius: 3px;
  background: yellow;
  cursor: pointer;
  opacity: 0;
}
</style>
