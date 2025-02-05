<script setup lang="ts">
import { mdiSendVariantOutline } from "@mdi/js";
import gsap from "gsap";

useHead({
  title: "ROTO Works - Contact",
});

useSeoMeta({
  title: "Contact | ROTO Works",
  description: "ポートフォリオ",
  ogTitle: "Contact | ROTO Works",
  ogDescription: "ポートフォリオ",
  ogImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  ogUrl: "https://roto.work/contact",
  twitterTitle: "Contact | ROTO Works",
  twitterDescription: "ポートフォリオ",
  twitterImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  twitterCard: "summary_large_image",
});

onBeforeMount(() => {
  gsap.from(".mail", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "bounce.out",
  });

  gsap.from(".mail-btn", {
    delay: 0.5,
    duration: 4,
    opacity: 1,
    ease: "power2.in",
  });
});
</script>

<template>
  <div class="bg contact pt-16">
    <CenterTitle title="Contact" />
    <v-row class="mail-btn" align="center" justify="center">
      <a
        class="mail"
        :append-icon="mdiSendVariantOutline"
        href="mailto:contact@roto.work"
        variant="text"
      >
        contact@roto.work
      </a>
    </v-row>
  </div>
</template>

<style scoped>
.contact {
  min-height: 98dvh;
}
.bg {
  background-color: #00030f;
  height: 85vh;
  font-family: "LINE_Seed_Bd";
}

.mail-btn {
  padding-top: 10%;
  opacity: 1;
  height: 50dvh;
}

.mail {
  color: #f4f4f4;
  font-size: 2em;
  border-radius: 10px;
  height: 5em;
  text-decoration: none;
  font-kerning: 100;
}
</style>
