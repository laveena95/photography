<template>
  <v-container>
    <v-toolbar >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>4TOGRAPHY</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
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
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
               <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item >
              <v-list-item-title>
                <router-link to="/"><v-icon>mdi-home</v-icon></router-link>
              </v-list-item-title>
            </v-list-item>
             <v-list-item >
              <v-list-item-title>
                <router-link to="/about"><v-icon>mdi-pencil</v-icon></router-link>
              </v-list-item-title>
            </v-list-item>
             <v-list-item >
              <v-list-item-title>
                <router-link to="/contact"><v-icon>mdi-phone</v-icon></router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
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
