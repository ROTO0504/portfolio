<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
useHead({
  title: "ROTO Works - Works",
  htmlAttrs: {
    lang: "ja",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "../assets/img/icon.png",
    },
  ],
});

useSeoMeta({
  title: "Works | ROTO Works",
  description: "ポートフォリオ",
  ogTitle: "Works | ROTO Works",
  ogDescription: "ポートフォリオ",
  ogImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  ogUrl: "https://rotoworks.com/works",
  twitterTitle: "Works | ROTO Works",
  twitterDescription: "ポートフォリオ",
  twitterImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="pj-bg">
    <center-title title="Works" />
    <card />
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

.pj-bg {
  background-color: #f4f4f4;
  min-height: 100vh;
}
</style>
