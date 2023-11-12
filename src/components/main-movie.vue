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
.fadeIn {
  animation-name: fadeInAnime;
  animation-duration: 6s;
  animation-fill-mode: forwards;
  opacity: 0;
  filter: blur(5px);
}

@keyframes fadeInAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  opacity: 0;
  filter: blur(5px);
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
