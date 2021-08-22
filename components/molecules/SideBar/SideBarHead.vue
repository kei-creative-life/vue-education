<template>
  <li class="sidebar-head">
    <div class="sidebar-head__inner">
      <div class="sidebar-head__body">
        <p class="sidebar-head__body-icons">
          <img v-if="isJsTitle" src="@/static/images/js_icon.svg" />
          <img v-else src="@/static/images/vue_icon.svg" />
        </p>
        <p class="sidebar-head__body-title" v-if="isOpen">
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

<style lang="scss" scoped>
.sidebar-head {
  @apply px-5;

  &__inner {
    @apply flex flex-row items-center h-8;

    .sidebar-head__body {
      @apply flex font-semibold text-sm text-gray-300 my-4 font-sans;

      &-icons {
        @apply w-5 h-5 mr-2;
      }
      &-title {
        @apply text-base;
      }
    }
  }
}
</style>