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
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}
.wide-title {
  margin-top: 150px;
  color: rgb(32, 32, 32);
  background-color: #1a1a1a;
}

.margin-top {
  margin-top: 0px;
}

.white-canvas {
  background-color: white;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
}

.red-canvas {
  background-color: #303030;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
}
</style>
