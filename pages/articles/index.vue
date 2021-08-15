<template>
  <div class="articles">
    <div class="articles__inner">
      <h2 class="articles__inner--title">講座一覧</h2>
      <LessonContainer
        :articles="jsArticles"
        headTitle="Javascriptの基礎を学ぼう"
        category="javascript-beginner"
      />
      <LessonContainer
        :articles="jsDomArticles"
        headTitle="DOM操作に慣れよう"
        category="operate-dom"
      />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import LessonContainer from '~/components/organism/Lesson/LessonContainer.vue'

export default Vue.extend({
  components: {
    LessonContainer,
  },
  async asyncData({ $config }) {
    const jsArticles = (
      await axios.get(
        `https://${$config.serviceId}.microcms.io/api/v1/js-articles`,
        {
          headers: {
            'X-API-KEY': $config.apiKey,
          },
        }
      )
    ).data.contents

    const jsDomArticles = (
      await axios.get(
        `https://${$config.serviceId}.microcms.io/api/v1/js-articles-dom`,
        {
          headers: {
            'X-API-KEY': $config.apiKey,
          },
        }
      )
    ).data.contents
    return { jsArticles, jsDomArticles }
  },
  methods: {
    searchWord() {
      const query = location.search.replace(/\?\//, '')
      const results = axios.get(
        `https://${this.$config.serviceId}.microcms.io/api/v1/js-articles?q=${query}`,
        {
          headers: {
            'X-API-KEY': this.$config.apiKey,
          },
        }
      )
      return results
    },
  },
})
</script>

<style lang="scss" scoped>
.articles {
  @apply w-full bg-gray-50;

  &__inner {
    &--title {
      @apply text-xl lg:text-3xl text-left px-8 py-5;
    }
  }
}
</style>