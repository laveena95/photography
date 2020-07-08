<template>
  <v-content>
      <div class="staticHero">
         <v-img src="../assets/img/G2.jpg" style="max-height: 200px">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <v-container>
                <div class="headline">ABOUT US</div>
              </v-container>
            </v-col>
          </v-row>
        </v-img>
      </div>

      <div class="block">
        <v-container>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </v-container>
      </div>

      <div class="block">
        <v-container>
          <h2 class="text-center">Our Teams</h2>
          <v-row>
            <v-col v-for="item in items" :key="item.id" cols="12" md="4">
              <v-card
                flat
                class="mx-auto"
              >
                <v-img
                  class="white--text align-end"
                  height="280px"
                  :src="item.src"
                >
                </v-img>
                <v-card-text class="text--primary text-center">
                  <p class="title">{{item.name}}</p>
                  <p>{{item.title}}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>

  </v-content>
</template>

<script>
export default {
    name: 'About',
    data() {
      return {
        items: [
          {
            id: 1,
            src: require("../assets/img/team1.jpg"),
            name: "Peter Smith",
            title: "Director"
          },
          {
            id: 2,
            src: require("../assets/img/team2.jpg"),
            name: "Roy Perry",
            title: "Photographer"
          },
          {
            id: 3,
            src: require("../assets/img/team3.jpg"),
            name: "Lisa White",
            title: "Freelancer"
          },
        ]
      };
    }
};
</script>

