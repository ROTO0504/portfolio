<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="full-screen">
    <div class="background-movie fadeUp">
      <div class="filter">
        <iframe
          class="max-size"
          :src="url + '?controls=0&autoplay=1&loop=1&mute=1'"
          frameborder="0"
          controls="false"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.full-screen {
  width: 100%;
  height: 100%;
}
.name {
  position: absolute;
  top: 32%;
  z-index: 2;
}

.background-movie {
  height: 100%;
  width: 100%;
  min-height: 300px;
  padding: 56.25% 0 0 0;
  position: relative;
  background-color: black;
  filter: blur(2px);
  z-index: 1;
}

.max-size {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.filter {
  opacity: 0.4;
}
</style>
