<script setup lang="ts">
const data = ref([
  { text: "HOME", to: "/", icon: "mdiHome" },
  { text: "PROJECTS", to: "/projects", icon: "mdi-file-tree" },
  { text: "CONTACT", to: "/contact", icon: "mdi-email" },
]);
const drawer = ref(false);
</script>

<template>
  <div>
    <VApp>
      <v-navigation-drawer
        v-model="drawer"
        class=".d-block .d-sm-none .d-md-none .d-lg-none rounded-s-xl"
        app
        parmament
        temporary
        location="right"
        color="rt_white"
        r
      >
        <v-list>
          <v-list-item
            v-for="item in data"
            :key="item.text"
            :to="item.to"
            class="nav-bar-list"
            color="rt_black"
            base-color="rt_red"
          >
            <template #prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title class="nav-bar-link">{{
              item.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <template #append>
          <div class="pa-2">
            <v-btn class="mb-16" color="rt_black" href="/contact" block>
              CONTACT
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-app-bar app class="app-bar" shrink-on-scroll>
        <template #prepend>
          <v-toolbar-title>
            <nuxt-link class="app-bar-name" to="/" tag="p">ROTO</nuxt-link>
          </v-toolbar-title>
        </template>
        <template #append>
          <section class="d-none d-sm-block">
            <v-tabs color="rt_white">
              <v-tab class="app-bar-link" to="/" color="rt_black">HOME</v-tab>
              <v-tab class="app-bar-link" to="/projects" color="rt_black"
                >PROJECTS</v-tab
              >
              <v-tab class="app-bar-link" to="/contact" color="rt_black"
                >CONTACT</v-tab
              >
            </v-tabs>
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
.app-bar {
  background-color: #ffffff;
  backdrop-filter: blur(30px);
}
.app-bar-name {
  font-size: 1.6em;
  margin-left: 3vw;
  color: var(--v-theme-rt_red);
  text-decoration: none;
}

.app-bar-link {
  font-size: 1em;
  color: red;
  :hover {
    color: var(rt_red);
  }
}

.nav-bar-list {
  font-size: 1.2em;
  color: var(--v-theme-rt_red);
  height: 10vh;
}
.nav-bar-link {
  font-size: 0.9em;
  color: var(--v-theme-rt_red);
}

.nav-icon {
  font-size: 1.5em;
}
</style>
