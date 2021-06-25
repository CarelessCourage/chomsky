<template>
  <div class="psuedoContainer">
    <div class="timeMarker" v-if="false" :style="'--marker: ' + $store.state.media.time.marker + '%'"><p>10:00</p></div>
    <div class="timeSpread" v-if="$store.state.media.enact.marker">
      <p id="duration" v-if="cSpread.spread > (minimum / 3)">10:22</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mediaPsuedo",
  computed: {
    cSpread() {
      let one = this.$store.state.media.timeui.future
      let two = this.$store.state.media.timeui.present

      let spread = Math.abs(one - two)
      
      let min = Math.min(one, two)
      min = Math.max(0, min)

      return { spread, min }
    },
    transition() {
      let time = 0.4
      const hold = this.$store.state.media.enact.hold
      if(hold > 0) time = 0.01
      return time
    }
  },
  data() {
    return {
      minimum: 15,
    }
  }
};
</script>

<style lang="scss">
@use "@/css" as *;
.psuedoContainer {
  --height: 1.5em;
  height: 100%;
  width: 100%;

  position: absolute;
  z-index: 20;
  bottom: 0px;

  pointer-events: none;
}

.timeSpread {
  --time: calc(v-bind('transition') * 1s);
  width: calc(v-bind('cSpread.spread') * 1%);
  height: 100%;

  position: relative;
  bottom: 0px;
  left: calc(v-bind('cSpread.min') * 1%);

  will-change: 
    width, 
    left;
  transition: 
    width var(--time) ease-in-out, 
    left var(--time) ease-in-out;

  display: flex;
  justify-content: center;
  align-content: center;

  &:after {
    content: "";
    background: pink;
    opacity: .5;
    border-radius: var(--modRad) 1em 1em var(--modRad);
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: border-radius;
    transition: border-radius .2s ease-in-out;
  }

  p {
    position: relative;
    z-index: 10;
    bottom: -7px;
    font-size: 12px;
  }

  p#end, 
  p#start {
    transform: translateY(100%);
    position: absolute;
    right: 0px;
    bottom: 0px;
  }

  p#start {
    left: 0px;
    right: auto;
  }
}

.timeMarker {
  background: $flavor;
  width: max-content;
  height: var(--height);

  padding: 0px 25px;
  border-radius: 1em;
  transform: translateX(-50%);

  position: relative;
  left: var(--marker);
  bottom: 0px;
  z-index: 20;

  p {
    position: relative;
    top: 4px;
    font-size: 12px;
  }
}
</style>
