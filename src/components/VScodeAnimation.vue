<template>
  <v-app>
    <section v-if="show" class="container">
      <div>
        <h2 class="pa-10 center">工事中</h2>
        <lottie
          class="drop-shadow"
          :options="defaultOptions"
          v-on:animCreated="handleAnimation"
          width="300"
          height="300"
        />
      </div>
    </section>
  </v-app>
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
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.884));
}

.center {
  text-align: center;
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 60px;
}
</style>
