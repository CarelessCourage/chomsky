<template>
  <div class="psuedoContainer">
    <div class="timeMarker" v-if="false" :style="'--marker: ' + $store.state.media.time.marker + '%'"><p>10:00</p></div>
    <div class="timeSpread">
      <div class="rightTab"></div>
      <p id="duration" v-if="spread.width > (minimum / 3)">10:22</p>
      <div class="leftTab"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mediaPsuedo",
  computed: {
    spread() {
      let x = this.$store.state.media.timeui.future.x
      let y = this.$store.state.media.timeui.future.y
      
      let present = this.$store.state.media.timeui.present
      let clip = this.$store.state.media.enact.clip
      if(!clip) x = present

      let lowest = Math.min(x, y)
      let highest = Math.max(x, y)
      let width = Math.abs(highest - lowest)

      return { width, lowest }
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

  //pointer-events: none;
}

.timeSpread {
  --time: calc(v-bind('transition') * 1s);
  width: calc(v-bind('spread.width') * 1%);
  height: 100%;

  position: relative;
  bottom: 0px;
  left: calc(v-bind('spread.lowest') * 1%);

  will-change: 
    width, 
    left;
  transition: 
    width var(--time) ease-in-out, 
    left var(--time) ease-in-out;

  display: flex;
  justify-content: center;
  align-content: center;

  .rightTab, 
  .leftTab {
    height: 100%;
    width: 1em;
    max-width: 50%;
    background: blue;
    position: absolute;
    top: 0px;
    z-index: 10;
    transition: .4s ease-in-out;
    &:hover {
      opacity: .5;
      width: 3em;
    }
  }

  .leftTab {
    left: 0px;
  }

  .rightTab {
    right: 0px;
  }

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
