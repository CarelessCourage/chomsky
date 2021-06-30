import { ref, watch, } from 'vue'
import { useMouse, useMousePressed } from '@vueuse/core'
import _ from 'lodash'

import { numberToPercent } from '@/utils/utils.js'

export default function barHandler(elRef, click, clickDone) {
  const timey = ref(0)
  const { x } = useMouse()
  const { pressed } = useMousePressed()

  watch(pressed, (newVal) => {
    if(!newVal) clickDone()
  })

  watch(x, () => {
    if(click.value) timey.value = barPercentage(elRef)
  })

  function barPercentage(elRef) {
    const boxWidth = elRef.value.clientWidth
    let boxModel = elRef.value.getBoundingClientRect()
    let left = x.value - boxModel.left
    let perc = numberToPercent(left, boxWidth)
    perc = _.clamp(perc, 0, 100)
    return perc
  }

  return {timey, barPercentage}
}