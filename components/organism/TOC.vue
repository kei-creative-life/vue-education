<template>
  <div class="toc">
    <div class="toc__inner">
      <!-- <h4 class="toc__inner_title">目次</h4> -->
      <ul class="toc__inner_lists">
        <li
          v-for="tocList in toc"
          :key="tocList.id"
          :class="`list ${tocList.name}`"
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
})
</script>

<style lang="scss" scoped>
.toc {
  background-color: #f4f4f4;
  border-radius: 5px;
  margin: 40px 0;
  padding-top: 24px;
}
.toc__inner_title {
  font-size: 20px;
  color: #585a61;
  font-weight: 700;
  margin: 0 0 10px;
  padding: 15px;
}

.toc__inner_lists {
  padding: 6px 10px 14px 25px;

  li {
    color: #585a61;
    font-size: 16px;
  }
  li.h2 {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 10px;

    &:hover {
      color: #7db4e6;
    }
  }
  li.h3 {
    font-size: 18px;
    padding-bottom: 10px;
    padding-left: 24px;

    &:hover {
      color: #7db4e6;
    }
  }
}
</style>