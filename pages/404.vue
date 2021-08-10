<template>
  <div class="flex flex-col justify-center w-full">
    <p class="status">404</p>
    <p class="message">ページが見つかりません</p>
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

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.status {
  font-family: 'Times New Roman', Times, serif;
  font-size: 120px;
  font-weight: bold;
  color: #999;
  text-align: center;
}
.message {
  color: #999;
  font-size: 20px;
  text-align: center;
}
</style>
