<script setup lang="ts">
import type { Logs } from "~/types/logs";

useSeoMeta({
  title: "About | ROTO Works",
  description: "ポートフォリオ",
  ogTitle: "About | ROTO Works",
  ogDescription: "ポートフォリオ",
  ogImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  ogUrl: "https://rotoworks.com/about",
  twitterTitle: "About | ROTO Works",
  twitterDescription: "ポートフォリオ",
  twitterImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  twitterCard: "summary_large_image",
});

const logs = await useMicroCMSGetList<Logs>({
  endpoint: "logs",
});
</script>
<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>About Me</v-card-title>
            <v-card-text> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-timeline side="end">
        <v-timeline-item>
          <v-card rounded="xm">
            <v-card-title class="text-h5">{{
              logs.data.value?.contents[0].title
            }}</v-card-title>
            <v-card-subtitle class="text-caption">{{
              logs.data.value?.contents[0].date
            }}</v-card-subtitle>
            <v-card-text class="text-body-1">
              <a href="https://jellyware.jp/hackaichi/"
                >愛知県大学対抗ハッカソン Hack Aichi +2024</a
              >
              にて、最優秀賞 , 日本ガイシ株式会社様より 企業賞 を受賞しました。
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-app>
</template>

<style scoped>
.a {
  text-decoration: none;
}
:visited {
  color: #000000;
  text-decoration: none;
}
</style>
