<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
</script>

<template>
  <v-col cols="12" md="6">
    <v-carousel
      hide-delimiters
      cycle
      show-arrows="hover"
      height="100%"
      transition="fade-transition"
    >
      <v-carousel-item
        v-for="blog in data?.contents"
        :key="blog.id"
        :show-arrows="true"
        :src="blog.eyecatch?.url"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-col>
</template>
