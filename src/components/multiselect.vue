<script setup>
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'

import { ref } from "vue"

const value = ref(null);
const options = ref([
  {
    label: 'DC',
    options: [{label: 'Batman', value:  'Batman'}, {label: 'Joker', value:  'Joker'}, {label: 'Robin', value:  'Robin'},],
  },
  {
    label: 'Marvel',
    options: ['Spiderman', 'Iron Man', 'Captain America'],
  },
])

function testOption(what) {
  console.log("lol: ", what);
  console.log("lol1: ", value.value);
}
</script>

<template>
<Multiselect
  v-model="value"
  :options="options"
  :groups="true"
  :createTag="true"
  :searchable="true"
  mode="tags"
  placeholder="Search for a character"
  @select="(lol) => testOption(lol)"
>
  <template v-slot:tag="{ option, handleTagRemove, disabled }">
    <div class="multiselect-tag">
      {{ option.label }}
      <span
          v-if="!disabled"
          class="multiselect-tag-remove"
          @mousedown.prevent="handleTagRemove(option, $event)"
      >
        <span class="multiselect-tag-remove-icon"></span>
      </span>
    </div>
  </template>

  <template v-slot:option="{ option }">
    {{ option.label }}
  </template>
</Multiselect>
</template>

<style lang="scss">
.multiselect-group-label {
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  background-color: var(--shade);
  border-bottom: dotted 1px var(--foreground);
  span {
    opacity: 0.2;
  }

  &.is-selected {
    color: var(--flavor-contrast);
    background-color: var(--flavor);
    span {
      opacity: 1;
    }
  }
}

li.multiselect-option {
  padding-left: 1.5em;
  transition: .1s ease-in-out;
  &:hover {
    background: var(--flavor);
    color: var(--flavor-contrast);
  }

}

.multiselect {
  background-color: var(--shade);
  border: none;
  --ms-ring-color: var(--foreground);
  --ms-ring-width: 1px;
  --ms-tag-bg: var(--flavor);
  transition: .1s ease-in-out;

  --ms-group-label-bg-selected: var(--foreground);
  --ms-group-label-color-selected: var(--background);

  --ms-group-label-bg-selected-pointed: var(--foreground);
  --ms-group-label-color-selected-pointed: var(--foreground);

  --offsetForSearchIcon: 32px;
  padding: calc(var(--margin) / 1.5);
  padding-left: var(--offsetForSearchIcon);
  .multiselect-placeholder {
    left: var(--offsetForSearchIcon);
  }

  .multiselect-group-label {
    background: var(--foreground);
    color: var(--background);
    //--ms-group-label-bg-selected-pointed: var(--foreground);
    --ms-group-label-color-selected-pointed: var(--background);
  }

  .multiselect-option {
    background: var(--shade);
  }

  input,
  .multiselect-search, 
  .multiselect-tags-search {
    background-color: rgba(255, 255, 255, 0);
  }

  .multiselect-tag {
    overflow: hidden;
    animation-name: growIn;
    animation-duration: .2s;
  }

  @keyframes growIn {
    from {
      max-width: 0px;
    }
    to {
      max-width: 10em;
    }
  }

  .multiselect-dropdown {
    max-height: 15em;
    transition: max-height .2s;
    --ms-dropdown-border-width: 1px;
    --ms-dropdown-border-color: var(--foreground);

    &.is-hidden {
      display: block;
      max-height: 0px;
      --ms-dropdown-border-width: 0px;
    }
  }
}
</style>
