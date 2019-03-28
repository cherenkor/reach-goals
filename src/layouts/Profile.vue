<template>
  <div class="profile">
    <NavBar/>
    <v-content>
      <v-scroll-x-transition mode="out-in" origin="center center">
        <router-view class="ma-4"></router-view>
      </v-scroll-x-transition>
    </v-content>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style scoped>
</style>