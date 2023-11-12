<script setup lang="ts"></script>

<template>
  <VApp>
    <VAppBar class="app-bar">
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
  animation-name: fadeUpAnime;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  opacity: 0;
  filter: blur(5px);
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.app-bar {
  background-color: rgba(255, 255, 255);
  backdrop-filter: blur(10px);
  mix-blend-mode: none;
  transition: all 2s ease-in-out;
  animation-name: menu-close;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 1;
}
@keyframes menu-close {
  from {
    height: 150px;
  }

  to {
    height: 60px;
  }
}
.app-bar-name {
  animation-name: fadeLeftAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes fadeLeftAnime {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.app-bar:hover {
  background-color: rgba(255, 255, 255, 0);
  mix-blend-mode: difference;
  filter: grayscale(100%) contrast(100);
  animation-name: menu-open;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 1;
}
@keyframes menu-open {
  from {
    height: 60px;
  }

  to {
    height: 150px;
  }
}

.app-bar-name {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 40px;
  margin-left: 3vw;
  color: #ffffff;
  mix-blend-mode: difference;
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
