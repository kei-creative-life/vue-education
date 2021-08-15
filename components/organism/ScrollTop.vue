<template>
  <ul class="scroll-top">
    <li class="scroll-top__inner" @click="scrollToTop">
      <FontAwesome :icon="faChevronUp" class="scroll-top__icons" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
export default Vue.extend({
  created() {
    // window.addEventListener('scroll', function () {
    //   if (200 < window.scrollY) {
    //     console.log('scroll!!')
    //   } else {
    //   }
    // })
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
  computed: {
    faChevronUp() {
      return faChevronUp
    },
  },
})
</script>

<style lang="scss" scoped>
.scroll-top {
  background-color: var(--color-bg-navy01);
  @apply fixed right-5 bottom-5 rounded-full w-10 h-10;

  &__inner {
    @apply cursor-pointer flex items-center justify-center w-full h-full;
  }

  &__icons {
    @apply text-white;
  }
}
</style>