<template>
  <LessonContainer
    :articles="articles"
    headTitle="Javascriptの基礎を学ぼう"
    category="javascript-beginner"
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
    console.log($config.apiKey)
    const articles = (
      await axios.get(
        `https://${$config.serviceId}.microcms.io/api/v1/js-articles`,
        {
          headers: {
            'X-API-KEY': '63b3918d-a340-41ca-8077-8d71f9a69143',
          },
        }
      )
    ).data.contents
    return { articles }
  },
})
</script>