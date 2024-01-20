<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
const isLoading = ref(true);
const cardTransitionDelay = 200;

onMounted(() => (isLoading.value = false));
</script>

<template>
  <v-container>
    <v-row class="pt-16" align="center" justify="center">
      <v-col
        v-for="(blog, index) in data?.contents"
        :key="blog.id"
        cols="12"
        xl="4"
        lg="6"
        md="12"
      >
        <transition
          name="fade-up"
          appear
          mode="out-in"
          :duration="{ enter: 800, leave: 0 }"
          :delay="index * cardTransitionDelay"
        >
          <v-card
            v-if="index === 0 || (data && index === data.contents.length - 1)"
            :key="blog.id"
            class="rounded-lg hover"
            elevation="4"
            min-height="400"
            max-height="30vh"
          >
            <NuxtLink :to="`/${blog.id}`" class="link">
              <v-img :src="blog.eyecatch?.url" width="100%" height="100%" />

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
        </transition>
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

.hover {
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
    backdrop-filter: blur(3px);
  }
}

.link {
  text-decoration: none;
}
</style>
