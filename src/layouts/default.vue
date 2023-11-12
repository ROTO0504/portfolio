<script setup lang="ts"></script>

<template>
  <VApp>
    <VAppBar class="app-bar" height="150">
      <v-container class="pa-0 ma-0">
        <v-row class="pa-0 ma-0">
          <v-col class="pa-0 ma-0">
            <p class="app-bar-name">ROTO</p>
          </v-col>
        </v-row>
      </v-container>
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
  backdrop-filter: grayscale(1) blur(10px);
}

.app-bar-name {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 40px;
  margin-left: 3vw;
  filter: contrast(1) grayscale(1);
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
