<template>
  <div class="article">
    <ArticleDescription :descriptionProps="descriptionProps" />
    <LessonContainer
      :articles="articles"
      headTitle="Javascriptの基礎を学ぼう"
      category="javascript-beginner"
    />
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import ArticleDescription from '~/components/molecules/Article/ArticleDescription.vue'
import LessonContainer from '~/components/organism/Lesson/LessonContainer.vue'

export interface descriptionProps {
  title: string
  description: string
}

export default Vue.extend({
  components: {
    LessonContainer,
    ArticleDescription,
  },
  data() {
    return {
      descriptionProps: {
        title: '講座の概要',
        description:
          '本講座ではVue.jsやReactなどのフレームワークやライブラリを触るために、最低限のJavascriptの基礎知識を学んでいきます。Javascriptの知識がないまま、VueやReactを触ると挫折してしまったり、習得に時間がかかり非効率になってしまいます。本講座を通して、Javascriptの基礎を固めて、今後VueやReact学習を効率よく行うための準備をしていきましょう。',
      } as descriptionProps,
    }
  },
  async asyncData({ $config }) {
    const articles = (
      await axios.get(
        `https://${$config.serviceId}.microcms.io/api/v1/js-articles`,
        {
          headers: {
            'X-API-KEY': $config.apiKey,
          },
        }
      )
    ).data.contents
    return { articles }
  },
})
</script>

<style lang="scss" scoped>
.article {
  @apply w-full bg-gray-50;

  &__inner {
    @apply mx-8 py-3 mb-5;
  }

  &__title {
    @apply bg-gray-900 text-white p-2;
  }

  &__description {
    @apply py-2;
  }
}
</style>