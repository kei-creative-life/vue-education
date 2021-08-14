<template>
  <div class="bg-gray-50 text-gray-800">
    <div
      class="flex flex-col bg-gray-900 h-full shadow-lg"
      :class="operateSideWidth"
    >
      <div class="sticky top-0">
        <div
          class="
            flex
            items-center
            text-white
            p-5
            border-b border-gray-500
            cursor-pointer
          "
          :class="operatePosition"
        >
          <NuxtLink to="/articles"> <h3 v-if="isOpen">All Lesson</h3></NuxtLink>
          <FontAwesome @click="toggleSideBar" :icon="faChevronRight" />
        </div>
        <SideBarContainer
          :sideBarProps="sideBarFirstProps"
          :isOpen="isOpen"
          sideBarHead="Javascriptを学ぼう"
          iconPath="@/assets/images/js_icon.svg"
        />
        <SideBarContainer
          :sideBarProps="sideBarSecondProps"
          :isOpen="isOpen"
          sideBarHead="Vueを学ぼう"
        />
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
        {
          navTitle: 'TODOアプリを作ろう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-yellow-400',
          isLabel: false,
          icon: faClipboardList,
          link: 'make-todo',
        },
      ] as sideBarProps[],
      sideBarSecondProps: [
        {
          navTitle: 'Vueの基礎を学ぼう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: false,
          icon: faSeedling,
        },
        {
          navTitle: 'TODOアプリを作ろう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: false,
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
