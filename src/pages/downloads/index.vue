<script setup lang="ts">
import BoothCard from "~/components/BoothCard.vue";

const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
useSeoMeta({
  title: "Downloads | ROTO Works",
  description: "映像制作",
  ogTitle: "Downloads | ROTO Works",
  ogDescription: "映像制作",
  ogImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  ogUrl: "https://roto.work/downloads",
  twitterTitle: "Downloads | ROTO Works",
  twitterDescription: "映像制作",
  twitterImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="download">
    <center-title class="pb-4" title="Downloads" />
    <BoothCard class="pt-12" v-if="!isLoading" />
  </div>
</template>

<style scoped lang="scss">
main {
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}

.download {
  min-height: 100dvh;
}
</style>
