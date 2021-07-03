import { watch, } from 'vue'
import { useCssVar } from '@vueuse/core'

export function percentConverter(val, scale, numbToPerc) {
  return numbToPerc ? 
    percentToNumber(val, scale) :
    numberToPercent(val, scale)
}

export function percentToNumber(perc, scale) {
  return scale * (perc * 0.01)
}

export function numberToPercent(val, scale) {
  return (100 * val) / scale;
}

export function cssVariable(va, on, fn, el) {
  const cssVar = useCssVar(va, el)
  watch(on, (newVal) => {
    cssVar.value = fn(newVal)
  })
}

