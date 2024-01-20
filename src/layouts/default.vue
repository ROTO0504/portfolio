<script setup lang="ts"></script>

<template>
  <div>
    <VApp>
      <v-app-bar class="app-bar rounded-b-xl">
        <template #prepend>
          <v-toolbar-title>
            <nuxt-link class="app-bar-name" to="/" tag="div">ROTO</nuxt-link>
          </v-toolbar-title>
        </template>
        <template #append>
          <v-tab class="app-bar-link" to="/">HOME</v-tab>
          <v-tab class="app-bar-link" to="/projects">Projects</v-tab>
          <v-tab class="app-bar-link" to="/contact">Contact</v-tab>
        </template>
      </v-app-bar>
      <VMain class="v-main">
        <NuxtPage />
      </VMain>
    </VApp>
  </div>
</template>

<style scoped lang="scss">
html {
  font-family: "M PLUS 1p", sans-serif;
}

.app-bar {
  background-color: rgba(255, 255, 255, 0.247);
  backdrop-filter: blur(3px);
}
.app-bar-name {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 4vh;
  margin-left: 3vw;
  color: #000000;
  text-decoration: none;
}

.app-bar-link {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 2vh;
  color: #0f0f0f;
  ::before {
    background-color: red;
  }
}

.right {
  text-align: right;
  margin: 0 0 0 auto;
}

.URL {
  text-decoration: none;
}
</style>
