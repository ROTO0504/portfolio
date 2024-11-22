<script setup lang="ts">
import type { Blog } from "~~/types/blog";
import gsap from "gsap";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});

const loading = ref(false);

onMounted(() => {
  setTimeout(() => {
    loading.value = true;
    gsap.from(".fade-in", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power2.out",
      stagger: {
        each: 0.1,
        from: "random",
      },
    });
  }, 1000); // 画像の読み込みを考慮
});
</script>

<template>
  <v-container>
    <v-row class="pt-16" align="center" justify="center">
      <v-col
        v-for="blog in data?.contents"
        v-show="loading"
        class="fade-in"
        :key="blog.id"
        cols="12"
        xl="4"
        lg="4"
        sm="6"
      >
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            :key="blog.id"
            class="hover"
            :class="{ 'on-hover': isHovering }"
            :elevation="isHovering ? 16 : 8"
            :rounded="isHovering ? 'xl' : 'xl'"
            v-bind="props"
          >
            <NuxtLink :to="`/works/${blog.id}`" class="link">
              <v-skeleton-loader
                :loading="!loading"
                type="image"
                height="100%"
                elevation="8"
              >
                <v-img
                  class="thumbnail"
                  :src="blog.eyecatch?.url"
                  width="100%"
                  height="100%"
                ></v-img>
              </v-skeleton-loader>

              <v-list two-line>
                <v-list-item>
                  <v-list-item-title class="blog-title">{{
                    blog.title
                  }}</v-list-item-title>
                  <v-chip class="category">{{ blog.category?.name }}</v-chip>
                  <p class="year mb-2">{{ blog.year }}</p>
                </v-list-item>
              </v-list>
            </NuxtLink>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.main {
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}

.hover {
  transition: 1s;
  &:hover {
    transform: translateY(-10px);
    backdrop-filter: blur(3px);
  }
}

.link {
  text-decoration: none;
}

.thumbnail {
  &:hover {
    transition: all 2s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
}

.blog-title {
  font-size: 1.2em;
  padding-top: 2%;
}

.category {
  color: #da2128;
  font-size: 0.8em;
}

.year {
  text-align: right;
  color: #f4f4f4;
  font-size: 0.8em;
  padding-top: 2%;
  display: inline;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  background-color: #05091e;

  padding: 0.1em 1em;
  line-height: 2.8;
}
</style>
