<template>
  <div class="layouts">
    <Header />
    <div class="layouts__main">
      <SideBar />
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import SideBar from '~/components/organism/SideBar/SideBar.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    SideBar,
  },
})
</script>

<style lang="scss" scoped>
.layouts {
  @apply flex flex-col min-h-screen w-screen;

  &__main {
    @apply flex flex-1;
  }
}
</style>