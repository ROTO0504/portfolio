<script setup>
useHead({
  title: "ROTO_Works - Top - ",
});

useSeoMeta({
  description: "ROTO_Works",
  twitterDescription: "Portfolio",
  twitterImage: "/src/assets/img/icon.png",
  twitterCard: "summary",
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
</script>

<template>
  <div>
    <v-row>
      <v-col class="top-background" cols="12" md="6">
        <Top />
      </v-col>
      <v-col
        class="top-background d-flex flex-row justify-center"
        cols="12"
        md="6"
      >
      </v-col>
    </v-row>

    <v-parallax
      class="parallax-img"
      height="90vh"
      src="https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad"
      ><v-btn
        rounded="0"
        elevation="4"
        class="reel-btn"
        height="50"
        width="300"
        href="https://youtu.be/ffD5NTvhjTE"
        target="_blank"
        rel="noopener noreferrer"
        >REEL 2024
        <p class="reel-btn-arrow">→</p></v-btn
      ></v-parallax
    >
  </div>
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
  min-height: 300;
  position: relative;
  padding-top: 3%;
}

.reel-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f4f4f4;
  color: #552f7f;
  font-size: 1em;
  transition: 1s;
}
:hover {
  transition: 1s;
}

.reel-btn-arrow {
  transition: 1s;
  margin-left: 10px;
}

.reel-btn:hover .reel-btn-arrow {
  transition: 1s;
  margin-left: 30px;
}
</style>
