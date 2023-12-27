<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <main-carousel></main-carousel> </v-row
  ></v-container>
</template>

<style scoped lang="scss">
main {
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}
</style>
