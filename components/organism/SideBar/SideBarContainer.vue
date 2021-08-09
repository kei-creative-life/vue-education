<template>
  <div>
    <ul class="flex flex-col py-6 space-y-1">
      <SideBarHead :sideBarHead="sideBarHead" :isOpen="isOpen" />
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
  </div>
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
  },
})
</script>