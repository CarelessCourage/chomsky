<template>
  <svg class="svg" viewBox="0 0 216 251.25">
    <title>Play</title>
    <path id="play1" d="M.73.42,144,83.42v84L0,251.25V0Z" />
    <path id="play2" d="M216,124.7v1.84l-72,40.88v-84Z" />
  </svg>
</template>

<script>
import { watch, onMounted } from 'vue'
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export default {
  name: "VueSVG_play",
  props: {
    play: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    //const status = ref(props.play)
    const duration = 0.4;

    const playMorph = [
      "M.73.42,144,83.42v84L0,251.25V0Z",
      "M216,124.7v1.84l-72,40.88v-84Z"
    ]
    
    const pauseMorph = [
      "M.73.42H72v251l-72-.17V0Z",
      "M144,.42h72v251H144Z"
    ]

    let morphTarget = pauseMorph;

    const morph = () => {
      gsap.to("#play1", {
        duration: duration,
        morphSVG: {
            shape: morphTarget[0],
            type: "rotational",
        }
      })
      gsap.to("#play2", {
        duration: duration,
        morphSVG: {
            shape: morphTarget[1],
            type: "rotational",
        }
      })
    }

    onMounted(() => {
      watch(() => props.play, (newVal) => {
        newVal ? morphTarget = playMorph : morphTarget = pauseMorph;
        morph()
      }, {immediate: true})
    })
  }
};
</script>

<style lang="scss" scoped>
</style>