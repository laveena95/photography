<template>
  <div class="block LatestPostBlock">
      <h2 class="text-center">Latest Post</h2>
      <v-container>
        <v-row>
            <v-col cols="4" v-for="item in items" :key="item.id">
                <v-card
                    class="mx-auto"
                    >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="item.src"
                    >
                    <v-card-title ><div style="background:black;opacity:0.7;width:100%;text-align:center">{{ item.title }}</div></v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">{{item.subtitle}}</v-card-subtitle>

                    <v-card-text class="text--primary">
                    <div>{{item.description}}</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="primary"
                        text
                    >
                    MORE
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    name: 'LatestPost',
    data() {
        return {
            items: [
                {
                    id: 1,
                    title:'Photography 1',
                    subtitle:'What?',
                    description:"What is Loreum Ipsum",
                    src: require('../assets/img/G1.jpg'),
                },
                {
                    id: 2,
                    title:'Photography 2',
                    subtitle:'Why',
                    description:"Why Loreum Ipsum",
                    src: require('../assets/img/G2.jpg'),
                },
                {
                    id: 3,
                    title:'Photography 3',
                    subtitle:'When?',
                    description:"When to use Loreum Ipsum,",
                    src: require('../assets/img/G7.jpg'),
                },
            ]
        }
    }
}
</script>

<style>

</style>