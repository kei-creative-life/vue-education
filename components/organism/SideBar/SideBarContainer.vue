<template>
  <ul class="sidebar-container">
    <SideBarHead
      :sideBarHead="sideBarHead"
      :isOpen="isOpen"
      :iconPath="iconPath"
    />
    <li v-for="(prop, index) in sideBarProps" :key="index">
      <SideBarLink
        :navTitle="prop.navTitle"
        :iconClass="prop.iconClass"
        :hoverStyle="prop.hoverStyle"
        :icon="prop.icon"
        :isLabel="prop.isLabel"
        :isOpen="isOpen"
        :link="prop.link"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import SideBarHead from '~/components/molecules/SideBar/SideBarHead.vue'
import SideBarLink from '~/components/molecules/SideBar/SideBarLink.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    SideBarHead,
    SideBarLink,
  },
  props: {
    sideBarProps: {
      type: Array,
      default: () => [],
    },
    sideBarHead: {
      type: String,
      default: '',
    },
    isLabel: {
      type: Boolean,
      default: false,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: Object,
    },
    iconPath: {
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
.sidebar-container {
  @apply flex flex-col py-6 space-y-1;
}
</style>