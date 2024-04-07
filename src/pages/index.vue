<script setup>
import TitleBar from "../components/TitleBar.vue";

useHead({
  title: "ROTO_Works - Top - ",
});
</script>

<template>
  <div>
    <Top />

    <v-parallax
      class="parallax-img"
      height="90vh"
      src="https://i.vimeocdn.com/video/1825184909-2bad0acdeb92c7b0ecd2b4a04750cdcea52bd0c71816efd11258c3537326b96c-d_1920x1080?r=pad"
      ><v-btn
        rounded="0"
        elevation="0"
        class="reel_btn"
        height="50"
        width="300"
        href="https://youtu.be/ffD5NTvhjTE"
        target="_blank"
        rel="noopener noreferrer"
        >REEL 2024
        <p class="reel_btn_arrow">→</p></v-btn
      ></v-parallax
    >
    <MainMovie url="https://www.youtube.com/embed/ffD5NTvhjTE" />
    <h2 class="mt-16 center">工事中</h2>
    <VScodeAnimation class="VScode"></VScodeAnimation>
  </div>
  <TitleBar title-bar="ROTO" />
  <Gradation />
</template>

<style scoped>
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

.reel_btn {
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

.reel_btn_arrow {
  transition: 1s;
  margin-left: 10px;
}

.reel_btn:hover .reel_btn_arrow {
  transition: 1s;
  margin-left: 30px;
}
</style>
