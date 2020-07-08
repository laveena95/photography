<template>
  <v-container>
      <div class="block galleryBlock">
        <h2 class="text-center">Gallery</h2>
        <v-row>
            <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="6" md="4">
                <v-card flat tile class="d-flex">
                    <v-img
                    :src="item.src"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>  
      </div>
  </v-container>
</template>

<script>
export default {
    name: 'Gallery',
    data() {
        return {
            items: [
                {
                    id: 1 ,
                    src: require('../assets/img/G1.jpg')
                },
                {
                    id: 2 ,
                    src: require('../assets/img/G2.jpg')
                },
                {
                    id: 3 ,
                    src: require('../assets/img/G3.jpg')
                },
                {
                    id: 4 ,
                    src: require('../assets/img/G4.jpg')
                },
                {
                    id: 5 ,
                    src: require('../assets/img/G5.jpg')
                },
                {
                    id: 6 ,
                    src: require('../assets/img/G6.jpg')
                },
                {
                    id: 7 ,
                    src: require('../assets/img/G7.jpg')
                },
                {
                    id: 8 ,
                    src: require('../assets/img/G8.jpg')
                },
                {
                    id: 9 ,
                    src: require('../assets/img/G9.jpg')
                },
            ]
        }
    }
}
</script>

<style>

</style>