<script lang="ts" setup>
import {
  useEditor,
  EditorContent,
} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import editorMenus from "./editor-menus.vue"

interface props {
  content?: String;
}

const props = withDefaults(defineProps<props>(), {
  content: null,
})

const emits = defineEmits(['change'])
const editor = useEditor({
  content: props.content,
  onUpdate({editor}) {
    emits("change", editor.getHTML())
  },
  extensions: [ 
    StarterKit, 
    Placeholder.configure({
      placeholder: 'Write something...',
    }) 
  ],
})

function editorClick() {
  //editor.commands.focus()
  //editor.commands.focus('end')
  //editor.view.dom.focus()
}
</script>

<template>
  <div class="editor" v-if="editor" @click="editorClick()">
    <editorMenus :editor="editor"/>
    <editor-content :editor="editor" />
  </div>
</template>

<style lang="scss">
.ProseMirror p.is-editor-empty:first-child:before {
  content: attr(data-placeholder);
  float: left;
  pointer-events: none;
  height: 0;
}

.ProseMirror {
  outline: none;
  cursor: text;
}
</style>