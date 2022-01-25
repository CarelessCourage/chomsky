import {reactive} from 'vue'

export const feed = reactive([
  {text: "Media imagex", component: "CellImage", media: "http://chomsky.imgix.net/brewing.jpg?q=20&auto=format,compress&cs=tinysrgb"},
  {text: "this is text", component: "Cellbase", media: null},
  {text: "this is text", component: "Cellbase", media: null},
  {text: "this is text", component: "CellFeature", media: null},
  {text: "this is text", component: "Cellbase", media: null},
  {text: "this is text", component: "Cellbase", media: null},
])

export default feed