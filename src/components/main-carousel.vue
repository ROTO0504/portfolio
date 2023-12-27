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
      height="50vh"
      transition="fade-transition"
      reverse-transition="fade-transition"
    >
      <NuxtLink
        v-for="blog in data?.contents"
        :key="blog.id"
        :to="`/${blog.id}`"
      >
        <v-carousel-item
          :show-arrows="true"
          :src="blog.eyecatch?.url"
          cover
        ></v-carousel-item>
      </NuxtLink>
    </v-carousel>
  </v-col>
</template>
