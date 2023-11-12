<script setup lang="ts">
import { mdiPost } from "@mdi/js";
</script>

<template>
  <VApp>
    <VAppBar class="app-bar" height="150">
      <template #prepend>
        <VAppBarNavIcon color="on-primary" :icon="mdiPost" />
      </template>
      <v-app-bar-title class="app-bar-title name app-bar-text-filter">
        ROTO
      </v-app-bar-title>
      <v-container class="pa-0 app-bar-text-filter"> </v-container>
    </VAppBar>
    <VMain class="v-main">
      <NuxtPage />
    </VMain>
  </VApp>
</template>

<style scoped lang="scss">
html {
  font-family: "M PLUS 1p", sans-serif;
}

.v-main {
}
.app-bar {
  background-color: rgba(255, 255, 255, 1);
  mix-blend-mode: difference;
  backdrop-filter: blur(0px);
  filter: grayscale(70%) contrast(10);
}

.app-bar-title {
  font-family: "M PLUS 1p", sans-serif;
  font-style: normal;
  font-weight: 700;
}

.name {
  font-size: 2vh;
  min-width: 100px;
  color: #ffffff;
}

.app-bar-text-filter {
  mix-blend-mode: difference;
  filter: grayscale(100%) contrast(100);
}
</style>
