<script setup>
import Multiselect from '../filter/multiselect.vue'
import '@fortawesome/fontawesome-free/js/all.js';
import {ref} from "vue"

const activeTab = ref("content")
</script>

<template>
<div class="comboBox">
  <ul class="tabs">
    <li :class="{active: activeTab === `content`}" @click="activeTab = `content`"><p class="web">Content</p></li>
    <li :class="{active: activeTab === `sources`}" @click="activeTab = `sources`"><p class="web">Sources</p></li>
    <li :class="{active: activeTab === `sort`}" @click="activeTab = `sort`"><p class="web">Sort</p></li>
  </ul>
  <div class="flex web text">
    <i class="fas fa-search"></i>
    <Multiselect/>
  </div>
</div>
</template>

<style lang="scss">
.flex {
  position: relative;
  display: flex;
  align-items: center;
}

.comboBox {
  position: relative;
  margin-bottom: var(--marginxx);
  svg {
    left: 16px;
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

      p {
        transition: .4s ease-in-out;
      }

      &.active {
        opacity: 1;
        p {
          font-variation-settings: "wght" 900, "wdth" 100;
        }
      }

      &:hover {
        padding: var(--padding) var(--xxPadding);
        p {
          font-variation-settings: "wght" 900, "wdth" 100;
        }
      }
    }
  }
}

</style>
