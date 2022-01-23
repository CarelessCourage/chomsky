<script setup>
import { watch, ref, toRef } from "vue";
import Postx from '../../store/post.js'
import audio, { toggleSound } from "../../store/audio"
import { toggleInteract } from "../../store/interact"

const volume = toRef(audio, 'volume')

var mix = function(color_1, color_2, weight) {
  function d2h(d) { return d.toString(16); }  // convert a decimal value to hex
  function h2d(h) { return parseInt(h, 16); } // convert a hex value to decimal 

  weight = (typeof(weight) !== 'undefined') ? weight : 50; // set the weight to 50%, if that argument is omitted

  var color = "#";

  for(var i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
    var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
        v2 = h2d(color_2.substr(i, 2)),
        
        // combine the current pairs from each source color, according to the specified weight
        val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0))); 

    while(val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit
    
    color += val; // concatenate val to our new color string
  }
    
  return color; // PROFIT!
}
var mixed = mix('2CFFE2', '368f8b', 0); // returns #bf002e

const colorMix = ref(mixed)

watch(volume, (val) => {
  colorMix.value = mix('2CFFE2', '368f8b', val);
})
</script>

<template>
  <div class="circle" :class="{active: !Postx.toggle}">
    <div class="cap" @click="toggleInteract()"></div>
    <div class="corner top">
      <i class="fas fa-phone-slash"></i>
    </div>
    <div class="corner"></div>
    <div class="corner bottom" @click="toggleSound()">
      <i class="fas fa-microphone-slash"></i>
    </div>
    <div class="corner"></div>
  </div>
</template>

<style lang="scss">
.corner {
  position: relative; z-index: 10;
  color: var(--background);

  font-size: 1.5rem;
  opacity: 0;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: .2s ease-in-out;
  //background-color: blue;

  &:hover {
    background-color: var(--shade00);
    opacity: 0.8 !important;
  }

  &.top svg {
    transform: translate(-1.2em, 1.2em) rotate(45deg);;
  }

  &.bottom svg {
    transform: translate(-1.2em, -1.2em) rotate(45deg);
  }
}

.cap {
  position: absolute; z-index: 2000;
  background: v-bind(colorMix);

  --size: 50%;
  width: var(--size);
  height: var(--size);
  border-radius: 100%;
  place-self: center;
  border: solid 0px var(--background);

  transition: .4s ease-in-out, background 0s;

  &:hover {
    border: solid 6px var(--background) !important;
    background-color: var(--shade00);
  }
}

.circle.active {
  top: calc(0px - var(--size)) !important;
  right: calc(0px - var(--size)) !important;
}

.circle {
  --color: var(--flavor);
  background-color: v-bind(colorMix);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2px;

  overflow: hidden;

  --size: 200px;
  width: var(--size); height: var(--size);
  
  border-radius: 50%;
  //background: var(--color);

  position: fixed; z-index: 1000;
  transform: rotate(-45deg) scale(calc(v-bind(volume) / 400 + 1));

  top: calc(0px - var(--size) / 2);
  right: calc(0px - var(--size) / 2);

  //top: 4em;
  //right: 4em;

  border: solid 0px var(--background);
  cursor: pointer;
  transition: .4s ease-in-out, background 0s, transform 0s;

  &:hover {
    --size: 300px;
    border: solid 6px var(--background);
    .corner {
      opacity: 1;
    }
    .cap {
      border: solid 3px var(--background);
    }
  }
  &:active {
    --size: 240px;
    transition: .2s ease-in-out;
  }
}

</style>
