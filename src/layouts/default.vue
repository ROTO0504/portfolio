<script setup lang="ts">
import { mdiPost } from "@mdi/js";
</script>

<template>
  <VApp>
    <VAppBar class="blur" color="rgb(1,1,1,0.4)">
      <template #prepend>
        <VAppBarNavIcon color="on-primary" :icon="mdiPost" />
      </template>
      <v-app-bar-title>ROTO</v-app-bar-title>
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
.blur {
  backdrop-filter: blur(10px);
}

.v-app-bar-title {
  font-family: "M PLUS 1p", sans-serif;
  font-style: normal;
  font-weight: 700;
}
</style>
