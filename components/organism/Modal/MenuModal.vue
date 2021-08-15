<template>
  <div class="menu-modal" v-if="menuModalOpen">
    <div class="menu-modal__inner">
      <div class="menu-modal__inner--icons-body">
        <FontAwesome
          class="menu-modal__inner--icons"
          :icon="faTimes"
          @click="$emit('menu-modal-close')"
        />
      </div>
      <ul class="menu-modal__inner--contents">
        <li
          class="menu-modal__lists"
          v-for="(menuProps, index) in menuModalProps"
          :key="index"
          @click="$emit('menu-modal-close')"
        >
          <NuxtLink :to="`/articles/${menuProps.link}`">
            {{ menuProps.navTitle }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Vue from 'vue'
export default Vue.extend({
  props: {
    menuModalOpen: {
      type: Boolean,
      default: false,
    },
    menuModalProps: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    faTimes() {
      return faTimes
    },
  },
})
</script>

<style lang="scss" scoped>
.menu-modal {
  position: fixed;
  background: rgba(65, 65, 65, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1030;

  &__inner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-bg-gray02);
    border-radius: 10px;
    text-align: center;
    padding: 30px;
    font-weight: bold;
    overflow-y: scroll;
    width: 95%;
    height: 95%;
  }

  &__icons-body {
    @apply text-right;
  }

  &__lists {
    @apply my-5;
  }
}
</style>
