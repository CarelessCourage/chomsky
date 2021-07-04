import { ref, watch } from 'vue'
import { useMouse, useMousePressed } from '@vueuse/core'

import { elementPercent } from '@/utils/utils.js'

export function barClick(elRef, clicked, clickDone) {
  const mousePercent = ref(0)
  const { x } = useMouse()
  const { pressed } = useMousePressed()

  watch(pressed, (clickedSomewhere) => {
    clickedSomewhere ?
      updatesMousePos() :
      clickDone()
  })

  watch(x, () => updatesMousePos())  

  function updatesMousePos() {
    let mouseX = x.value
    if(clicked.value) mousePercent.value = elementPercent(elRef.value, mouseX)
  }

  return { mousePercent }
}

export function barHandles(elRef, clicked, clickDone) {
  let barLeft = ref(0)
  let barRight = ref(0)
  let whichHandle = ref(false)

  let { mousePercent } = barClick(elRef, clicked, () => clickDone())
  watch(mousePercent, (perc) => {
    whichHandle.value ?
      barLeft.value = perc : 
      barRight.value = perc 
  })

  watch(clicked, () => {
    let limit = barLeft.value + 5
    mousePercent < limit ? 
    whichHandle.value = true :
    whichHandle.value = false
  })

  return { barLeft, barRight }
}
