<template>
  <div class="background-movie fadeUp">
    <div class="filter">
      <iframe
        class="max-size"
        src="https://player.vimeo.com/video/818366678?background=1"
        frameborder="0"
        controls="false"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.background-movie {
  width: 100%;
  height: 100%;
  min-height: 300px;
  padding: 56.25% 0 0 0;
  position: relative;
  background-color: black;
}

.max-size {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.filter {
  opacity: 0.8;
}
</style>
