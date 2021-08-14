<template>
  <div class="h-20 flex items-center justify-between px-5">
    <h1 class="text-2xl font-bold">Front Academy</h1>
    <!-- <SearchForm /> -->
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