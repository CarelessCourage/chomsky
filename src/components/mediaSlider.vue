<template>
  <div
    id="mediaSlider"
    @mousemove="inputHovered($event)"
    @mouseup="inputClicked($event)"
  >
    <input class="marker" type="range" min="0" max="100" :value="$store.state.media.marker">
    <input class="present" type="range" min="0" max="100" :value="$store.state.media.present">
    <input class="future" type="range" min="0" max="100" :value="$store.state.media.future">
  </div>
</template>

<script>
import { percentConverter } from '@/utils/utils.js'

import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "mediaSlider",
  props: {
    debug: Boolean,
  },
  setup() {
    const proximity = 2
    const store = useStore()

    let clickDown = ref(false)

    function inputClicked(e) {
      clickDown.value = !clickDown.value

      let fut = store.state.media.future
      let pre = store.state.media.present
   
      let perc = barPercentage(e)
      let onPresent = Math.abs(pre - perc) < proximity
      let onFuture = Math.abs(fut - perc) < proximity

      if(onFuture) pre = perc
      if(!onPresent && !onFuture) fut = perc

      store.commit('change', {
        time: "present",
        value: pre
      })

      store.commit('change', {
        time: "future",
        value: fut
      })
    }

    function inputHovered(e) {
      store.commit('change', {
        time: "marker",
        value: barPercentage(e)
      })
    }

    function barPercentage(e) {
      const inputWidth = e.target.clientWidth
      return percentConverter(e.offsetX, inputWidth, true)
    }

    return {inputHovered, inputClicked}
  },
};
</script>

<style lang="scss" scoped>
@use "@/css" as *;
#mediaSlider {
  opacity: 1;
}

.debug {
  opacity: 1;
}

input {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
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
  opacity: .5;
}

input[type=range].present::-moz-range-thumb {
  border: 1px solid #000000;
  border-radius: 3px;
  background: blue;
  cursor: pointer;
  opacity: 1;
}

input[type=range].future::-moz-range-thumb {
  border: 1px solid #000000;
  border-radius: 3px;
  background: yellow;
  cursor: pointer;
}
</style>
