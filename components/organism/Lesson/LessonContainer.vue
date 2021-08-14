<template>
  <div class="w-full sm:px-6 lg:px-8 bg-gray-50">
    <div class="mt-10 mx-auto shadow-md">
      <div
        class="
          flex
          justify-between
          items-center
          px-8
          py-4
          bg-white
          border-b border-gray-200
          font-bold
        "
      >
        <h2>{{ headTitle }}</h2>
        <FontAwesome
          :icon="faChevronUpDown"
          @click="toggleMenu"
          class="cursor-pointer"
        />
      </div>

      <ul v-show="menuOpen" v-if="articles.length != 0" class="p-6 bg-white">
        <li
          v-for="(article, index) in articles"
          :key="index"
          class="
            mb-5
            py-3
            px-2
            border-b border-gray-200
            hover:bg-gray-200
            cursor-pointer
          "
        >
          <NuxtLink :to="`/articles/${category}/${article.id}`">
            <div class="flex items-center justify-between">
              <h3>{{ `${index + 1}章 ${article.title}` }}</h3>
              <FontAwesome :icon="faChevronRight" />
            </div>
          </NuxtLink>
        </li>
      </ul>

      <ul v-else>
        <li class="p-6">ただいま準備中です。</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  faChevronRight,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import Vue from 'vue'

export default Vue.extend({
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
    headTitle: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      menuOpen: true,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
  computed: {
    faChevronRight(): any {
      return faChevronRight
    },
    faChevronUpDown(): any {
      return this.menuOpen ? faChevronDown : faChevronUp
    },
  },
})
</script>