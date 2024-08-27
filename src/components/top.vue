<script setup lang="ts"></script>
<template>
  <div class="background">
    <div class="name">
      <a class="name-hover" href="/works">
        <p class="fadeUp-1 no-br va-m">R</p>
        <p class="fadeUp-2 no-br va-m">O</p>
        <p class="fadeUp-3 no-br va-m">T</p>
        <p class="fadeUp-4 no-br va-m">O</p>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.svg-sample-background-image::after {
  content: "";
  display: block;
  background-repeat: no-repeat;
  background-image: url("../assets/svg/wave.svg");
  height: 0;
  width: 100%;
  padding-bottom: 10.55555%; /* = 152 / 1440 */
}

@media screen and (min-width: 768px) {
  .svg-sample-background-image::after {
    background-image: url("../assets/svg/wave.svg");
  }
}

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
  margin-left: 7%;
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
    tranceform: translateX(-40px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
    transform: translateX(0px);
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
  padding-top: 28vh;
  padding-left: 5vw;
  height: 75vh;
  font-size: 5vh;
  text-align: left;

  transition: all 2s ease-in-out;
  color: #05091e;
  background: #05091e;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: auto auto;
}
</style>
