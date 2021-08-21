<template>
  <div class="sidebar">
    <div class="sidebar__inner" :class="operateSideWidth">
      <div class="sidebar__sticky">
        <div class="sidebar__header" :class="operatePosition">
          <NuxtLink to="/articles">
            <h3 v-if="isOpen">講座メニュー</h3>
          </NuxtLink>
          <FontAwesome @click="toggleSideBar" :icon="faChevronRight" />
        </div>
        <SideBarContainer
          :sideBarProps="sideBarFirstProps"
          :isOpen="isOpen"
          sideBarHead="Javascriptを学ぼう"
          iconPath="@/assets/images/js_icon.svg"
        />
        <!-- <SideBarContainer
          :sideBarProps="sideBarSecondProps"
          :isOpen="isOpen"
          sideBarHead="Vueを学ぼう"
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  faSeedling,
  faList,
  faClipboardList,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import SideBarContainer from '~/components/organism/SideBar/SideBarContainer.vue'

export interface sideBarProps {
  navTitle: string
  iconClass: string
  hoverStyle: string
  isLabel: boolean
  icon: any
  link: string
}

import Vue from 'vue'
export default Vue.extend({
  components: {
    SideBarContainer,
  },
  data() {
    return {
      isOpen: true,
      sideBarFirstProps: [
        {
          navTitle: 'Javascriptの基礎を学ぼう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-yellow-400',
          isLabel: false,
          icon: faSeedling,
          link: 'javascript-beginner',
        },
        {
          navTitle: 'DOM操作に慣れよう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-yellow-400',
          isLabel: false,
          icon: faList,
          link: 'operate-dom',
        },
        // {
        //   navTitle: 'TODOアプリを作ろう',
        //   iconClass: 'inline-flex justify-center items-center ml-4',
        //   hoverStyle: 'hover:border-yellow-400',
        //   isLabel: true,
        //   icon: faClipboardList,
        //   link: 'make-todo',
        // },
      ] as sideBarProps[],
      sideBarSecondProps: [
        {
          navTitle: 'Vueの基礎を学ぼう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: true,
          icon: faSeedling,
        },
        {
          navTitle: 'TODOアプリを作ろう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: true,
          icon: faClipboardList,
        },
      ] as sideBarProps[],
    }
  },
  methods: {
    toggleSideBar() {
      this.isOpen = !this.isOpen
    },
  },
  computed: {
    operateSideWidth(): string {
      return this.isOpen ? 'w-64' : 'w-16'
    },
    faChevronRight(): any {
      return this.isOpen ? faChevronLeft : faChevronRight
    },
    operatePosition(): string {
      return this.isOpen ? 'justify-between' : 'justify-center'
    },
  },
})
</script>

<style lang="scss" scoped>
.sidebar {
  @apply hidden lg:block;
  &__inner {
    @apply flex flex-col bg-gray-900 h-full shadow-lg;

    .sidebar__sticky {
      @apply sticky top-0;

      .sidebar__header {
        @apply flex
            items-center
            text-white
            h-20
            p-5
            border-b border-gray-500
            cursor-pointer;
      }
    }
  }
}
</style>
