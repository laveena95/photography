<template>
  <v-app>
    <v-app-bar
      app
      dark
    > 
    <Header/>
    </v-app-bar>

    <v-content>
      <Hero/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Hero from './components/Hero';

export default {
  name: 'App',

  components: {
    Header,
    Hero
  },

  data: () => ({
    //
  }),
};
</script>
