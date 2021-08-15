<template>
  <div class="top-page">
    <div class="top-page__inner">
      <h2 class="top-page__inner--title">All Lesson</h2>
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
})
</script>

<style lang="scss" scoped>
.top-page {
  @apply w-full bg-gray-50;

  &__inner {
    &--title {
      @apply text-3xl px-8 py-5;
    }
  }
}
</style>
