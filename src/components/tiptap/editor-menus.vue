<script setup>
import {BubbleMenu, FloatingMenu} from '@tiptap/vue-3'
defineProps({editor: Object})
</script>

<template>
  <bubble-menu
    class="bubble-menu"
    :tippy-options="{ duration: 100 }"
    :editor="editor"
  >
    <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
      <i class="fas fa-bold"></i>
    </button>
    <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
      <i class="fas fa-italic"></i>
    </button>
    <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
      <i class="fas fa-strikethrough"></i>
    </button>
  </bubble-menu>
   <floating-menu
      class="floating-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
    >
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        <i class="fas fa-heading"></i>
      </button>
    </floating-menu>
</template>

<style lang="scss">
  .bubble-menu button,
  .floating-menu button {
    padding: 0rem 1rem;
    font-size: 1rem;
    min-height: 2rem;
    &.is-active {
      background: var(--flavor);
      color: var(--foreground);
    }
  }
</style>