<template>
  <div>
    <Header />
    <SideBar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Header from '~/components/organism/Header.vue'
import SideBar from '~/components/organism/SideBar.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    Header,
    SideBar,
  },
})
</script>

<style>
</style>