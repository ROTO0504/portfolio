<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>

<template>
  <v-parallax
    class="main-img"
    :src="data?.eyecatch?.url"
    height="15%"
  ></v-parallax>
  <div class="bg">
    <template v-if="data">
      <h1 class="title pt-5">
        {{ data.title }}
      </h1>
      <div class="category">
        <div>Category : {{ data.category?.name }}</div>
      </div>
      <div class="center">
        <img class="sub-img" :src="data.eyecatch?.url" alt="" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.title {
  font-size: 3rem;
  margin-left: 10vw;
  font-weight: bold;
  text-align: left;
  color: #05091e;
}

.bg {
  background-color: #f4f4f4;
  height: 100%;
}

.center {
  text-align: center;
}

.main-img {
  width: 100%;
  object-fit: fill;
  object-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  filter: grayscale(0.7);
  transition: 0.3s;
  &:hover {
    backdrop-filter: blur(3px);
  }
}

.category {
  text-align: left;
  color: #da2128;
  margin-left: 10vw;
  padding-bottom: 2%;
}

.sub-img {
  width: 80%;
  height: 80%;
  object-fit: cover;
  object-position: center;
  margin-top: 5%;
  margin-bottom: 5%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #f4f4f4;
}
</style>
