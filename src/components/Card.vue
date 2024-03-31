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
      <transition-group name="card">
        <v-col
          v-for="(blog, index) in data?.contents"
          :key="blog.id"
          cols="12"
          xl="4"
          sm="6"
        >
          <v-card
            v-if="index === 0 || (data && index === data.contents.length - 1)"
            :key="blog.id"
            class="rounded-lg hover"
            elevation="4"
          >
            <NuxtLink :to="`/${blog.id}`" class="link">
              <v-img
                class="thumbnail"
                :src="blog.eyecatch?.url"
                width="100%"
                height="100%"
              />
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
      </transition-group>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.main {
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}

.hover {
  transition: 1s;
  &:hover {
    transform: translateY(-10px);
    backdrop-filter: blur(3px);
  }
}

.link {
  text-decoration: none;
}

.card-enter-active {
  transition: all 1s ease-out;
}

.card-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.card-enter-from {
  opacity: 0;
  transform: translateY(300px);
}

.thumbnail {
  &:hover {
    transition: all 2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      filter: blur(5px);
    }
  }
}
</style>
