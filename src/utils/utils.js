//external dependencies
import { watch } from 'vue'
import { useCssVar } from '@vueuse/core'
import _ from 'lodash'

//70% of 100 is 70 
export function percentToNumber(perc, scale) {
  return scale * (perc * 0.01)
}

//70 is 70% of 100
export function numberToPercent(val, scale) {
  return (100 * val) / scale;
}

//15 is 50% element width
export function elementPercent(el, x) {
  const boxWidth = el.clientWidth
  let boxModel = el.getBoundingClientRect()
  let left = x - boxModel.left
  let perc = numberToPercent(left, boxWidth)
  perc = _.clamp(perc, 0, 100)
  return perc
}

//Sets a reactive CSS variable by 
//taking a custom variable name, 
//what reactive variable to watch, 
//the function to return your variable value, 
//and the element ot attach the variable to
export function cssVariable(va, on, fn, el) {
  const cssVar = useCssVar(va, el)
  watch(on, (newVal) => {
    cssVar.value = fn(newVal)
  })
}
