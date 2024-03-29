<template>
  <div>
    <div><p class="border">Title</p></div>
  </div>
</template>

<style scoped>
.border {
  position: relative;
  font-size: 18px;
}

.border:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: solid 2px #000;
  animation: border_anim 3s linear forwards;
}

@keyframes border_anim {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
