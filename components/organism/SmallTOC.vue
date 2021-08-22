<template>
  <div v-show="visible">
    <SmallTOCButton :icon="faList" :toggleToc="toggleToc" />
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
              <span v-if="tocList.id === targetId"
                ><FontAwesome :icon="faStar" />
              </span>
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
import { faList, faStar } from '@fortawesome/free-solid-svg-icons'
import SmallTOCButton from '~/components/atoms/Button/SmallTOCButton.vue'

export default Vue.extend({
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    SmallTOCButton,
  },
  data() {
    return {
      tocOpen: false,
      visible: false,
      scrollY: null,
      targetId: '' as String | null,
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
      this.markingH2Title()
    },
    markingH2Title() {
      let h2Titles = Array.from(document.getElementsByTagName('h2'))
      let result = h2Titles.filter((h2Title) => {
        return h2Title.offsetTop <= window.scrollY
      })
      if (window.scrollY > h2Titles[0].offsetTop) {
        if (result.length === 1) {
          this.targetId = h2Titles[0].getAttribute('id')
        } else {
          this.targetId = h2Titles[result.length - 1].getAttribute('id')
        }
      }
    },
  },
  computed: {
    faList(): any {
      return faList
    },
    faStar(): any {
      return faStar
    },
  },
})
</script>

<style lang="scss" scoped>
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
  @apply fixed bottom-24 right-5 my-10 py-10px;
  border: solid 2px var(--color-bg-navy01);
  background-color: var(--color-bg-gray02);
  border-radius: 5px;
  &__inner {
    &--title {
      color: var(--color-text-gray02);
      @apply font-bold text-xl mb-10px px-25px;
    }
  }
  &__lists {
    padding: 6px 10px 14px 25px;

    li {
      color: var(--color-text-gray02);
      @apply text-base;
    }
    &-title {
      border-bottom: solid 2px var(--color-bg-navy01);
      width: 10%;
      @apply text-center mb-2 mx-auto;
    }

    li.h2 {
      @apply font-bold text-base pb-10px;

      &:hover {
        color: var(--color-text-sub);
      }
    }
    li.h3 {
      @apply text-sm pb-10px pl-10px;

      &:hover {
        color: var(--color-text-sub);
      }
    }
  }
}
</style>