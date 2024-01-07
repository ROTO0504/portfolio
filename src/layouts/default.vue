<script setup lang="ts"></script>

<template>
  <VApp>
    <v-app-bar class="app-bar rounded-b-xl" elevation="8">
      <v-container class="pa-0 ma-0">
        <v-row>
          <v-col>
            <a class="URL" href="/">
              <p class="app-bar-name">ROTO</p>
            </a>
          </v-col>
          <v-col>
            <v-row class="right">
              <v-col>
                <v-btn class="app-bar-link hover_title" to="/">Home</v-btn>
              </v-col>
              <v-col>
                <v-btn class="app-bar-link hover_title" to="/projects"
                  >Projects</v-btn
                >
              </v-col>
              <v-col>
                <v-btn class="app-bar-link hover_title" to="/contact"
                  >Contact</v-btn
                >
              </v-col>
            </v-row>
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

.app-bar-link {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 2vh;

  color: #0f0f0f;
}

.hover_title {
  transition: 0.3s;
  &:hover {
    color: #ff4081;
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
