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
    <v-navigation-drawer
      ><v-list-item title="My Application" subtitle="Vuetify"> </v-list-item
    ></v-navigation-drawer>
    <VMain class="v-main">
      <NuxtPage />
    </VMain>
  </VApp>
</template>

<style scoped lang="scss">
.v-main {
}
.blur {
  backdrop-filter: blur(10px);
}
</style>
