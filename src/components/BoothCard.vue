<script setup lang="ts">
import gsap from "gsap";

const data = ref([
  {
    id: 1,
    title: "title1",
    description: "description1",
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
    duration: 1,
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
    <v-row align="center" justify="center">
      <v-col v-for="download in data" :key="download.id" cols="12">
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
                <v-col cols="3">
                  <v-skeleton-loader
                    :loading="isLoading[download.id]"
                    type="image"
                    height="100%"
                  >
                    <v-img
                      class="thumbnail"
                      :src="download.imageURL"
                      width="100%"
                      height="100%"
                      aspect-ratio="16/9"
                      cover
                    />
                  </v-skeleton-loader>
                </v-col>
                <v-col cols="9">
                  <v-card-title class="title">{{
                    download.title
                  }}</v-card-title>
                  <v-card-text class="description">{{
                    download.description
                  }}</v-card-text>
                </v-col>
              </v-row>
            </NuxtLink>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12">
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
              <v-col cols="3">
                <v-skeleton-loader :loading="true" type="image" height="100%">
                  <v-img
                    class="thumbnail"
                    width="100%"
                    height="100%"
                    aspect-ratio="16/9"
                    cover
                  />
                </v-skeleton-loader>
              </v-col>
              <v-col cols="9">
                <v-card-title class="title">制作中</v-card-title>
                <v-skeleton-loader
                  :loading="true"
                  type="paragraph"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.link {
  text-decoration: none;
  color: black;
}
</style>
