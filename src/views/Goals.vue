<template>
  <div id="goals">
    <h1 class="subheading grey--text text--darken-1">Goals</h1>

    <v-container>
      <v-card flat>
        <v-layout row wrap class="pa-3">
          <v-flex md3 sm3 xs12 class="mb-2">
            <div class="caption grey--text">Title</div>
            <div class="mt-2">Learn German</div>
          </v-flex>
          <v-flex md5 sm5 xs12 class="mb-2">
            <div class="caption grey--text">Progress</div>
            <div class="mr-4">
              <v-progress-linear query color="success" height="16" class="my-0 mt-2" value="75"></v-progress-linear>
            </div>
          </v-flex>
          <v-flex md2 sm2 xs6 class="mb-2">
            <div class="caption grey--text">Steps Left</div>
            <div class="mt-2">20</div>
          </v-flex>
          <v-flex md2 sm2 xs6 class="mb-2">
            <div class="right">
              <div class="caption grey--text">Due Date</div>
              <div class="mt-2">15th Nov 2019</div>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: [{ title: "", progress: "", stepsLeft: "", due: "" }]
    };
  }
};
</script>
