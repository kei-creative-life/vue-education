<template>
  <div class="article bg-gray-50 p-5">
    <div class="article__title">
      <h1 class="text-3xl font-bold">{{ article.title }}</h1>
    </div>
    <p class="mt-5">{{ article.description }}</p>
    <TOC :toc="toc" />
    <div class="article__body" v-html="body"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import cheerio from 'cheerio'
import hljs from 'highlight.js'

import LessonContainer from '~/components/organism/Lesson/LessonContainer.vue'
import TOC from '~/components/organism/TOC.vue'

export default Vue.extend({
  components: {
    LessonContainer,
    TOC,
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

    const $ = cheerio.load(article.body)
    const headings = $('h1, h2, h3').toArray()
    const toc = headings.map((d) => {
      return {
        text: d.children[0].data,
        id: d.attribs.id,
        name: d.name,
      }
    })

    $('pre code').each((_, elm) => {
      const res = hljs.highlightAuto($(elm).text())
      console.log($(elm))
      $(elm).html(res.value)
      $(elm).addClass('hljs')
    })

    $('img').each((_, elm) => {
      $(elm).attr('class', 'lazyload')
      $(elm).attr('data-src', elm.attribs.src)
      $(elm).removeAttr('src')
    })

    return {
      article,
      body: $.html(),
      toc,
    }
  },
})
</script>

<style lang="scss">
</style>