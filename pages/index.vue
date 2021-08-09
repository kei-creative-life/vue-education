<template>
  <LessonContainer />
</template>

<script lang="ts">
import LessonContainer from '~/components/organism/Lesson/LessonContainer.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    LessonContainer,
  },
  // asyncData($config) {
  //   console.log($config.$config.apiKey)
  //   console.log($config.$config.serviceId)
  // },
  // mounted() {
  //   console.log(this.$config.serviceId)
  // },
})
</script>
