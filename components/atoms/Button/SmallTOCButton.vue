<template>
  <ul class="sm-toc-icon">
    <li class="sm-toc-icon__inner">
      <FontAwesome :icon="icon" class="sm-toc-icon__list" @click="toggleToc" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    icon: {
      type: Object,
      default: () => [],
    },
    toggleToc: {},
  },
})
</script>

<style lang="scss" scoped>
.sm-toc-icon {
  @apply fixed right-5 bottom-24 rounded-full w-10 h-10 bg-black;
  &__inner {
    @apply cursor-pointer flex items-center justify-center w-full h-full;
  }

  &__list {
    @apply text-white;
  }
}
</style>