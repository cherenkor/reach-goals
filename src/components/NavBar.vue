<template>
  <div id="navbar">
    <v-toolbar app dense class="white elevation-0">
      <v-toolbar-title class="blue--text text--darken-2 text-uppercase">
        <span class="font-weight-light">Make</span>
        <span>STEP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon flat color="grey" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      dark
      class="blue darken-3"
      width="260"
      mobile-break-point="960"
    >
      <v-layout align-center justify-center column class="mt-4">
        <v-flex>
          <v-avatar size="120" color="grey lighten-4">
            <img src="/img/avatar.png" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex
          class="my-4 mx-3 text-xl-center text-lg-center text-md-center text-sm-center text-xs-center"
        >
          <h2 class="orange--text text--lighten-3 title">Sergey Kucherenko</h2>
        </v-flex>
      </v-layout>
      <v-layout justify-center row class="mb-4">
        <v-btn color="success" dark>
          <v-icon>add</v-icon>Add Goal
        </v-btn>
      </v-layout>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile
          ripple
          active-class="blue"
          v-for="item in menu"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-tile-action class="ml-4">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      menu: [
        { title: "Dashboard", icon: "dashboard", route: "/" },
        { title: "My goals", icon: "bookmarks", route: "/my-goals" },
        { title: "Goals", icon: "group_work", route: "/goals" },
        { title: "Logout", icon: "exit_to_app", route: "/login" }
      ]
    };
  }
};
</script>

<style>
</style>
