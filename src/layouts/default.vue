<script setup lang="ts"></script>

<template>
  <VApp>
    <v-app-bar class="app-bar rounded-b-xl" elevation="8">
      <v-container>
        <v-row>
          <v-col>
            <p class="app-bar-name">ROTO</p>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
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
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
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
}
.app-bar-name {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 40px;
  margin-left: 3vw;
  color: #0f0f0f;
}
</style>
