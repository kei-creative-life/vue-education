<template>
  <span
    v-if="isLabel"
    class="
      px-2
      py-0.5
      ml-auto
      text-xs
      font-medium
      tracking-wide
      text-blue-500
      bg-blue-100
      rounded-full
    "
    >{{ labelName }}</span
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    labelName: {
      type: String,
      default: '',
    },
    isLabel: {
      type: Boolean,
      default: false,
    },
  },
})
</script>