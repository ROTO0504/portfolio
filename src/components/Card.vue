<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});

const loading = ref(false);

onMounted(() => {
  setTimeout(() => {
    loading.value = true;
  }, 200);
});
</script>

<template>
  <v-container>
    <v-row class="pt-16" align="center" justify="center">
      <v-col
        v-for="(blog, index) in data?.contents"
        :key="blog.id"
        cols="12"
        xl="6"
        sm="4"
      >
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            v-if="index === 0 || (data && index === data.contents.length - 1)"
            :key="blog.id"
            class="hover"
            :class="{ 'on-hover': isHovering }"
            :elevation="isHovering ? 16 : 8"
            :rounded="isHovering ? 'xl' : 'xl'"
            v-bind="props"
          >
            <NuxtLink :to="`/${blog.id}`" class="link">
              <v-skeleton-loader
                :loading="!loading"
                type="image"
                height="100%"
                elevation="8"
              >
                <v-img
                  class="thumbnail"
                  :src="blog.eyecatch?.url"
                  width="100%"
                  height="100%"
                ></v-img>
              </v-skeleton-loader>

              <v-list two-line>
                <v-list-item>
                  <v-list-item-title class="blog-title">{{
                    blog.title
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="category">
                    <v-chip>{{
                      blog.category?.name
                    }}</v-chip></v-list-item-subtitle
                  >
                </v-list-item>
              </v-list>
            </NuxtLink>
          </v-card>
        </v-hover>
      </v-col>
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
  transform: translateY(200px);
  transition: all 4s ease-in-out;
}

.thumbnail {
  &:hover {
    transition: all 2s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
}

.blog-title {
  font-size: 1.2em;
  padding-top: 2%;
}
.category {
  font-size: 0.7em;
  color: #da2128;
  padding-top: 2%;
}
</style>
