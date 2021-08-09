<template>
  <div class="w-full sm:px-6 lg:px-8 bg-gray-50">
    <div class="mt-20 mx-auto shadow-md">
      <div
        class="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase"
      >
        {{ headTitle }}
      </div>

      <ul class="p-6 bg-white">
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
          <NuxtLink :to="`/articles/javascript-beginner/${article.id}`">
            <div class="flex items-center justify-between">
              <h3>{{ `${index + 1}章 ${article.title}` }}</h3>
              <FontAwesome :icon="faChevronRight" />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
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
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    },
  },
})
</script>