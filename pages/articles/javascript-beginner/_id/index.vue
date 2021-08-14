<template>
  <div class="article bg-gray-50 p-5">
    <div class="article__title">
      <h1 class="text-3xl font-bold">{{ article.title }}</h1>
    </div>
    <p class="mt-5">{{ article.description }}</p>
    <TOC :toc="toc" />
    <div class="article__body" v-html="body"></div>
    <Paginate :articles="articles" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import cheerio from 'cheerio'
import hljs from 'highlight.js'

import LessonContainer from '~/components/organism/Lesson/LessonContainer.vue'
import TOC from '~/components/organism/TOC.vue'
import Paginate from '~/components/organism/Paginate/Paginate.vue'

export interface TOC {
  text: string
  id: string
  name: string
}

export default Vue.extend({
  components: {
    LessonContainer,
    TOC,
    Paginate,
  },
  async asyncData({ params, $config }) {
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

    const $ = cheerio.load(article.body)
    const headings = $('h1, h2, h3').toArray()
    const toc: TOC[] = headings.map((d: any) => {
      return {
        text: d.children[0].data,
        id: d.attribs.id,
        name: d.name,
      }
    })

    $('pre code').each((_, elm) => {
      const res = hljs.highlightAuto($(elm).text())
      $(elm).html(res.value)
      $(elm).addClass('hljs')
    })

    $('img').each((_, elm) => {
      $(elm).attr('class', 'lazyload')
      $(elm).attr('src', elm.attribs.src)
    })

    return {
      articles,
      article,
      body: $.html(),
      toc,
    }
  },
})
</script>

<style lang="scss">
</style>