<template>
  <div class="page-404">
    <p class="page-404__title">404</p>
    <p class="page-404__message">ページが見つかりません</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplete: null,
      title: 'ページが見つかりません',
    }
  },
}
</script>

<style lang="scss" scoped >
.page-404 {
  @apply flex flex-col justify-center w-full;

  &__title {
    font-family: 'Times New Roman', Times, serif;
    font-size: 120px;
    font-weight: bold;
    color: #999;
    text-align: center;
  }

  &__message {
    color: #999;
    font-size: 20px;
    text-align: center;
  }
}
</style>
