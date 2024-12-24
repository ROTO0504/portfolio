<script setup lang="ts">
useSeoMeta({
  title: "TOP | ROTO Works",
  description: "ポートフォリオ",
  ogTitle: "TOP | ROTO Works",
  ogDescription: "ポートフォリオ",
  ogImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  ogUrl: "https://roto.work",
  twitterTitle: "TOP | ROTO Works",
  twitterDescription: "映像制作やWeb制作を行っています。",
  twitterImage:
    "https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad",
  twitterCard: "summary_large_image",
});
</script>

<template>
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
            poster="https://images.microcms-assets.io/assets/72489c2727c44785a1b44ece4355d9bc/0660df1bb5ae4921b6f6cca57d14c3a2/OP-result%20-%20frame%20at%200m3s.jpg?auto=format,compress&h=1080"
            autoplay
            muted
            loop
            width="100%"
          >
            <source
              src="https://5kjrwj-my.sharepoint.com/:v:/g/personal/roto_5kjrwj_onmicrosoft_com/EQukCaILQOBHhAZ2tBYb1ncB7TE78Ak3Y3IWtYPDqF8txg?download=1"
            />
          </video>
          <v-btn
            rounded="5"
            class="reel-btn"
            min-width="30%"
            style="
              position: absolute;
              bottom: 50%;
              left: 80%;
              transform: translateX(-50%);
            "
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=10331qcWriU"
            size="large"
            variant="outlined"
          >
            REEL 2024 →
          </v-btn>
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
  color: #f4f4f4;
  font-size: 100%;
  transition: 1s;
  text-decoration: none;
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
  filter: brightness(0.5);
}
</style>
