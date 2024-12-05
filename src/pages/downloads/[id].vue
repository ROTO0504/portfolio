<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});

useSeoMeta({
  title: `ROTO Works - ${data?.value?.title ?? ""}`,
  description: data?.value?.description,
  ogTitle: "ROTO Works - Blog",
  ogDescription: data?.value?.title,
  ogImage: data?.value?.eyecatch?.url,
  ogUrl: `https://rotoworks.com/blogs/${data?.value?.id}`,
  twitterTitle: data?.value?.title,
  twitterDescription: data?.value?.description,
  twitterImage: data?.value?.eyecatch?.url,
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: {
    lang: "ja",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

const dialog = ref(false);

onMounted(() => {
  dialog.value = true;
});
</script>

<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card
      class="text-h6 pa-2"
      rounded="lg"
      min-width="80%"
      prepend-icon="mdi-update"
    >
      <VScodeAnimation class="pb-8" />
      <p class="text-center px-8 dialog-text">このページは鋭意制作中です</p>
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>
  <div class="bg fade-in">
    <div class="main-img-wrap">
      <v-parallax class="main-img" :src="data?.eyecatch?.url" height="100%" />
    </div>
    <template v-if="data">
      <h1 class="title pt-5">
        {{ data.title }}
      </h1>
      <div class="category">
        <div>
          <p>Category : {{ data.category?.name }}</p>
        </div>
      </div>
      <div class="year">
        <p>Year : {{ data.year }}</p>
      </div>
      <div class="softs">
        <AfterEffectsIcon
          v-if="data.soft.includes('After Effects')"
          class="soft"
        />
        <BlenderIcon v-if="data.soft.includes('Blender')" class="soft" />
        <DaVinciResolveIcon
          v-if="data.soft.includes('DaVinci Resolve')"
          class="soft"
        />
      </div>
      <div class="center">
        <img class="sub-img" :src="data.eyecatch?.url" alt="" />
      </div>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-container class="content">
        <div v-html="data.content" />
      </v-container>
    </template>
  </div>
</template>

<style scoped>
img {
  width: 80%;
}

.year {
  text-align: right;
  color: #05091e;
  font-size: 1rem;

  margin-right: 10vw;
}

.title {
  margin-left: 10vw;
  margin-right: 10vw;
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
  filter: grayscale(1);
  object-fit: cover;
}

.category {
  text-align: left;
  color: #da2128;
  margin-left: 10vw;
  padding-bottom: 2%;
}

.sub-img {
  margin-left: 10vw;
  margin-right: 10vw;
  width: 80%;
  height: 80%;
  object-fit: cover;
  object-position: center;
  margin-top: 5%;
  margin-bottom: 5%;
  box-shadow: 0px 0px 20px black;
  background-color: #f4f4f4;
}

.content {
  margin-bottom: 10vh;
  font-size: 1rem;
  line-height: 2.5rem;
  font-weight: 1;
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

.softs {
  text-align: right;
  margin-right: 10vw;
  color: #05091e;
}

.soft {
  margin-left: 0.5%;
  font-size: 1.5rem;
}

.main-img-wrap {
  width: 100%;
  height: 20vh;
  overflow: hidden;
  position: relative;
}

.dialog-text {
  font-family: "LINE_Seed_Bd";
}
</style>
