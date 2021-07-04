import { watch, } from 'vue'
import { useCssVar } from '@vueuse/core'
import _ from 'lodash'

export function percentToNumber(perc, scale) {
  return scale * (perc * 0.01)
}

export function numberToPercent(val, scale) {
  return (100 * val) / scale;
}

export function elementPercent(el, x) {
  const boxWidth = el.clientWidth
  let boxModel = el.getBoundingClientRect()
  let left = x - boxModel.left
  let perc = numberToPercent(left, boxWidth)
  perc = _.clamp(perc, 0, 100)
  return perc
}

export function cssVariable(va, on, fn, el) {
  const cssVar = useCssVar(va, el)
  watch(on, (newVal) => {
    cssVar.value = fn(newVal)
  })
}

