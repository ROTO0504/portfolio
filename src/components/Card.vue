<script setup lang="ts">
import type { Blog } from "~~/types/blog";
import gsap from "gsap";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: {
    limit: 100,
    orders: "-year",
  },
});

const loading = ref(false);

onMounted(() => {
  setTimeout(() => {
    loading.value = true;
    gsap.from(".fade-in", {
      filter: "blur(3px)",
      duration: 2,
      opacity: 0,
      y: 100,
      ease: "expo.Out",
      stagger: {
        each: 0.1,
        from: "start",
      },
    });
  }, 10);
});
</script>

<template>
  <v-container>
    <v-row class="py-16" align="center" justify="center">
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
            elevation="0"
            rounded="none"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            link
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
                >
                  <div
                    class="d-flex flex-column fill-height justify-center align-center text-black hover-title"
                  >
                    <h1
                      class="text-body-1 mb-4 text-white font-weight-bold text-on-img"
                    >
                      {{ blog.title }}
                    </h1>
                  </div></v-img
                >
              </v-skeleton-loader>

              <v-list two-line class="card-list">
                <v-list-item>
                  <v-list-item-title class="blog-title">{{
                    blog.title
                  }}</v-list-item-title>
                  <v-chip class="category mr-2">{{
                    blog.category?.name
                  }}</v-chip>
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
  background-color: #ffffff00;
  transition: 1s;
  &:hover {
    transform: scale(1.05);
    background-color: #f4f4f4;
    margin-top: 100px;
    margin-bottom: 100px;
    .thumbnail {
      transition: all 2s ease-in-out;
      transform: scale(1.05);
    }
    .hover-title {
      transition: all 2s ease-in-out;
      opacity: 1;
      backdrop-filter: blur(3px);
    }
  }
}

.card-list {
  background-color: #ffffff30;
}
.hover-title {
  opacity: 0;
  transition: all 2s ease-in-out;
  color: #f4f4f4;
  font-weight: bold;
}

.link {
  text-decoration: none;
}

.thumbnail {
  filter: blur(0px);
  &:hover {
    transition: all 2s ease-in-out;
    transform: scale(1.05);
  }
}

.blog-title {
  color: #f4f4f4;
  mix-blend-mode: difference;
  font-size: 1.5em;
  padding-top: 2%;
}

.category {
  color: #da2128;
  font-size: 1em;
}

.year {
  text-align: right;
  color: #f4f4f4;
  font-size: 1em;
  padding-top: 2%;
  display: inline;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  background-color: #05091e;

  padding: 0.1em 1em;
  line-height: 2.8;
}

.text-on-img {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
