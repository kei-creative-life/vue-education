<template>
  <div class="header">
    <div class="header__inner">
      <h1 class="header__inner--title">Front Academy</h1>
      <FontAwesome
        class="header__inner--icons"
        :icon="faMenuModal"
        @click="menuModalOpen = true"
      />
      <MenuModal
        @menu-modal-close="toggleMenuModal"
        :menuModalOpen="menuModalOpen"
        :menuModalProps="menuModalProps"
      />
      <!-- <SearchForm /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchForm from '~/components/molecules/SearchForm.vue'
import MenuModal from '~/components/organism/Modal/MenuModal.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    SearchForm,
    MenuModal,
  },
  data() {
    return {
      menuModalOpen: false,

      menuModalProps: [
        {
          navTitle: 'Javascriptの基礎を学ぼう',
          link: 'javascript-beginner',
        },
        {
          navTitle: 'DOM操作に慣れよう',
          link: 'operate-dom',
        },
        {
          navTitle: 'TODOアプリを作ろう(Javascript)',
          link: 'make-todo',
        },
        {
          navTitle: 'Vueの基礎を学ぼう',
          link: '',
        },
        {
          navTitle: 'TODOアプリを作ろう(Vue)',
          link: '',
        },
      ],
    }
  },
  methods: {
    toggleMenuModal() {
      this.menuModalOpen = !this.menuModalOpen
      console.log(this.menuModalOpen)
    },
  },
  computed: {
    faMenuModal(): any {
      return faBars
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  @apply h-20 px-5 flex items-center;

  &__inner {
    @apply w-full flex items-center justify-between;

    &--title {
      @apply text-xl lg:text-2xl font-bold;
    }

    &--icons {
      @apply block lg:hidden;
    }
  }
}
</style>