<script setup lang="ts">
import gsap from "gsap";

const data = ref([
  {
    id: 1,
    title: "FX Console - ローマ字対応",
    description:
      "After EffectsプラグインのFX Consoleをローマ字検索に対応させる設定ファイル(.fxs)",
    imageURL:
      "https://booth.pximg.net/24c27eb2-29e1-477c-8b34-c80d68fd6d94/i/6176975/7d0b7739-1f7e-42d5-bbda-289385dbb8db_base_resized.jpg",
  },
]);

//製作中よう
const developmentLoading = ref(true);

// 個別でロード表示をするためのフラグ
const isLoading = ref<Record<number, boolean>>({
  1: true,
  2: true,
  3: true,
});

const imageFetch = async () => {
  await Promise.all(
    data.value.map(async (download) => {
      const img = new Image();
      img.src = download.imageURL;
      await new Promise((resolve) => {
        img.onload = () => {
          isLoading.value = { ...isLoading.value, [download.id]: false };
          resolve(null);
        };
      });
    })
  );
};

onMounted(async () => {
  if (isLoading) {
    await imageFetch();
  }

  gsap.from(".fade-in", {
    duration: 3,
    opacity: 0,
    y: 100,
    ease: "back.inOut",
    stagger: {
      each: 0.1,
      from: "start",
    },
  });
});
</script>

<template>
  <v-container>
    <v-row align="center" justify="center" class="boothCard">
      <v-col cols="12" md="12" class="fade-in fill-cols pb-12">
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            class="hover"
            elevation="0"
            rounded="none"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            link
          >
            <v-row>
              <v-col cols="12" sm="4" xs="12">
                <v-skeleton-loader :loading="true" type="image">
                </v-skeleton-loader>
              </v-col>
              <v-col sm="8" xs="12">
                <v-card-title class="title pt-4">制作中</v-card-title>
                <v-skeleton-loader
                  class="skeleton"
                  :loading="true"
                  type="paragraph"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
      <v-col
        v-for="download in data"
        :key="download.id"
        class="py-4 fade-in"
        cols="12"
      >
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            class="hover"
            elevation="0"
            rounded="none"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            link
          >
            <NuxtLink :to="`/downloads/${download.id}`" class="link">
              <v-row>
                <v-col cols="12" sm="4" xs="12">
                  <v-skeleton-loader
                    :loading="isLoading[download.id]"
                    type="image"
                    height="100%"
                  >
                    <v-img :src="download.imageURL" aspect-ratio="16/9" />
                  </v-skeleton-loader>
                </v-col>
                <v-col sm="8" xs="12">
                  <v-card-title class="title pt-4">{{
                    download.title
                  }}</v-card-title>
                  <v-card-text class="description pt-4">{{
                    download.description
                  }}</v-card-text>
                </v-col>
              </v-row>
            </NuxtLink>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.boothCard {
  color: #f4f4f4;
}
.link {
  text-decoration: none;
}

.hover {
  transition: 1s;
  background-color: #ffffff30;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  }
}

.skeleton {
  background-color: #ffffff00;
}
.description {
  font-size: 0.8rem;
  color: #f4f4f4;
}

.title {
  font-size: 1.2rem;
  color: #f4f4f4;
}
</style>
