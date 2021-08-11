<template>
  <LessonContainer headTitle="TODOアプリを作ろう" category="make-todo" />
</template>

<script lang="ts">
import LessonContainer from '~/components/organism/Lesson/LessonContainer.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    LessonContainer,
  },
})
</script>