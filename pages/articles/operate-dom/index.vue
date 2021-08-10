<template>
  <LessonContainer
    :articles="domArticles"
    headTitle="DOM操作に慣れよう"
    category="operate-dom"
  />
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
    const domArticles = (
      await axios.get(
        `https://${$config.serviceId}.microcms.io/api/v1/js-articles-dom`,
        {
          headers: {
            'X-API-KEY': $config.apiKey,
          },
        }
      )
    ).data.contents
    return { domArticles }
  },
})
</script>