<script setup>
import Multiselect from './multiselect.vue'
import '@fortawesome/fontawesome-free/js/all.js';
import {ref} from "vue"

const activeTab = ref("content")
</script>

<template>
<div class="comboBox">
  <ul class="tabs text web">
    <li :class="{active: activeTab === `content`}" @click="activeTab = `content`"><p>Content</p></li>
    <li :class="{active: activeTab === `sources`}" @click="activeTab = `sources`"><p>Sources</p></li>
    <li :class="{active: activeTab === `sort`}" @click="activeTab = `sort`"><p>Sort</p></li>
  </ul>
  <p><span><i class="fas fa-search"></i></span></p>
  <Multiselect/>
</div>
</template>

<style lang="scss">
.comboBox {
  position: relative;
  margin-bottom: var(--marginxx);
  svg {
    bottom: 1.5rem;
    left: 18px;
    position: absolute;
    z-index: 1;
  }
  ul.tabs {
    display: flex;
    gap: calc(var(--margin) / 3);
    padding: 0px;
    li {
      --padding: calc(var(--margin) / 3);
      --extraPadding: calc(var(--padding) * 2);
      --xxPadding: calc(var(--padding) * 3);

      cursor: pointer;
      background-color: var(--shade);
      padding: var(--padding) var(--extraPadding);
      border-radius: var(--radius) var(--radius) 0px 0px;
      list-style: none;
      transition: 0.2s ease-in-out;

      opacity: 0.4;

      &.active {
        font-weight: 600;
        opacity: 1;
      }

      &:hover {
        padding: var(--padding) var(--xxPadding);
        font-weight: 600;
      }
    }
  }
}

</style>
