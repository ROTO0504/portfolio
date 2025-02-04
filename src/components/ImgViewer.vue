<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
});

const dialog = ref(false);

function imageClick() {
  dialog.value = true;
}
</script>
<template>
  <div class="viewer">
    <img class="viewer-img" :src="src" alt="image" @click="imageClick()" />
    <v-dialog v-model="dialog" width="auto">
      <v-img class="max-img" :src="src" alt="image" />
    </v-dialog>
  </div>
</template>

<style scoped>
.viewer-img {
  width: 100%;
  height: auto;
  cursor: pointer;
  box-shadow: #05091e 0px 0px 3px;
}

.max-img {
  width: 90dvw;
  height: auto;
}
</style>
