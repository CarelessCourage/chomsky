<template>
  <div class="text">
    <h1>Title</h1>
    <p>
      lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet,
      consectet lorem ipsum dolor sit amet, consectet <span> lorem </span>ipsum
      dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem
      ipsum dolor sit amet, consectet
    </p>
    <h2>subtitle</h2>
    <div class="btn"></div>
    <img
      class="img"
      src="https://images.unsplash.com/photo-1617678151201-2596079f0b30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1982&q=80"
      alt="Girl in a jacket"
    />
    <div class="glass"></div>
    <cazzetRoll v-if="false" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import cazzetRoll from "@/components/UI_Utils/cazzetRoll_copy.vue";

export default defineComponent({
  name: "testGround",
  components: {
    cazzetRoll,
  },
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@use "@/css" as *;

.glass {
  @include glassmorphism;
  height: 5em;
  width: 10em;
  margin: 5em;
  transform: translateY(-29em);
}

.text {
  @include neomorphism;
  //@include neomorphism($spread: 0px, $blur: 0px, $op: 0.1);
  border: solid 1px rgba($fg, 0.8);
  padding: 3em;
  padding-bottom: 6em;
  border-radius: 2em;
  transition: 0.4s ease-in-out;
}

.btn {
  @include neomorphismBtn;
  @include centerAlignContent;
  border-radius: 10em;
  width: 2em;
  height: 2em;
  padding: 1.5em;
  border: solid 1px rgba($fg, 0.8);
  &:active {
    transform: scale(1.1);
  }
}

.img {
  @include neomorphism($spread: 20px);
  border-radius: 100%;
  width: 22em;
  height: 22em;
  border: solid 5px rgba($fg, 1);
}
</style>
