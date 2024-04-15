<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
useHead({
  title: "ROTO_Works - Projects - ",
});
</script>

<template>
  <div class="pj-bg">
    <card></card>
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

.hover {
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
    backdrop-filter: blur(3px);
  }
}

.link {
  text-decoration: none;
}

.list-enter-active {
  transition: all 1s ease-out;
}

.list-enter-to {
  opacity: 10s;
  transform: translateY(0px);
}

.list-enter-from {
  opacity: 0;
  transform: translateY(300px);
}

.thumbnail {
  transition: all 2s ease-in-out;
  transform: scale(1);
  filter: blur(0px);
  :hover {
    transition: all 2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      filter: blur(5px);
    }
  }
}

.pj-bg {
  background-color: #f4f4f4;
  padding: 20px;
  min-height: 100vh;
}
</style>
