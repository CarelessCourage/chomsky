<script setup>
import TipTap from "./tiptap.vue"
import feed from "../../store/feed.js"

let content = null

function sendCell() {
  console.log(content)
  feed.push({
    text: content,
    component: "Cellbase",
    media: null,
  })
}

function TapUpdate(e) {
  content = e
}
</script>

<template>
  <div class="editor-wrapper">
    <TipTap @change="TapUpdate"/>
    <div class="buttonPanel">
      <button @click="sendCell()">
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.buttonPanel button {
  width: 100%;
  background: var(--background);
  margin: auto;
  max-width: 100vw;
  padding: 1rem;
  border-top: dotted 2px var(--flavor);
}

.editor-wrapper {
  background: var(--background);
  border-radius: var(--radius);
  overflow: hidden;
  width: max-content;
  width: 40em;

  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: -10em;
  gap: var(--margin);

  .editor {
    padding: var(--marginx);
  }
}

.buttonPanel {
  width: 100%;
  display: flex;
}
</style>