<script setup>
import TextEditor from "../tiptap/text-editor.vue";
</script>

<template>
  <div id="slide" class="page post-body">
    <div class="textEditor" v-if="true">
      <TextEditor/>
    </div>
  </div>
</template>

<style lang="scss">
.post-body {
  position: relative;
  z-index: 20;
}
</style>
