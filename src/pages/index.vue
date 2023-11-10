<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
</script>

<template>
  <div class="margin">
    <div class="wide-title">
      <main-movie class="margin-top"></main-movie>
    </div>
  </div>
</template>

<style scoped lang="scss">
main {
  padding: 0 100px;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}
.wide-title {
  color: rgb(32, 32, 32);
  background-color: white;
}

.margin {
  margin-top: -64px;
}

.margin-top {
  margin-top: 24px;
}
</style>
