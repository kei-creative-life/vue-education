<template>
  <li>
    <a
      href="#"
      :class="colorClass"
      class="
        relative
        flex flex-row
        items-center
        h-11
        focus:outline-none
        hover:bg-gray-700
        text-gray-500
        hover:text-gray-200
        border-l-4 border-transparent
        pr-6
      "
    >
      <FontAwesome :icon="icon" :class="iconClass" />
      <span
        class="ml-2 font-semibold text-sm tracking-wide truncate font-sans"
        >{{ navTitle }}</span
      >
      <Label labelName="New" :isLabel="isLabel" />
    </a>
  </li>
</template>

<script lang="ts">
import Label from '~/components/atoms/Label/Label.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    Label,
  },
  props: {
    navTitle: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconClass: {
      type: String,
    },
    isLabel: {
      type: Boolean,
      default: false,
    },
    hoverStyle: {
      type: String,
      default: 'hover:border-blue-500',
    },
  },
  computed: {
    colorClass() {
      return this.hoverStyle
    },
  },
})
</script>