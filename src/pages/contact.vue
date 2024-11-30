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
  ogUrl: "https://rotoworks.com/contact",
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

  gsap.to(".mail-btn", {
    delay: 0.5,
    duration: 1,
    opacity: 1,
    ease: "power2.in",
  });
});
</script>

<template>
  <div class="bg">
    <CenterTitle title="Contact" />
    <v-row class="mail-btn" align="center" justify="center">
      <v-hover v-slot="{ isHovering, props }" close-delay="200">
        <p
          class="mail"
          :append-icon="mdiSendVariantOutline"
          size="x-large"
          :elevation="isHovering ? 3 : 0"
          v-bind="props"
          href="mailto:rotoworks.contact@gmail.com"
        >
          contact@roto.work
        </p>
      </v-hover>
    </v-row>
  </div>
</template>

<style scoped>
.bg {
  background-color: #f4f4f4;
  height: 85vh;
}

.mail-btn {
  padding-top: 10%;
  opacity: 1;
}

.mail {
  background-color: #f4f4f4;
  color: black;
  font-size: 2vw;
  border-radius: 10px;
  padding: 3%;
  height: 5em;
}
</style>
