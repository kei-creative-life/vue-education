<template>
  <ul class="paginate w-full my-20 mb-10">
    <ul class="flex justify-center" v-if="filteredPage.length === 2">
      <li
        class="paginate__inner text-center mx-5 px-5 py-3"
        v-for="(page, index) in filteredPage"
        :key="index"
      >
        <NuxtLink
          class="paginate__inner_text"
          :to="`/articles/javascript-beginner/${page.id}`"
        >
          <p class="text-center" v-if="index === 0">前の章に戻る</p>
          <p class="text-center" v-else>次の章に進む</p>
          {{ page.title }}</NuxtLink
        >
      </li>
    </ul>
    <ul v-else>
      <li class="paginate__inner mx-auto text-center mx-5 px-5 py-3">
        <NuxtLink
          class="paginate__inner_text"
          :to="`/articles/javascript-beginner/${filteredPage.id}`"
        >
          <p class="text-center" v-if="filteredPage.key === 'First'">
            次の章に進む
          </p>
          <p class="text-center" v-if="filteredPage.key === 'Last'">
            前の章に戻る
          </p>
          {{ filteredPage.title }}</NuxtLink
        >
      </li>
    </ul>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export interface pageObject {
  id: string
  title: string
}

export interface filteredPage {
  key: string
  id: string
  title: string
}

export default Vue.extend({
  components: {},
  props: {
    articles: {
      type: Array,
    },
  },
  data() {
    return {
      pageObject: [] as pageObject[],
      filteredPage: [] as filteredPage[],
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
        return this.pageObject.push({ id: id, title: title })
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
            this.filteredPage = this.pageObject[1]
            this.filteredPage['key'] = 'First'
          } else if (this.pageObject.length - 1 === index) {
            this.filteredPage = this.pageObject[index - 1]
            this.filteredPage['key'] = 'Last'
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
      color: var(--color-gray02);
    }
  }
}
</style>