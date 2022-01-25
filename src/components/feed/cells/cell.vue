<script lang="ts" setup>
import TipTap from "../../tiptap/tiptap.vue"

import Cellbase from './cell-base.vue'
import CellFeature from './cell-feature.vue'
import CellImage from './cell-image.vue'

const cells = {
  Cellbase,
  CellFeature,
  CellImage
}

function pickCell(cell = "Cellbase") {
  return cells[cell]
}

interface props {
  cell: Object;
}

const props = withDefaults(defineProps<props>(), {
  cell: null,
})
</script>

<template>
  <component :is="pickCell(cell.component)">
    <img v-if="cell.media" :src="cell.media" :alt="cell.text" width="150">
    <TipTap v-else :content="cell.text"/>
  </component>
</template>
