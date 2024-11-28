<script lang="ts" setup>
import gsap from "gsap";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  gsap.set(".title", { opacity: 0, y: 100 });
  gsap.to(".title", {
    duration: 2,
    opacity: 1,
    y: 0,
    ease: "power3.out",
  });
});
</script>

<template>
  <div class="title">- {{ title }} -</div>
</template>

<style scoped>
.title {
  opacity: 0;
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
