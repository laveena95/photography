<template>
  <v-container>
    <v-toolbar >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>4TOGRAPHY</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-phone</v-icon>
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
