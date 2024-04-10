<script setup lang="ts"></script>
<template>
  <svg
    width="100%"
    height="100%"
    id="svg"
    viewBox="0 0 1440 390"
    xmlns="http://www.w3.org/2000/svg"
    class="transition duration-300 ease-in-out delay-150"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="5%" stop-color="#da2128"></stop>
        <stop offset="95%" stop-color="#552f7f"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 0,400 L 0,60 C 140,63.46666666666667 280,66.93333333333334 453,60 C 626,53.06666666666667 832,35.733333333333334 1002,34 C 1172,32.266666666666666 1306,46.13333333333333 1440,60 L 1440,400 L 0,400 Z"
      stroke="none"
      stroke-width="0"
      fill="url(#gradient)"
      fill-opacity="0.265"
      class="transition-all duration-300 ease-in-out delay-150 path-0"
    ></path>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="5%" stop-color="#da2128"></stop>
        <stop offset="95%" stop-color="#552f7f"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 0,400 L 0,140 C 178.13333333333333,149.06666666666666 356.26666666666665,158.13333333333335 525,151 C 693.7333333333333,143.86666666666665 853.0666666666668,120.53333333333332 1004,116 C 1154.9333333333332,111.46666666666668 1297.4666666666667,125.73333333333335 1440,140 L 1440,400 L 0,400 Z"
      stroke="none"
      stroke-width="0"
      fill="url(#gradient)"
      fill-opacity="0.4"
      class="transition-all duration-300 ease-in-out delay-150 path-1"
    ></path>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="5%" stop-color="#da2128"></stop>
        <stop offset="95%" stop-color="#552f7f"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 0,400 L 0,220 C 136.93333333333334,232.66666666666666 273.8666666666667,245.33333333333331 416,244 C 558.1333333333333,242.66666666666669 705.4666666666667,227.33333333333334 877,221 C 1048.5333333333333,214.66666666666666 1244.2666666666667,217.33333333333331 1440,220 L 1440,400 L 0,400 Z"
      stroke="none"
      stroke-width="0"
      fill="url(#gradient)"
      fill-opacity="0.53"
      class="transition-all duration-300 ease-in-out delay-150 path-2"
    ></path>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="5%" stop-color="#da2128"></stop>
        <stop offset="95%" stop-color="#552f7f"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 0,400 L 0,300 C 198.8,294.93333333333334 397.6,289.8666666666667 554,288 C 710.4,286.1333333333333 824.4000000000001,287.46666666666664 965,290 C 1105.6,292.53333333333336 1272.8,296.26666666666665 1440,300 L 1440,400 L 0,400 Z"
      stroke="none"
      stroke-width="0"
      fill="url(#gradient)"
      fill-opacity="1"
      class="transition-all duration-300 ease-in-out delay-150 path-3"
    ></path>
  </svg>
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
