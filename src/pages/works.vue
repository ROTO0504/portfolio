<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
useHead({
  title: "ROTO_Works - Works - ",
});
</script>

<template>
  <div class="pj-bg">
    <center-title title="- Works -" />
    <card class="fade-in"></card>
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

.title {
  font-size: 3rem;
  padding-top: 9%;
  font-weight: bold;
  color: #da2128;
  background-color: #f4f4f4;
  text-align: center;
}

.fade-in {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    filter: blur(10px);
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
    transform: translateX(0px);
  }
}
</style>
