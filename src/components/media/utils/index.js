import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useMouse, pausableWatch, useMousePressed } from '@vueuse/core'
import _ from 'lodash'

import { numberToPercent } from '@/utils/utils.js'

export default function barHandler(elRef, onClickDone) {
  const timey = ref(0)
  const { x } = useMouse()
  const { pressed } = useMousePressed()

  watch(pressed, (newVal) => {
    if(!newVal) onClickDone()
  })

  const mouseWatch = pausableWatch(x, () => {
    timey.value = barPercentage(elRef)
  })

  onMounted(() => {
    mouseWatch.pause()
  })

  onUnmounted(() => {
    mouseWatch.stop()
  })

  function barPercentage(elRef) {
    const boxWidth = elRef.value.clientWidth
    let boxModel = elRef.value.getBoundingClientRect()
    let left = x.value - boxModel.left
    let perc = numberToPercent(left, boxWidth)
    perc = _.clamp(perc, 0, 100)
    return perc
  }

  return {timey, mouseWatch, barPercentage}
}