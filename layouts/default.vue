<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex flex-1">
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