<script setup lang="ts">
import { mdiSendVariantOutline } from "@mdi/js";
import gsap from "gsap";

useHead({
  title: "ROTO Works - Contact",
});

onBeforeMount(() => {
  gsap.from(".mail", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power2.out",
  });
});
</script>

<template>
  <div class="bg">
    <center-title title="- Contact -" />
    <v-row class="mail-btn" align="center" justify="center">
      <v-hover v-slot="{ isHovering, props }" close-delay="200">
        <p
          class="mail"
          :append-icon="mdiSendVariantOutline"
          size="x-large"
          :elevation="isHovering ? 3 : 0"
          v-bind="props"
          href="mailto:rotoworks.contact@gmail.com"
        >
          contact@roto.work
        </p>
      </v-hover>
    </v-row>
  </div>
</template>

<style scoped>
.bg {
  background-color: #f4f4f4;
  height: 85vh;
}

.mail-btn {
  padding-top: 10%;
}

.mail {
  background-color: #f4f4f4;
  color: black;
  font-size: 2vw;
  border-radius: 10px;
  padding: 3%;
  height: 5em;
}
</style>
