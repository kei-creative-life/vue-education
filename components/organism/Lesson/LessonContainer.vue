<template>
  <div class="lesson">
    <div class="lesson__inner">
      <div class="lesson__inner--header">
        <h2 class="lesson__inner--title">{{ headTitle }}</h2>
        <FontAwesome
          class="lesson__inner--icons"
          :icon="faChevronUpDown"
          @click="toggleMenu"
        />
      </div>

      <ul
        class="lesson__inner--contents"
        v-show="menuOpen"
        v-if="articles.length != 0"
      >
        <li
          class="lesson__inner--lists"
          v-for="(article, index) in articles"
          :key="index"
        >
          <NuxtLink :to="`/articles/${category}/${article.id}`">
            <div class="lesson__inner--menu">
              <h3 class="lesson__inner--menu--title">
                {{ `${article.title}` }}
              </h3>
              <FontAwesome
                class="lesson__inner--menu--icons"
                :icon="faChevronRight"
              />
            </div>
          </NuxtLink>
        </li>
      </ul>

      <ul v-else>
        <li class="lesson__inner--ready">ただいま準備中です。</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  faChevronRight,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import Vue from 'vue'

export default Vue.extend({
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
    headTitle: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      menuOpen: true,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
  computed: {
    faChevronRight(): any {
      return faChevronRight
    },
    faChevronUpDown(): any {
      return this.menuOpen ? faChevronUp : faChevronDown
    },
  },
})
</script>

<style lang="scss" scoped>
.lesson {
  @apply w-full px-8 bg-gray-50 mb-5;

  &__inner {
    @apply mx-auto shadow-md;

    &--header {
      @apply flex
          justify-between
          items-center
          lg:px-8 px-4
          py-4
          bg-white
          border-b border-gray-200
          font-bold;
    }

    &--title {
      @apply text-sm lg:text-xl;
    }

    &--icons {
      @apply cursor-pointer;
    }

    &--contents {
      @apply lg:p-6 p-4 bg-white;
    }

    &--lists {
      @apply mb-5
            py-3
            border-b
            border-gray-200
            hover:bg-gray-200
            cursor-pointer;
    }

    &--menu {
      @apply flex items-center justify-between lg:px-2;

      &--title {
        @apply text-sm lg:text-xl;
      }
      &--icons {
        @apply hidden lg:block;
      }
    }

    &--ready {
      @apply p-6;
    }
  }
}
</style>