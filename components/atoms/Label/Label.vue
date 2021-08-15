<template>
  <span class="label" v-if="isLabel">{{ labelName }}</span>
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

<style lang="scss" scoped>
.label {
  @apply px-2
      py-0.5
      ml-auto
      text-xs
      font-medium
      tracking-wide
      text-blue-500
      bg-blue-100
      rounded-full;
}
</style>