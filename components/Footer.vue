<template>
  <section class="footer">
    <div class="footer__inner">
      <ul class="footer__lists">
        <li class="footer__list">
          <a href="https://codebox-lib.netlify.app/">運営者の技術サイト</a>
        </li>
        <li class="footer__list">
          <a href="https://easy-count.vercel.app/">文字数カウントアプリ</a>
        </li>
      </ul>
      <p class="footer__inner--copy">
        © 2021 Front Academy All rights reserved.
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
    @apply max-w-screen-xl py-6 mx-auto overflow-hidden sm:px-6 lg:px-16;

    &--copy {
      @apply text-sm lg:text-base leading-6 text-center text-gray-400;
    }
  }
  &__lists {
    @apply flex w-full justify-center text-gray-400 text-base;
  }
  &__list {
    @apply mr-10px mb-10px;
    &:hover {
      color: var(--color-border-blue);
    }
  }
}
</style>