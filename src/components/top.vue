<script setup lang="ts"></script>
<template>
  <div class="name">
    <p class="fadeUp-1 no-br">R</p>
    <p class="fadeUp-2 no-br">O</p>
    <p class="fadeUp-3 no-br">T</p>
    <p class="fadeUp-4 no-br">O</p>
  </div>
</template>

<style scoped lang="scss">
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
  }
}

.name {
  padding-top: 40vh;
  height: 100vh;
  font-size: 10vh;
  text-align: center;
  transition: all 2s ease-in-out;
  color: #05091e;
  background: #f4f4f4;
}
</style>
