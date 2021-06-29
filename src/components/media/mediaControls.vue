<template>
  <div class="mediaControls">
    <div class="cap"></div>
    <div class="bar volume">
      <div class="max">
        <input type="range" min="0" max="100" v-model="$store.state.media.volume">
        <div class="level" :style="`--volume: ${$store.state.media.volume}%`">
          <SvgVolume/>
        </div>
      </div>
    </div>
    <div class="bar time" @click="toggle()">
      <mediaTest/>

      <mediaSlider v-if="false"/>
      <mediaPsuedo v-if="false"/>
      <div  v-if="false" class="progress" :style="`--present: ${$store.state.media.timeui.present}%`">
        <SvgPlay :play="play"/>
      </div>
      <div v-if="false" class="buffer"></div>
    </div>
  </div>
</template>

<script>
import SvgVolume from "@/assets/svg-vue/volume"
import SvgPlay from "@/assets/svg-vue/play"
import mediaSlider from "@/components/mediaSlider"
import mediaPsuedo from "@/components/mediaPsuedo"
import mediaTest from "@/components/mediaTest"

import { ref } from 'vue'

export default {
  name: "mediaControls",
  components: {
    SvgVolume,
    SvgPlay,
    mediaSlider,
    mediaPsuedo,
    mediaTest
  },
  computed: {
    rad() {
      let x = 1
      const fut = this.$store.state.media.timeui.future.y
      const pre = this.$store.state.media.timeui.present
      if(fut > pre) x = 0
      return x
    }
  },
  setup() {
    const play = ref(true)
    function toggle() {
      play.value = !play.value
    }

    return { play, toggle }
  },
};
</script>

<style lang="scss">
@use "@/css" as *;
.mediaControls {
  --radius: 2em;
  --modRad: calc(v-bind('rad') * 1em);

  width: 70vw;
  position: fixed;
  bottom: 20px;
  left: 15vw;
  display: grid;
  grid-template-columns: 3em 1fr;
}

.cap {
  grid-row: span 2;
  background: $flavor;
  border-radius: var(--radius) 0em 0em var(--radius);
  will-change: width;
  transition: width 0.4s ease-in-out;
}

%level {
  position: relative;
  z-index: 2;

  background: $flavor;
  height: 100%;
  width: 40%;

  border-radius: 0em var(--radius) var(--radius) 0em;
  box-shadow: 6px 0px 4px -3px rgba($fg, 0.1);

  will-change: width;
  transition: width 0.4s ease-in-out, background-color .6s ease-in-out;
  
  .svg {
    width: 0.7em;
    path {
      fill: $bg;
    }
  }
}

%flexEnd {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: .5em;
}

.bar {
  height: 2em;
  border-radius: 0em var(--radius) var(--radius) 0em;
  position: relative;
  //@extend %hoverComet;
  &.volume {
    height: 1.5em;
    input {
      opacity: .0;
    }
    .level {
      width: var(--volume);
      will-change: width;
      transition: width .01s ease-in-out;
    }
  }
  .max {
    @extend %level;
    width: 15%;
    background: mix($fg, $flavor, 50%);
    input {
      position: absolute;
      z-index: 10;
      width: 100%;
    }
    
    .level {
      @extend %level;
      @extend %flexEnd;
      padding-right: 0.7em;
    }
  }

  &.time {
    background: $fg;
  }
  .progress {
    @extend %level;
    @extend %flexEnd;
    z-index: 5;
    width: var(--present);
    padding-right: 0.7em;

    border-radius: 0em var(--modRad) var(--modRad) 0em;

    will-change: border-radius, width;
    transition: border-radius .2s ease-in-out, width 0.4s ease-in-out, background-color .6s ease-in-out;
  }
  .buffer {
    @extend %level;
    width: var(--future);
    position: absolute;
    top: 0px;
    left: 0px;
    background: mix($fg, $flavor, 50%);
  }
}

%hoverComet {
  &:hover {
    .level, 
    .progress {
      background: mix($fg, $flavor, 20%);
    }
    &::before {
      opacity: 1;
      width: 3%;
    }
  }
  &::before {
    content: "";
    position: absolute;
    pointer-events: none;
    z-index: 7;
    
    opacity: 0;
    height: 100%;
    width: 0%;
    box-shadow: 6px 0px 4px -3px rgba($fg, 0.1);
    border-radius: 0em var(--radius) var(--radius) 0em;
    background: $flavor;

    will-change: opacity;
    transition: all .03s ease-in-out;
  }
}
</style>
