<script lang="ts" setup>
import gsap from "gsap";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  gsap.set(".title", {
    opacity: 0,
    y: 100,
    filter: "blur(10px)",
  });
  gsap.to(".title", {
    duration: 3,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    filter: "blur(0px)",
  });
  gsap.from(".left-in", {
    duration: 3,
    x: 100,
    y: -100,
    ease: "power3.out",
  });
  gsap.from(".right-in", {
    duration: 3,
    x: -100,
    y: -100,
    ease: "power3.out",
  });
});
</script>

<template>
  <div class="title">
    <span class="title-text-rap">
      <span class="title-text">- {{ title }} -</span>
    </span>
  </div>
</template>

<style>
.title {
  opacity: 0;
  font-size: 2rem;
  padding-top: 5%;
  font-weight: bold;
  text-align: center;
}

.title-text-rap {
  background: linear-gradient(to right, #f4f4f4 -20%, #05091e 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.left-in {
  display: inline-block;
}

.right-in {
  display: inline-block;
}
</style>
