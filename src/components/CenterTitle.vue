<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<style scoped>
.title {
  font-size: 3rem;
  padding-top: 9%;
  font-weight: bold;
  color: #da2128;
  background-color: #f4f4f4;
  text-align: center;
}
</style>
