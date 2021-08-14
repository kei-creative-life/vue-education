<template>
  <li class="px-5">
    <div class="flex flex-row items-center h-8">
      <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans">
        <p class="w-5 h-5 mr-2">
          <img v-if="isJsTitle" src="@/static/images/js_icon.svg" />
          <img v-else src="@/static/images/vue_icon.svg" />
        </p>
        <p v-if="isOpen">
          {{ sideBarHead }}
        </p>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    sideBarHead: {
      type: String,
      default: '',
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    iconPath: {
      type: String,
    },
  },
  computed: {
    isJsTitle() {
      return this.sideBarHead === 'Javascriptを学ぼう'
    },
  },
})
</script>