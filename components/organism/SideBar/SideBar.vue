<template>
  <div class="bg-gray-50 text-gray-800">
    <div
      class="flex flex-col bg-gray-900 h-full shadow-lg"
      :class="operateSideWidth"
    >
      <div
        class="
          flex
          items-center
          justify-between
          text-white
          p-5
          border-b border-gray-500
        "
      >
        <h3 v-if="isOpen">All Lesson</h3>
        <FontAwesome @click="toggleSideBar" :icon="faChevronRight" />
      </div>
      <SideBarContainer
        :sideBarProps="sideBarFirstProps"
        :isOpen="isOpen"
        sideBarHead="Javascriptを学ぼう"
      />
      <SideBarContainer
        :sideBarProps="sideBarSecondProps"
        :isOpen="isOpen"
        sideBarHead="Vueを学ぼう"
      />
      <SideBarContainer
        :sideBarProps="sideBarSecondProps"
        :isOpen="isOpen"
        sideBarHead="Settings"
      />
      <SideBarContainer
        :sideBarProps="sideBarSecondProps"
        :isOpen="isOpen"
        sideBarHead="Settings"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  faBacon,
  faBahai,
  faBalanceScaleLeft,
  faFileAlt,
  faUserCog,
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
          hoverStyle: 'hover:border-blue-500',
          isLabel: true,
          icon: faFileAlt,
          link: 'javascript-beginner',
        },
        {
          navTitle: 'DOM操作に慣れよう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-blue-500',
          isLabel: false,
          icon: faUserCog,
          link: 'operate-dom',
        },
        {
          navTitle: 'TODOアプリを作ろう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-blue-500',
          isLabel: false,
          icon: faFileAlt,
          link: 'make-todo',
        },
      ] as sideBarProps[],
      sideBarSecondProps: [
        {
          navTitle: 'Vueの基礎を学ぼう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: true,
          icon: faBacon,
        },
        {
          navTitle: 'SETTING',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: false,
          icon: faBalanceScaleLeft,
        },
        {
          navTitle: 'TODOアプリを作ろう',
          iconClass: 'inline-flex justify-center items-center ml-4',
          hoverStyle: 'hover:border-green-500',
          isLabel: false,
          icon: faBahai,
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
  },
})
</script>
