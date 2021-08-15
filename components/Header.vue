<template>
  <div class="header">
    <div class="header__inner">
      <h1 class="header__inner--title">Front Academy</h1>
      <!-- <SearchForm /> -->
    </div>
  </div>
</template>

<script lang="ts">
import SearchForm from '~/components/molecules/SearchForm.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    SearchForm,
  },
})
</script>

<style lang="scss" scoped>
.header {
  @apply h-20 flex items-center justify-between px-5;

  &__inner {
    &--title {
      @apply text-2xl font-bold;
    }
  }
}
</style>