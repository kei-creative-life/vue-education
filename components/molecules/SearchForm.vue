<template>
  <div class="search">
    <input
      class="search__input"
      type="search"
      name="search"
      placeholder="Search"
      v-model="keyword"
    />
    <button class="search__button" type="submit" @click="moveSearchPage">
      <FontAwesome :icon="faSearch" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    moveSearchPage() {
      this.$router.push({
        path: '/articles',
        query: {
          q: this.keyword,
        },
      })
    },
  },
  computed: {
    faSearch() {
      return faSearch
    },
  },
})
</script>

<style lang="scss" scoped>
.search {
  @apply relative text-gray-600;

  &__inner {
    @apply bg-white
        border border-gray-300
        h-10
        px-5
        pr-10
        rounded-full
        text-sm
        focus:outline-none;
  }
  &__button {
    @apply absolute right-0 top-2/4 transform -translate-y-2/4 mr-4 w-6 h-6;
  }
}
</style>