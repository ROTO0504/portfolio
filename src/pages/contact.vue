<template>
  <v-app>
    <v-container>
      <v-row justify="center" align-content="center">
        <v-card elevation="20" class="my-card rounded-lg">
          <v-card-subtitle class="subtitle pt-5 pl-5">Contact</v-card-subtitle>
          <v-row class="pa-0 ma-0">
            <img src="../assets/img/icon.png" class="rounded-circle my-icon" />

            <v-col class="pa-0 ma-0">
              <v-list class="list">
                <v-list-item>
                  <v-row class="pa-0 ma-0">
                    <twitter class="icon mr-3"></twitter>
                    <p class="text">Twitter</p>
                  </v-row>
                </v-list-item>
                <v-list-item>
                  <v-row class="pa-0 ma-0">
                    <mail class="icon mr-3" />
                    <p class="text">Mail</p>
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
  min-width: 25%;
  width: 60%;
  background-color: rgba(255, 255, 255, 0.192);
  backdrop-filter: blur(10px);
}
.text {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 2vh;
  text-align: left;
  line-height: 2vh;
  display: grid;
  place-items: center;
}
.subtitle {
  font-family: "M PLUS 1p", sans-serif;
  font-style: bold;
  font-weight: 800;
  font-size: 2vw;
  padding: 1%;
}
.icon {
  font-size: 2vh;
}
.list {
  background-color: rgba(255, 255, 255, 0);
  display: grid;
  place-items: left;
}
.my-icon {
  width: 15vw;
  height: 15vw;
  min-width: 100px;
  min-height: 100px;
  max-width: 200px;
  max-height: 200px;
  padding: 2vw;
}
</style>
