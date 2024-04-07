<script setup lang="ts"></script>
<template>
  <div class="name">
    <a class="name-hover" href="/projects">
      <p class="fadeUp-1 no-br va-m">R</p>
      <p class="fadeUp-2 no-br va-m">O</p>
      <p class="fadeUp-3 no-br va-m">T</p>
      <p class="fadeUp-4 no-br va-m">O</p>
      <p class="fadeUp-5 no-br va-m">→</p>
    </a>
  </div>
</template>

<style scoped lang="scss">
.va-m {
  vertical-align: middle;
}

.name-hover {
  text-decoration: none;
  color: #05091e;
}
:hover {
  color: #da2128;
}

.fadeUp-1 {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
}

.fadeUp-2 {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.fadeUp-3 {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.fadeUp-4 {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.fadeUp-5 {
  animation-name: arrowMoveRight;
  animation-duration: 2s;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
  opacity: 0;
  font-size: 5vh;
  text-align: center;
  margin-left: 10%;
  vertical-align: middle;
}

.no-br {
  display: inline-block;
}

@keyframes fadeUpAnime {
  from {
    filter: blur(10px);
    opacity: 0;
    transform: translateY(70px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
    transform: translateX(40px);
  }
}

@keyframes arrowMoveRight {
  from {
    filter: blur(10px);
    opacity: 0;
    transform: translateY(70px);
  }

  to {
    opacity: 1;
    transform: translateX(40px);
  }
}

.name {
  padding-top: 32vh;
  height: 85vh;
  font-size: 10vh;
  text-align: center;

  transition: all 2s ease-in-out;
  color: #05091e;
  background: #f4f4f4;
}
</style>
