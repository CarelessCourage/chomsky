import {reactive} from 'vue'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const post = reactive({
  toggle: false,
})

export function togglePost() {
  post.toggle = !post.toggle
  //gsap.to(window, 2,{scrollTo:{y:0}});
}

export default post