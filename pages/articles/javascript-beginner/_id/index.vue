<template></template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import LessonContainer from '~/components/organism/Lesson/LessonContainer.vue'

export default Vue.extend({
  components: {
    LessonContainer,
  },
  async asyncData({ params, $config }) {
    const article = (
      await axios.get(
        `https://${$config.serviceId}.microcms.io/api/v1/js-articles/${params.id}`,
        {
          headers: {
            'X-API-KEY': $config.apiKey,
          },
        }
      )
    ).data
    console.log(article)
    return article
  },
})
</script>