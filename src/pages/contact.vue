<template>
  <v-app>
    <v-container>
      <v-row justify="center" align-content="center">
        <v-card elevation="10" class="my-card rounded-lg">
          <v-card-subtitle class="subtitle pa-5">Contact</v-card-subtitle>
          <v-row class="pa-1 ma-1">
            <v-col cols="3" class="pa-0 ma-0">
              <img
                src="../assets/img/icon.png"
                class="rounded-circle my-icon"
              />
            </v-col>
            <v-col cols="9" class="pa-0 ma-0">
              <v-list class="list">
                <v-list-item>
                  <v-row class="pa-0 ma-0">
                    <twitter class="icon mr-3"></twitter>
                    <v-list-item-title class="text">Twitter</v-list-item-title>
                  </v-row>
                </v-list-item>
                <v-list-item>
                  <v-row class="pa-0 ma-0">
                    <mail class="icon mr-3" />
                    <v-list-item-title class="text">Mail</v-list-item-title>
                  </v-row>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.my-card {
  max-width: 60%;
  background-color: rgba(255, 255, 255, 0.192);
  backdrop-filter: blur(10px);
}

.text {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 1.5vw;
}

.subtitle {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 30px;
}
.icon {
  max-width: 30px;
  font-size: 5vw;
}

.list {
  background-color: rgba(255, 255, 255, 0);
}

.my-icon {
  max-width: 100%;
  margin: 10px;
  min-width: 1vw;
}
</style>
