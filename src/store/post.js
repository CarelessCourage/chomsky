import {reactive} from 'vue'

import Cell from '../components/feed/cells/cell.vue'
import CellFeature from '../components/feed/cells/cell-feature.vue'
import CellImage from '../components/feed/cells/cell-image.vue'

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const cells = {
  Cell,
  CellFeature,
  CellImage
}

export function pickCell(c = "Cell") {
  return cells[c]
}

export const post = reactive({
  toggle: false,
  cell: {text: "this is text", component: "Cell", media: null},
})

export function openPost(c) {
  post.toggle = !post.toggle
  post.cell = c
  //gsap.to(window, 2,{scrollTo:{y:0}});
}

export default post