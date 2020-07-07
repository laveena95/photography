<template>
  <div class="heroBlock" >
      <v-carousel hide-delimiters cycle="">
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        >
        <v-row
            class="fill-height title"
            align="center"
            justify="center"
          >
            <div>{{ item.title }}</div>
          </v-row>
        </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
    name: 'Hero',
    data () {
      return {
        items: [
          {
            src: require('../assets/img/1.jpg'),
            title: "Love Your STYLE",
          },
          {
            src: require('../assets/img/2.jpg'),
            title: "Nature",
          },
          {
            src: require('../assets/img/3.jpg'),
            title: "We are CREATIVE",
          },
          {
            src: require('../assets/img/4.jpg'),
            title: "Refelect YOURSELF",
          },
        ],
      }
    },
};
</script>

<style>

</style>