<script setup lang="ts">
useHead({
  title: "ROTO Works - Top - ",
});

useSeoMeta({
  title: "TOP | ROTO Works",
  description: "ポートフォリオ",
  ogTitle: "TOP | ROTO Works",
  ogDescription: "ポートフォリオ",
  ogImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  ogUrl: "https://rotoworks.com/",
  twitterTitle: "TOP | ROTO Works",
  twitterDescription: "ポートフォリオ",
  twitterImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  twitterCard: "summary_large_image",
});

useHead({
  meta: [
    {
      name: "google-site-verification",
      content: "gKGNFUWZjLont0dAOgJxDCSUoSmdmxeSMhmduXgetHg",
    },
  ],
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

function reelClick() {
  window.open("https://youtu.be/10331qcWriU", "_blank");
}
</script>

<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card
      class="text-h6 pa-2"
      rounded="lg"
      min-width="80%"
      prepend-icon="mdi-update"
    >
      <VScodeAnimation class="py-12" />
      <p class="text-center">このポートフォリオは鋭意制作中です</p>
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>
  <section class="top">
    <div
      class="parallax-btn"
      style="position: relative; width: 100%; overflow: hidden"
    >
      <div style="max-width: 100%">
        <div
          style="
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
          "
        >
          <video
            class="background-mov"
            autoplay
            muted
            loop
            width="100%"
            @click="reelClick"
          >
            <source
              src="https://5kjrwj-my.sharepoint.com/:v:/g/personal/roto_5kjrwj_onmicrosoft_com/EWySZ3-u329EvgcXOf20H34Bl_J1UXW34THNLvY3WP0unA?download=1"
            />
          </video>
          <a
            rounded="0"
            class="reel-btn"
            style="
              position: absolute;
              bottom: 50%;
              left: 80%;
              transform: translateX(-50%);
            "
            height="60"
            width="35%"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=10331qcWriU"
          >
            REEL 2024 →
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="works">
    <CenterTitle class="works-title" title="Works" />
    <div>
      <Card />
    </div>
  </section>
</template>

<style scoped>
.top-background {
  background-color: #f4f4f4;
}

.skill-card {
  background-color: #f4f4f4;
  height: 10vh;
  width: 10vh;
}

.main-movie {
  margin-top: -64px;
  pointer-events: none;
  filter: blur(3px);
}

.center {
  text-align: center;
  font-style: bold;
  font-size: 60px;
  color: #f4f4f4;
}

.VScode {
  width: 100%;
  height: 100%;
  min-height: 300px;
  position: relative;
  padding-top: 3%;
}

.reel-btn {
  position: absolute;
  white-space: nowrap;
  padding: 0px 20px 0px 20px;
  background-color: #05091e;
  color: #ffffff;
  font-size: 3dvw;
  transition: 1s;
  &:hover {
    background-color: none;
  }
}

.works-title {
  background-color: #da2128;
  color: #f4f4f4;

  padding-bottom: 5%;
}

.background-mov {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}
</style>
