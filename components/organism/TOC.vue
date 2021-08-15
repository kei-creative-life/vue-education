<template>
  <div class="toc">
    <div class="toc__inner">
      <h4 class="toc__inner--title">
        目次
        <span class="toc__inner--close" @click="toggleToc">
          {{ operateTocText }}
        </span>
      </h4>
      <ul class="toc__inner--lists" v-if="tocOpen">
        <li
          :class="`list ${tocList.name}`"
          v-for="tocList in toc"
          :key="tocList.id"
        >
          <n-link v-scroll-to="`#${tocList.id}`" to>
            {{ tocList.text }}
          </n-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tocOpen: true,
    }
  },
  methods: {
    toggleToc() {
      this.tocOpen = !this.tocOpen
    },
  },
  computed: {
    operateTocText(): string {
      return this.tocOpen ? '閉じる' : '開く'
    },
  },
})
</script>

<style lang="scss" scoped>
.toc {
  background-color: var(--color-bg-gray02);
  border-radius: 5px;
  margin: 40px 0;
  padding: 24px 0;

  &__inner {
    &--title {
      font-size: 20px;
      color: var(--color-text-gray02);
      font-weight: 700;
      margin: 0 0 10px;
      padding: 0 25px;
    }

    &--close {
      font-size: 15px;
      margin-left: 10px;
      &:hover {
        color: var(--color-text-sub);
        cursor: pointer;
      }
    }

    &--lists {
      padding: 6px 10px 14px 25px;

      li {
        color: var(--color-text-gray02);
        font-size: 16px;
      }
      li.h2 {
        font-size: 20px;
        font-weight: 700;
        padding-bottom: 10px;

        &:hover {
          color: var(--color-text-sub);
        }
      }
      li.h3 {
        font-size: 18px;
        padding-bottom: 10px;
        padding-left: 24px;

        &:hover {
          color: var(--color-text-sub);
        }
      }
    }
  }
}
</style>