<template>
  <div class="w-full sm:px-6 lg:px-8 bg-gray-50">
    <div class="mt-20 mx-auto shadow-md">
      <div
        class="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase"
      >
        講座の名前が入ります
      </div>

      <!-- card body -->
      <ul class="p-6 bg-white">
        <!-- content goes here -->
        <li
          class="
            mb-5
            py-3
            px-2
            flex
            justify-between
            items-center
            border-b border-gray-200
            hover:bg-gray-200
            cursor-pointer
          "
        >
          <h3>1章 ここにタイトルが入ります</h3>
          <FontAwesome :icon="faChevronRight" />
        </li>
        <li
          class="
            mb-5
            py-3
            px-2
            flex
            justify-between
            items-center
            border-b border-gray-200
            hover:bg-gray-200
            cursor-pointer
          "
        >
          <h3>1章 ここにタイトルが入ります</h3>
          <FontAwesome :icon="faChevronRight" />
        </li>
        <li
          class="
            mb-5
            py-3
            px-2
            flex
            justify-between
            items-center
            border-b border-gray-200
            hover:bg-gray-200
            cursor-pointer
          "
        >
          <h3>1章 ここにタイトルが入ります</h3>
          <FontAwesome :icon="faChevronRight" />
        </li>
        <li
          class="
            mb-5
            py-3
            px-2
            flex
            justify-between
            items-center
            border-b border-gray-200
            hover:bg-gray-200
            cursor-pointer
          "
        >
          <h3>1章 ここにタイトルが入ります</h3>
          <FontAwesome :icon="faChevronRight" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Vue from 'vue'

export default Vue.extend({
  computed: {
    faChevronRight() {
      return faChevronRight
    },
  },
})
</script>