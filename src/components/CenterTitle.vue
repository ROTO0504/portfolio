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
    duration: 1,
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
  font-size: 2rem;
  padding-top: 5%;
  font-weight: bold;
  color: #da2128;
  background-color: #f4f4f4;
  text-align: center;
}
</style>
