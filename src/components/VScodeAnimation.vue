<template>
  <section v-if="show" class="container">
    <lottie
      class="drop-shadow"
      :options="defaultOptions"
      v-on:animCreated="handleAnimation"
      width="200"
      height="200"
    />
  </section>
</template>

<script>
import Lottie from "~/components/Lottie.vue";
import * as animationData from "~/assets/animation/VScode.json";

export default {
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData,
      },
      animationSpeed: 1,
      show: true,
      width: 30,
      height: 30,
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>

<style scoped>
.drop-shadow {
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.246));
}

.center {
  text-align: center;
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 60px;
}
</style>
