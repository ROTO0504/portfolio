<script lang="ts" setup>
defineProps({
  titleBar: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2 class="title">
      {{ titleBar }}
    </h2>
  </div>
</template>

<style scoped>
.title {
  color: #05091e;
  min-width: 10vw;
  font-size: 10vh;
  text-align: center;
}
</style>
