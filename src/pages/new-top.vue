// layouts/default.vue
<template>
  <div class="layout" ref="layout">
    <slot />
  </div>
  <div class="high"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    const layout = ref(null);

    onMounted(() => {
      gsap.set(layout.value, {
        background:
          "linear-gradient(125deg, rgba(40, 0, 255, 1) 15%, rgba(255, 160, 71 30%)",
      });
      gsap.to(layout.value, {
        ease: "power4.inOut",
        background:
          "linear-gradient(55deg, rgba(40, 0, 255, 1) 15%, rgba(255, 160, 71 50%)",
        scrollTrigger: {
          trigger: layout.value,
          start: "top top",
          end: "bottom bottom",
          scrub: 10,
          markers: true,
        },
      });
    });

    return { layout };
  },
};
</script>

<style>
.layout {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* ノイズエフェクト */
.layout::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/img/noise-texture.png"); /* ノイズの画像を追加 */
  opacity: 0.2;
  pointer-events: none;
}

.high {
  height: 100vh;
}
</style>
