<template>
  <ul class="fixed right-5 bottom-5 rounded-full bg-navy00 w-10 h-10">
    <li
      class="cursor-pointer flex items-center justify-center w-full h-full"
      @click="scrollToTop"
    >
      <FontAwesome :icon="faChevronUp" class="text-white" />
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
</style>