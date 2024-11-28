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
  {
    id: 2,
    title: "title2",
    description: "description2",
    imageURL: "bbbbbbbb",
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
    imageURL: "cccccccc",
  },
]);

// 個別でロード表示をするためのフラグ
const isLoading = ref(data.value.map(() => true));

const imageFetch = async () => {
  for (let i = 0; i < data.value.length; i++) {
    const res = await fetch(data.value[i].imageURL);
    if (!res.ok) {
      isLoading.value[i] = false;
      return;
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    data.value[i].imageURL = url;
  }
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
            min-height="200"
          >
            <NuxtLink :to="`/downloads/${download.id}`" class="link">
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
                />
              </v-skeleton-loader>
              <v-card-title class="title">{{ download.title }}</v-card-title>
              <v-card-text class="description">{{
                download.description
              }}</v-card-text>
            </NuxtLink>
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
