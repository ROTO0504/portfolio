<template>
  <div class="background">
    <div class="image-container">
      <img
        v-for="blog in data?.contents"
        :key="blog.id"
        :src="blog.eyecatch?.url"
        class="parallax-image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Blog } from "~~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.background {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.parallax-image {
  height: 100px; /* 小さめのサイズ */
  width: auto; /* アスペクト比を維持 */
  margin: 0px; /* 隙間を空ける */
}
</style>
