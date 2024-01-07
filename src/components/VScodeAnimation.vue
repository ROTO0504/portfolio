<template>
  <v-app>
    <section v-if="show" class="container">
      <div>
        <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
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
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>
