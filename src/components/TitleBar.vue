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
    <h2 class="title">{{ titleBar }}</h2>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  color: white;
  font-size: 4vw;
  padding: 0.1rem;
  margin-bottom: 0.2rem;
  margin-top: 2rem;
  margin-left: 20%;
  margin-right: 20%;
  background: linear-gradient(90deg, #552f7f 0%, #da2128 100%);
}
</style>
