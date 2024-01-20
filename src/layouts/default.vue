<script setup lang="ts">
const drawer = ref(false);
</script>

<template>
  <div>
    <VApp>
      <v-navigation-drawer
        v-model="drawer"
        class=".d-block .d-sm-none .d-md-none .d-lg-none"
        app
        parmament
        temporary
        location="right"
      >
        <v-list>
          <v-list-item to="/">
            <v-list-item-title class="nav-bar-link"
              >HOME</v-list-item-title
            ></v-list-item
          >
          <v-list-item to="/projects">
            <v-list-item-title class="nav-bar-link"
              >Projects</v-list-item-title
            ></v-list-item
          >
          <v-list-item to="/contact">
            <v-list-item-title class="nav-bar-link"
              >Contact</v-list-item-title
            ></v-list-item
          >
        </v-list>
      </v-navigation-drawer>
      <v-app-bar class="app-bar rounded-b-xl">
        <template #prepend>
          <v-toolbar-title>
            <nuxt-link class="app-bar-name" to="/" tag="div">ROTO</nuxt-link>
          </v-toolbar-title>
        </template>
        <template #append>
          <section class="d-none d-sm-block">
            <v-tab class="app-bar-link" to="/">HOME</v-tab>
            <v-tab class="app-bar-link" to="/projects">Projects</v-tab>
            <v-tab class="app-bar-link" to="/contact">Contact</v-tab>
          </section>
          <section>
            <v-app-bar-nav-icon
              class="d-sm-none nav-icon"
              @click="drawer = !drawer"
            />
          </section>
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
  font-size: 1.9em;
  margin-left: 3vw;
  color: #000000;
  text-decoration: none;
}

.app-bar-link {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 1em;
  color: #0f0f0f;
}

.nav-bar-link {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 0.9em;
  color: #0f0f0f;
}

.nav-icon {
  font-size: 1.5em;
}
</style>
