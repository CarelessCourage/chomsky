import {reactive} from 'vue'

const interact = reactive({
  toggle: true,
})

export function toggleInteract(value = !interact.toggle) {
  interact.toggle = value
}

export default interact