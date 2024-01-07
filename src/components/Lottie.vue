<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from "lottie-web";
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    height: Number,
    width: Number,
  },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : "30%",
        height: this.height ? `${this.height}px` : "30%",
        overflow: "hidden",
        margin: "0 auto",
      },
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: true, //アニメーションを繰り返す場合は[true]
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData.default,
      rendererSettings: this.options.rendererSettings,
    });
    this.$emit("animCreated", this.anim);
  },
};
</script>
