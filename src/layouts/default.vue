<script setup lang="ts">
import { mdiHome, mdiFileTree, mdiEmail } from "@mdi/js";

const data = ref([
  { text: "HOME", to: "/", icon: { mdiHome } },
  { text: "WORKS", to: "/works", icon: { mdiFileTree } },
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
            class="nav-bar-list rounded-s-xl"
            color="rt_black"
            base-color="rt_red"
          >
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
              <v-tab class="app-bar-link" to="/works" color="rt_black"
                >WORKS</v-tab
              >
              <v-tab class="app-bar-link" to="/about" color="rt_black"
                >ABOUT</v-tab
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
  background-color: #f4f4f43d;
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
  color: #05091e;
  text-decoration: none;
  transition: 0.3s;
}
:hover {
  color: #da2128;
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
