<script setup>
import TitleBar from "../components/TitleBar.vue";
</script>

<template>
  <div>
    <h2 class="pa-10 center">工事中</h2>
    <VScodeAnimation class="VScode"></VScodeAnimation>
  </div>
  <TitleBar title-bar="ROTO" />
</template>

<style scoped>
.center {
  text-align: center;
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 60px;
  color: #f4f4f4;
}

.VScode {
  width: 100%;
  height: 100%;
  min-height: 300;
  position: relative;
  padding-top: 3%;
}
</style>
