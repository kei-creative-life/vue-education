<template>
  <div v-show="visible">
    <ul class="toc-icon">
      <li class="toc-icon__inner">
        <FontAwesome :icon="faList" @click="toggleToc" class="toc-icon__list" />
      </li>
    </ul>
    <transition>
      <div class="small-toc" v-if="tocOpen">
        <div class="small-toc__inner">
          <ul class="small-toc__lists">
            <li class="small-toc__lists-title">目次</li>
            <li
              :class="`list ${tocList.name}`"
              v-for="tocList in toc"
              :key="tocList.id"
            >
              <n-link v-scroll-to="`#${tocList.id}`" to>
                {{ tocList.text }}
              </n-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { faList } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tocOpen: false,
      visible: false,
    }
  },
  // DOMが生成されるのはmountedのタイミング！
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleToc() {
      this.tocOpen = !this.tocOpen
    },
    handleScroll() {
      let firstH2LocationY = document.getElementsByTagName('h2')[0].offsetTop
      let scrollY = window.scrollY
      if (!this.visible) {
        this.visible = scrollY > firstH2LocationY - 40
      } else if (scrollY < 90) {
        this.visible = !this.visible
      }
    },
  },
  computed: {
    faList(): any {
      return faList
    },
  },
})
</script>

<style lang="scss" scoped>
.toc-icon {
  @apply fixed right-5 bottom-24 rounded-full w-10 h-10 bg-black;
  &__inner {
    @apply cursor-pointer flex items-center justify-center w-full h-full;
  }

  &__list {
    @apply text-white;
  }
}

.v-enter-active,
.v-leave-active {
  transform: translate(0px, 0px);
  transition: transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.v-enter,
.v-leave-to {
  transform: translateY(100vh) translateY(0px);
}

.small-toc {
  @apply bottom-24;
  border: solid 2px var(--color-bg-navy01);
  position: fixed;
  right: 20px;
  background-color: var(--color-bg-gray02);
  border-radius: 5px;
  margin: 40px 0;
  padding: 10px 0;
  &__inner {
    &--title {
      font-size: 20px;
      color: var(--color-text-gray02);
      font-weight: 700;
      margin: 0 0 10px;
      padding: 0 25px;
    }
  }
  &__lists {
    padding: 6px 10px 14px 25px;

    li {
      color: var(--color-text-gray02);
      font-size: 16px;
    }
    &-title {
      border-bottom: solid 2px var(--color-bg-navy01);
      width: 10%;
      @apply text-center mb-2 mx-auto;
    }

    li.h2 {
      font-size: 16px;
      font-weight: 700;
      padding-bottom: 10px;

      &:hover {
        color: var(--color-text-sub);
      }
    }
    li.h3 {
      font-size: 14px;
      padding-bottom: 10px;
      padding-left: 10px;

      &:hover {
        color: var(--color-text-sub);
      }
    }
  }
}
</style>