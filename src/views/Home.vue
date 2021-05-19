<template>
  <div class="home">
    <TestGround v-if="true" />
    <div class="node">
      <p>lorem ipsum dolor sit amet, consectetur</p>
    </div>
    <div class="node">
      <p>lorem ipsum dolor sit amet, consectetur</p>
    </div>
    <div class="node audio">
      <cazzetRoll />
      <div><p>lorem ipsum dolor sit amet, consectet</p></div>
    </div>
    <div class="node audio featured">
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

export default defineComponent({
  name: "Home",
  components: {
    TestGround,
    cazzetRoll,
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
  //@include neomorphism($spread: 4px, $blur: 7px);
  background: $bg;
  padding: $margin;
  border: solid 2px $fg;
  border-radius: 1em;
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
  border-right: none;
  border-top-right-radius: 0px;
  img {
    @include neomorphism($spread: 8px, $blur: 12px);
    background: $bg;
    border-radius: 10em;
    height: 150%;
    margin-top: -50%;
    border: solid 1px $fg;
  }
}
</style>
