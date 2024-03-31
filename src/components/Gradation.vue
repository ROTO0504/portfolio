<template>
  <div class="gradation"></div>
</template>

<style scoped>
@keyframes bg-color {
  0% {
    background-color: #f4f4f4;
  }
  50% {
    background-color: #05091e;
  }
  100% {
    background-color: #f4f4f4;
  }
}
.gradation {
  background-color: #f4f4f4;
  width: 100%;
  height: 10vh;
  transition: all 2s;
}
:hover {
  animation: bg-color 4s infinite;
}
</style>
