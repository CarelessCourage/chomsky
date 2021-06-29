<template>
  <div class="home">
    <TestGround v-if="true" />
    <div class="media">
      <MediaPlayer />
    </div>
    <div class="node">
      <p>lorem ipsum dolor sit amet, consectetur</p>
    </div>
    <div class="node">
      <p>lorem ipsum dolor sit amet, consectetur</p>
    </div>
    <div class="node audio" v-if="false">
      <cazzetRoll />
      <div><p>lorem ipsum dolor sit amet, consectet</p></div>
    </div>
    <div class="node audio featured" v-if="false">
      <div class="cazzet">
        <cazzetRoll />
      </div>
      <div></div>
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TestGround from "@/components/testGround.vue";
import cazzetRoll from "@/components/UI_Utils/cazzetRoll_copy.vue";
import MediaPlayer from "../components/media/mediaPlayer.vue";

export default defineComponent({
  name: "Home",
  components: {
    TestGround,
    cazzetRoll,
    MediaPlayer
  },
});
</script>


<style lang="scss">
@use "@/css/" as *;

.home {
  min-height: 30em;
  border-radius: 2em;
  display: grid;
  grid-gap: 2em;
}

.node {
  @include neomorphism($spread: 4px, $blur: 7px);
  background: $bg;
  padding: $margin;
  border: solid 2px $fg;
  border-radius: 1em;
}

.media {
  @include neomorphism($spread: 4px, $blur: 7px);
  --plyr-color-main: #{$flavor};
  --plyr-video-background: #{$bg};
  --plyr-badge-text-color: #{$flavor};
  --plyr-video-control-color: #{$bg};
  --plyr-video-control-color-hover: #{$bg};
  --plyr-menu-background: #{$bg};
  --plyr-menu-color: #{$fg};
  --plyr-progress-loading-size: 50px;
  --plyr-video-progress-buffered-background: #{$mg};
  --plyr-range-thumb-background: #{$flavor};
  --plyr-range-thumb-height: 0px;
  --plyr-range-thumb-shadow: none;
  --plyr-range-track-height: 5px;
  --plyr-video-range-track-background: #{$mg};
  --plyr-tooltip-background: #{$bg};
  --plyr-tooltip-color: #{$fg};
  --plyr-tooltip-arrow-size: 6px;

  padding: 0px;
  overflow: hidden;
  background: $bg;
  border: solid 2px $fg;
  border-radius: 1em;

  & > * {
    width: 100%;
    height: 100%;
  }
}

.node.audio {
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  div {
    display: flex;
    align-items: center;
  }
  p {
    padding-left: $margin;
  }
  .cazzet {
    padding: 1em;
  }
}

.node.audio.featured {
  margin-top: $margin * 2;
  grid-template-columns: 2fr 4fr 3fr;
  img {
    @include neomorphism($spread: 8px, $blur: 12px);
    background: $bg;
    border-radius: 10em;
    height: 150%;
    width: 100%;
    margin-top: -50%;
    border: solid 1px $fg;
  }
}
</style>
