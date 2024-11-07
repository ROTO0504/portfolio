<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<style scoped>
.title {
  font-size: 3rem;
  padding-top: 5%;
  font-weight: bold;
  color: #da2128;
  background-color: #f4f4f4;
  text-align: center;
}

.fade-in {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-delay: 0s;
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
