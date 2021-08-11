<template>
  <div class="article bg-gray-50 p-5">
    <div class="article__title">
      <h1 class="text-3xl font-bold">{{ article.title }}</h1>
    </div>
    <p class="mt-5">{{ article.description }}</p>
    <div class="article__body" v-html="body"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import cheerio from 'cheerio'
import hljs from 'highlight.js'

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

    const $ = cheerio.load(article.body)
    const headings = $('h1, h2, h3').toArray()
    const toc = headings.map((d) => {
      return {
        text: d.children[0],
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
    }
  },
})
</script>

<style>
.article__title h1 {
  color: #585a61;
  font-size: 30px;
}

.article__body h2 {
  font-size: 25px;
  font-weight: bold;
  margin: 40px 0 16px;
  border-radius: 0 10px 10px 0;
  padding: 0.4em 0.5em;
  color: #585a61;
  background: #f4f4f4;
  border-left: solid 5px #7db4e6;
  border-bottom: solid 3px #d7d7d7;
}

.article__body h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 30px 0 12px;
  padding: 0.25em 0.5em;
  color: #585a61;
  background: transparent;
  border-left: solid 5px #7db4e6;
}
@media (min-width: 600px) {
  .article__body pre {
    margin: 15px 0;
  }
  .article__body {
    & >>> h1 {
      font-size: 30px;
      font-weight: bold;
      margin: 40px 0 20px;
      background-color: #eee;
      padding: 10px 20px;
      border-radius: 5px;
    }

    & >>> h2 {
      font-size: 30px;
      font-weight: bold;
      margin: 40px 0 16px;
      border-bottom: 1px solid #ddd;
      padding: 0.4em 0.5em;
      color: #585a61;
      background: #f4f4f4;
      border-left: solid 5px #7db4e6;
      border-bottom: solid 3px #d7d7d7;
    }

    & >>> h3 {
      font-size: 24px;
      font-weight: bold;
      margin: 30px 0 12px;
    }

    & >>> h4 {
      font-size: 20px;
      font-weight: bold;
      margin: 24px 0 10px;
    }

    & >>> h5 {
      font-size: 16px;
      font-weight: bold;
      margin: 20px 0 6px;
    }

    & >>> p {
      line-height: 1.8;
      letter-spacing: 0.2px;

      & > code {
        color: var(--color-pink);
        background-color: var(--color-gray-light);
        border: 1px solid var(--color-border);
        border-radius: 3px;
        margin: 0 2px;
        padding: 2px 4px;
      }
    }

    & >>> em {
      font-style: italic;
    }

    & >>> ol {
      list-style-type: decimal;
      list-style-position: inside;

      & > li {
        line-height: 2;
      }
    }

    & >>> ul > li {
      line-height: 2;

      &::before {
        content: '-';
        margin-right: 10px;
      }
    }

    & >>> img {
      max-width: 100%;
      margin: 40px 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    & >>> a {
      color: var(--color-text-sub);
      text-decoration: underline;
      word-wrap: break-word;
      word-break: break-all;
    }

    & >>> strong {
      background: linear-gradient(transparent 75%, #ffe0c1 75%);
      font-weight: bold;
    }

    & >>> blockquote {
      background: url('/images/icon_quote.svg') no-repeat 20px 10px, #eee;
      background-size: 36px 36px;
      padding: 50px 20px 20px;
      margin: 20px 0;
      border-radius: 3px;
    }

    & >>> pre {
      border-radius: 3px;
      margin: 20px 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-all;

      & > code {
        padding: 10px 20px;
        border-radius: 5px;
      }
    }
  }
}
@media (max-width: 600px) {
  .article__body {
    font-size: 14px;

    & >>> h1 {
      font-size: 24px;
      font-weight: bold;
      margin: 40px 0 20px;
      background-color: #eee;
      padding: 10px 20px;
      border-radius: 5px;
    }

    & >>> h2 {
      font-size: 24px;
      font-weight: bold;
      margin: 36px 0 16px;
      border-bottom: 1px solid #ddd;
    }

    & >>> h3 {
      font-size: 20px;
      font-weight: bold;
      margin: 30px 0 12px;
    }

    & >>> h4 {
      font-size: 16px;
      font-weight: bold;
      margin: 24px 0 10px;
    }

    & >>> h5 {
      font-size: 14px;
      font-weight: bold;
      margin: 20px 0 6px;
    }

    & >>> p {
      line-height: 1.8;
      letter-spacing: 0.2px;

      & > code {
        color: var(--color-pink);
        background-color: var(--color-gray-light);
        border: 1px solid var(--color-border);
        border-radius: 3px;
        margin: 0 2px;
        padding: 2px 4px;
      }
    }

    & >>> em {
      font-style: italic;
    }

    & >>> ol {
      list-style-type: decimal;
      list-style-position: inside;

      & > li {
        line-height: 2;
      }
    }

    & >>> ul > li {
      line-height: 2;

      &::before {
        content: '-';
        margin-right: 10px;
      }
    }

    & >>> img {
      max-width: 100%;
      margin: 40px 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    & >>> a {
      color: #331cbf;
      text-decoration: underline;
      word-wrap: break-word;
      word-break: break-all;
    }

    & >>> strong {
      background: linear-gradient(transparent 75%, #ffe0c1 75%);
      font-weight: bold;
    }

    & >>> blockquote {
      background: url('/images/icon_quote.svg') no-repeat 20px 10px, #eee;
      background-size: 36px 36px;
      padding: 50px 20px 20px;
      margin: 20px 0;
      border-radius: 3px;
    }

    & >>> pre {
      border-radius: 3px;
      margin: 20px 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-all;

      & > code {
        padding: 8px 16px;
        border-radius: 3px;
      }
    }
  }
}
</style>