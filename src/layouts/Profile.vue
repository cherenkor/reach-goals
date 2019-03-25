<template>
  <div class="profile">
    <NavBar/>
    <v-content>
      <router-view class="ma-4"></router-view>
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