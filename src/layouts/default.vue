<script setup lang="ts">
import { mdiHome, mdiFileTree, mdiEmail } from "@mdi/js";

const data = ref([
  { text: "TOP", to: "/", icon: { mdiHome } },
  { text: "WORKS", to: "/works", icon: { mdiFileTree } },
  { text: "DOWNLOADS", to: "/downloads", icon: { mdiFileTree } },
  { text: "ABOUT", to: "/about", icon: { mdiEmail } },
  { text: "CONTACT", to: "/contact", icon: { mdiEmail } },
]);
const drawer = ref(false);
</script>

<template>
  <div>
    <VApp>
      <v-navigation-drawer
        v-model="drawer"
        class="d-md-none d-lg-none d-xl-none rounded-s-xl nav-bar"
        app
        parmament
        temporary
        location="right"
      >
        <v-list>
          <v-list-item
            v-for="item in data"
            :key="item.text"
            :to="item.to"
            class="nav-bar-list rounded-s-xl"
            color="rt_red"
            base-color="rt_white"
          >
            <v-list-item-title class="nav-bar-link">{{
              item.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <template #append>
          <div class="pa-2">
            <v-btn class="mb-16" href="/contact" block> CONTACT </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-app-bar app class="app-bar">
        <template #prepend>
          <v-toolbar-title>
            <nuxt-link class="app-bar-name" to="/" tag="p">ROTO</nuxt-link>
          </v-toolbar-title>
        </template>
        <template #append>
          <section class="d-none d-sm-block">
            <v-tabs color="rt_white">
              <v-tab class="app-bar-link" to="/" color="rt_red">TOP</v-tab>
              <v-tab class="app-bar-link" to="/works" color="rt_red"
                >WORKS</v-tab
              >
              <v-tab class="app-bar-link" to="/downloads" color="rt_red"
                >downloads</v-tab
              >

              <v-tab class="app-bar-link" to="/about" color="rt_red"
                >ABOUT</v-tab
              >
              <v-tab class="app-bar-link" to="/contact" color="rt_red"
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
      <VMain style="padding-top: 0px">
        <NuxtPage />
      </VMain>
      <v-footer>
        <v-col class="text-center mt-4 footer" cols="12">
          <NuxtLink class="footer-link" :to="'/'" tag="div">
            {{ new Date().getFullYear() }} — <strong>ROTO Works</strong>
          </NuxtLink>
        </v-col>
      </v-footer>
    </VApp>
  </div>
</template>

<style scoped lang="scss">
.app-bar {
  background-color: #ffffff0d;
  backdrop-filter: blur(10px);
}

@keyframes fadeInText {
  0% {
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.app-bar-name {
  font-size: 1.6em;
  margin-left: 3vw;
  color: #f4f4f4;
  text-decoration: none;
  transition: 0.3s;
  mix-blend-mode: difference;
}
:hover {
  color: #da2128;
}

.app-bar-link {
  font-size: 1em;
  mix-blend-mode: difference;
  color: #f4f4f4;
  :hover {
    color: var(rt_red);
  }
  :active {
    color: var(rt_red);
  }
}

.nav-bar {
  background-color: #00000000;
  backdrop-filter: blur(10px);
}

.nav-bar-list {
  font-size: 1.2em;
  color: var(--v-theme-rt_red);
  height: 10vh;
}

.nav-bar-link {
  font-size: 0.9em;
  color: var(--v-theme-rt_red);
  text-align: center;
}

.nav-icon {
  font-size: 1.5em;
}

.footer-link {
  cursor: pointer;
  text-decoration: none;
  color: var(--v-theme-rt_red);
}
</style>
