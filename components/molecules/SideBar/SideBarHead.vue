<template>
  <li class="px-5">
    <div class="flex flex-row items-center h-8">
      <div
        class="
          flex
          font-semibold
          text-sm text-gray-300
          my-4
          font-sans
          uppercase
        "
      >
        {{ sideBarHead }}
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
  },
})
</script>