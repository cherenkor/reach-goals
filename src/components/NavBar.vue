<template>
  <div id="navbar">
    <v-toolbar app class="white elevation-0">
      <v-spacer></v-spacer>
      <v-toolbar-side-icon flat color="grey" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app absolute dark mobile-break-point="960"></v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  }
};
</script>

<style>
</style>
