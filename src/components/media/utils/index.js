//external dependencies
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useMouse, useMousePressed } from '@vueuse/core'
//custom dependencies
import { elementPercent } from '@/utils/utils.js'
import useQickStore from './shortStore.js'

function onMousePressed(start, end) {
  const { pressed } = useMousePressed()
  watch(pressed, (clickedSomewhere) => {
    clickedSomewhere ?
      start() :
      end()
  })
}

//Handles clicks on the bar and returns a percentage variable that will 
//continualy update on mouse move and only stop when the click is released, 
//no matter if the click is released inside or outside the bar

export function barClick(barElement, barClicked, clickDone, forced = true) {
  const barPerc = ref(0)
  const { x } = useMouse()
  const store = useStore()

  const qs = useQickStore()

  watch(x, () => updatesMousePos())
  onMousePressed(updatesMousePos, clickDone)

  function updatesMousePos() {
    const elementPerc =  elementPercent(barElement.value, x.value)
    const isPresent = forced ? true : handleClip(barClicked, elementPerc, store)
    if(barClicked.value && isPresent) {
      barPerc.value = elementPerc
      qs.present(barPerc) //Why the fuck does this work?
    }
  }

  return { barPerc }
}

//Handles clicks on the bar and returns a percentage variable that will 
//continualy update on mouse move and only stop when the click is released, 
//no matter if the click is released inside or outside the bar

export function handleClip(barClicked, elementPerc, store) {
  let isPresent = true

  const fut = store.state.media.timeui.future.y
  const pre = store.state.media.timeui.present

  if(barClicked.value) pickTime(1)
  
  function pickTime(proximity) {
    const onPresent = Math.abs(pre - elementPerc) < proximity
    const onFuture = Math.abs(fut - elementPerc) < proximity

    if(!onPresent && !onFuture) isPresent = false
    if(onFuture) {
      isPresent = true
    }
  }

  return isPresent
}

//Takes a bar percentage and decides wheter the left handle 
//or the right handle of the bar should be the one 
//to rescive the new barPercentage value
//Unless the value is forced in which case it will 
//always pick the right handle

export function barHandles(barPerc, forced = false) {
  let barLeft = ref(0)
  let barRight = ref(0)
  let whichHandle = ref(false)

  watch(barPerc, (perc) => {
    checkHandle(5, forced)
    whichHandle.value ?
      barLeft.value = perc : 
      barRight.value = perc 
  })

  function checkHandle(handleProximity, forced) {
    let leftHandle = barLeft.value + handleProximity
    let left = false
    barPerc.value < leftHandle ? 
      left = true :
      left = false
    if(forced) left = false
    whichHandle.value = left
  }

  return { barLeft, barRight }
}
