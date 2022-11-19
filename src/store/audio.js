import {reactive} from 'vue'
import { gsap } from "gsap";

const audio = reactive({
  volume: 0,
})

var tl = gsap.timeline( { defaults: {   // You can now define default property values for all tweens in a timeline!!
  ease: "bounce.out",
}, repeat:0, repeatDelay: 0 } );

export function toggleSound() {
  tl.to(audio, {
    keyframes: [
      {volume: 0, duration: 3},
      {volume: 100, duration: 1},
      {volume: 100, duration: 0.1},
      {volume: 0, duration: 2},
      {volume: 100, duration: 0.5},
      {volume: 0, duration: 0.5},
      {volume: 100, duration: 0.5},
      {volume: 0, duration: 0.5},
      {volume: 100, duration: 0.5},
      {volume: 0, duration: 1},
    ]
  });
}

export default audio