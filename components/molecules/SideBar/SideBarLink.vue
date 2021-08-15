<template>
  <li class="sidebar-link">
    <NuxtLink :to="`/articles/${link}`">
      <span class="sidebar-link__inner" :class="[colorClass, sideCloseStyle]">
        <FontAwesome
          class="sidebar-link__icons"
          :class="iconClass"
          :icon="icon"
        />
        <span class="sidebar-link__titles" v-if="isOpen">{{ navTitle }}</span>
        <Label v-if="isOpen" labelName="New" :isLabel="isLabel" />
      </span>
    </NuxtLink>
  </li>
</template>

<script lang="ts">
import Label from '~/components/atoms/Label/Label.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    Label,
  },
  props: {
    navTitle: {
      type: String,
      default: '',
    },
    icon: {
      type: Object,
      default: {},
    },
    iconClass: {
      type: String,
    },
    isLabel: {
      type: Boolean,
      default: false,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    hoverStyle: {
      type: String,
      default: 'hover:border-blue-500',
    },
    link: {
      type: String,
      default: '',
    },
  },
  computed: {
    colorClass() {
      return this.hoverStyle
    },
    sideCloseStyle() {
      return this.isOpen ? '' : 'inline-block'
    },
  },
})
</script>

<style lang="scss" scoped>
.sidebar-link {
  &__inner {
    @apply relative
          flex flex-row
          items-center
          h-11
          focus:outline-none
          hover:bg-gray-700
          text-gray-500
          hover:text-gray-200
          border-l-4 border-transparent
          pr-6;
  }

  &__icons {
    @apply cursor-pointer;
  }

  &__titles {
    @apply ml-2
            font-semibold
            text-sm
            tracking-wide
            truncate
            font-sans;
  }
}
</style>