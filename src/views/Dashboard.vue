<template>
  <div id="dashboard">
    <h1 class="subheading grey--text text--darken-1">Dashboard</h1>

    <v-container>
      <v-card class="mt-3 mx-2">
        <v-sheet class="v-sheet--offset mx-auto" color="cyan">
          <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
        </v-sheet>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      value: [200, 675, 410, 390, 310, 460, 250, 240]
    };
  }
};
</script>
