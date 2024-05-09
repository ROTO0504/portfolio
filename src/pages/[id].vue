<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>

<template>
  <div class="bg fade-in">
    <v-parallax class="main-img" :src="data?.eyecatch?.url" height="100px" />

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
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="content" v-html="data.content"></div>
    </template>
  </div>
</template>

<style scoped>
img {
  width: 80%;
}
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
  filter: grayscale(0.7);
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
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
  background-color: #f4f4f4;
}

.content {
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 10vh;
  font-size: 0.7rem;
  line-height: 2.5rem;
  font-weight: 1;
  text-align: left;
  color: #05091e;
}

.fade-in {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    filter: blur(10px);
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
