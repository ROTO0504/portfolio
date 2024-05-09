<script setup lang="ts">
useHead({
  title: "ROTO_Works - Contact - ",
});
</script>

<template>
  <div class="bg">
    <center-title title="- Contact -" />
    <v-row class="mail-btn" align="center" justify="center">
      <v-btn class="mail" href="mailto:rotoworks.contact@gmail.com"
        >rotoworks.contact@gmail.com</v-btn
      >
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
  background-color: #da2128;
  color: white;
  font-size: 1.5rem;
  border-radius: 10px;
}
</style>
