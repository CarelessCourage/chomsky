<script setup>
import {
  useEditor,
  EditorContent,
} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import editorMenus from "./editor-menus.vue"

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  onUpdate({editor}) {
    console.log(editor.getHTML())
  },
  extensions: [
    StarterKit,
  ],
})

function sendCell() {
  //const html = editor.getHTML()
  console.log(editor.getHTML())
  //console.log(html)
}
</script>

<template>
  <div class="editor-wrapper">
    <div class="editor" v-if="editor">
      <editorMenus :editor="editor"/>
      <editor-content :editor="editor" />
    </div>
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

.editor {
  padding: var(--marginx);
}

.textEditor {
  grid-column: span 2;
}

.ProseMirror {
  outline: none;
  cursor: text;
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
}

.buttonPanel {
  width: 100%;
  display: flex;
}
</style>