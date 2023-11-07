<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
</script>

<template>
  <div class="margin">
    <div class="wide-title">
      A Vue3 project template with<br />
      Nuxt3 & Vuetify3
      <div>
        <img
          src="https://pbs.twimg.com/media/F90iq8XbgAA9BlZ?format=jpg&name=large"
          width="100%"
        />
      </div>
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
</style>
