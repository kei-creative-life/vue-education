<template>
  <section class="footer">
    <div class="footer__inner">
      <p class="footer__inner--copy">
        © 2021 Kengo Yamamoto. All rights reserved.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-white;

  &__inner {
    @apply max-w-screen-xl px-4 py-6 mx-auto overflow-hidden sm:px-6 lg:px-8;

    &--copy {
      @apply text-base leading-6 text-center text-gray-400;
    }
  }
}
</style>