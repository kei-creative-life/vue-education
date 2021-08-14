<template>
  <ul class="paginate w-full my-20 mb-10">
    <ul class="flex justify-center">
      <li
        class="paginate__inner text-center mx-5 px-5 py-3"
        v-for="(page, index) in filteredPage"
        :key="index"
      >
        <NuxtLink
          class="paginate__inner_text"
          :to="`/articles/javascript-beginner/${page.id}`"
        >
          <p class="text-center" v-if="page.key !== 'First' && index === 0">
            前の章に戻る
          </p>
          <p
            class="text-center"
            v-else-if="index === 1 || page.key === 'First'"
          >
            次の章に進む
          </p>
          {{ page.title }}
        </NuxtLink>
      </li>
    </ul>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export interface PageObject {
  key: string | null
  id: string
  title: string
}

export default Vue.extend({
  components: {},
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      pageObject: [] as PageObject[],
      filteredPage: [] as PageObject[],
    }
  },
  mounted() {
    this.transformArticles
    this.filterPaginate
  },
  computed: {
    transformArticles(): any {
      return this.articles.map((article: any) => {
        const { id, title } = article
        return this.pageObject.push({ id: id, title: title, key: '' })
      })
    },

    filterPaginate() {
      const path = location.pathname.replace(
        /\/articles\/javascript-beginner\//g,
        ''
      )
      this.pageObject.filter((page, index) => {
        if (page.id === path) {
          if (index === 0) {
            this.filteredPage.push(this.pageObject[1])
            this.filteredPage[0]['key'] = 'First'
          } else if (this.pageObject.length - 1 === index) {
            this.filteredPage.push(this.pageObject[index - 1])
            this.filteredPage[0]['key'] = 'Last'
          } else {
            this.filteredPage.push(
              this.pageObject[index - 1],
              this.pageObject[index + 1]
            )
            this.filteredPage[0]['key'] = 'Normal'
            this.filteredPage[1]['key'] = 'Normal'
          }
        }
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.paginate {
  .paginate__inner {
    background-color: var(--color-bg-gray02);
    width: 300px;
    border-top: solid 5px var(--color-border-blue);
    border-bottom: solid 3px var(--color-border-gray);

    &:hover {
      opacity: 0.8;
    }
    .paginate__inner_text {
      color: var(--color-text-gray02);
    }
  }
}
</style>