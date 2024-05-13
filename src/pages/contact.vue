<script setup lang="ts">
import { mdiEmailOutline } from "@mdi/js";

useHead({
  title: "ROTO_Works - Contact - ",
});
</script>

<template>
  <div class="bg">
    <center-title title="- Contact -" />
    <v-row class="mail-btn" align="center" justify="center">
      <v-hover v-slot="{ isHovering, props }" close-delay="200">
        <v-btn
          class="mail"
          :prepend-icon="mdiEmailOutline"
          size="x-large"
          :elevation="isHovering ? 3 : 0"
          v-bind="props"
          href="mailto:rotoworks.contact@gmail.com"
          >rotoworks.contact@gmail.com</v-btn
        >
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
