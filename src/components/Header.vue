<template>
  <v-container>
    <v-toolbar >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>4TOGRAPHY</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon>
          <router-link to="/"><v-icon>mdi-home</v-icon></router-link>
        </v-btn>

        <v-btn icon>
          <router-link to="/about"><v-icon>mdi-pencil</v-icon></router-link>
        </v-btn>

        <v-btn icon>
          <router-link to="/contact"><v-icon>mdi-phone</v-icon></router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
      
    }),
  }
</script>
