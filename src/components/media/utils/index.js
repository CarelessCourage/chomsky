import { ref, watch, } from 'vue'
import { useMouse, useMousePressed } from '@vueuse/core'
import _ from 'lodash'

import { numberToPercent } from '@/utils/utils.js'

export default function barHandler(elRef, click, clickDone) {
  const holdMousePos = ref(0)
  const { x } = useMouse()
  const { pressed } = useMousePressed()

  watch(pressed, (pressedSomewhere) => {
    updatesMousePos(pressedSomewhere)
    if(!pressedSomewhere) clickDone()
  })

  watch(x, () => {updatesMousePos(true)})

  function updatesMousePos(pressedSomewhere) {
    if(pressedSomewhere && click.value) holdMousePos.value = barPercentage(elRef)
  }

  function barPercentage(el) {
    const boxWidth = el.value.clientWidth
    let boxModel = el.value.getBoundingClientRect()
    let left = x.value - boxModel.left
    let perc = numberToPercent(left, boxWidth)
    perc = _.clamp(perc, 0, 100)
    return perc
  }

  return {holdMousePos, barPercentage}
}