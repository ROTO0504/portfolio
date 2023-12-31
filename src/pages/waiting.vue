<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
</script>

<template>
  <v-container>
    <v-row class="pt-16" align="center" justify="center">
      <v-col
        v-for="blog in data?.contents"
        :key="blog.id"
        cols="12"
        xl="4"
        lg="6"
        md="12"
      >
        <v-card class="rounded-lg hover fadeIn" elevation="24"
          ><NuxtLink :to="`/${blog.id}`">
            <v-carousel
              class="pa-4"
              hide-delimiters
              cycle
              show-arrows="hover"
              height="100%"
              width="100%"
            >
              <v-carousel-item
                class="rounded-lg"
                :show-arrows="false"
                :src="blog.eyecatch?.url"
                height="100%"
                width="100%"
              ></v-carousel-item>
            </v-carousel>
            <v-list two-line>
              <v-list-item>
                <v-list-item-title>{{ blog.title }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  blog.category?.name
                }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </NuxtLink>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
main {
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}

.fadeIn {
  animation-name: fadeInAnime;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeInAnime {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.upIn {
  animation-name: upIn;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes anim {
  0% {
    transform: translateY(300px);
  }

  100% {
    transform: translateY(0px);
  }
}

.hover {
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
    backdrop-filter: blur(3px);
  }
}

.hover_title {
  transition: 0.3s;
  &:hover {
    color: #ff4081;
  }
}
</style>
