<template>
  <div class="article__inner">
    <div class="article__title">{{ descriptionProps.title }}</div>
    <p class="article__description">
      {{ descriptionProps.description }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    descriptionProps: {
      type: Object,
    },
  },
})
</script>

<style lang="scss" scoped>
.article__inner {
  @apply mx-8 py-3 mb-5;
}

.article__title {
  @apply bg-gray-900 text-white p-2;
}

.article__description {
  @apply p-2 bg-white text-sm lg:text-base;
}
</style>