<template>
  <div id="goals">
    <h1 class="subheading grey--text text--darken-1">Goals</h1>

    <v-container>
      <v-card
        v-for="goal in me.goals"
        :key="goal['.key']"
        :class="getColorByType(goal.due, 'border')"
        flat
      >
        <v-layout row wrap class="pa-3">
          <v-flex md3 sm3 xs12 class="mb-2">
            <div class="caption grey--text">Title</div>
            <div class="mt-2">{{ goal.title }}</div>
          </v-flex>
          <v-flex md6 sm5 xs12 class="mb-2">
            <div class="caption grey--text">Progress</div>
            <div class="mr-4">
              <v-progress-linear
                query
                :color="getColorByType(goal.due, 'progress')"
                height="16"
                class="my-0 mt-2"
                :value="goal.progress"
              ></v-progress-linear>
            </div>
          </v-flex>
          <v-flex md1 sm2 xs6 class="mb-2">
            <div class="right hidden-sm-and-down">
              <div class="caption grey--text">Steps Left</div>
              <div class="mt-2">{{ goal.stepsLeft }}</div>
            </div>
            <div class="hidden-md-and-up">
              <div class="caption grey--text">Steps Left</div>
              <div class="mt-2">{{ goal.stepsLeft }}</div>
            </div>
          </v-flex>
          <v-flex md2 sm2 xs6 class="mb-2">
            <div class="right">
              <div class="caption grey--text">Due Date</div>
              <div class="mt-2">{{ formatDate(goal.due) }}</div>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import moment from "moment";
import { db } from "../utils/firebase.js";
// import { filter, isEmpty } from "lodash";

export default {
  firestore() {
    return {
      me: {
        ref: db.collection("users").doc(this.userId),
        reject: () => {
          this.$snack.danger("Loading profile error");
        }
      }
    };
  },
  data() {
    return {
      userId: "5sbyXXpjE3XIuN5c0jW0",
      me: {
        goals: []
      },
      borderColorMap: {
        0: "border-red border-darken-3",
        1: "border-red",
        2: "border-deep-orange",
        3: "border-orange",
        4: "border-amber",
        5: "border-lime",
        6: "border-light-green",
        7: "border-green border-lighten-1",
        8: "border-green",
        9: "border-green border-darken-1",
        10: "border-green border-darken-2"
      },
      progressColorMap: {
        0: "red darken-3",
        1: "red",
        2: "deep-orange",
        3: "orange",
        4: "amber",
        5: "lime",
        6: "light-green",
        7: "green lighten-1",
        8: "green",
        9: "green darken-1",
        10: "green darken-2"
      }
    };
  },
  methods: {
    formatDate(date) {
      return moment(date, "DD-MM-YYYY").format("MMM Do YYYY");
    },
    daysLeft(date) {
      const endDate = moment(date, "DD-MM-YYYY");
      const today = moment();
      let daysLeft = endDate.diff(today, "days");

      if (daysLeft < 0) daysLeft = 0;
      if (daysLeft > 10) daysLeft = 10;

      return daysLeft;
    },
    getColorByType(date, type) {
      const daysLeft = this.daysLeft(date);
      let color;

      if (type === "border") color = this.borderColorMap[daysLeft];
      else if (type === "progress") color = this.progressColorMap[daysLeft];

      return color;
    }
  }
};
</script>

<style scoped>
.border-red .border-darken-3 {
  border-left: 4px solid #c62828;
}

.border-red {
  border-left: 4px solid #f44336;
}

.border-deep-orange {
  border-left: 4px solid #ff5722;
}

.border-orange {
  border-left: 4px solid #ff9800;
}

.border-amber {
  border-left: 4px solid #ffc107;
}

.border-lime {
  border-left: 4px solid #cddc39;
}

.border-light-green {
  border-left: 4px solid #8bc34a;
}

.border-green .border-lighten-1 {
  border-left: 4px solid #4caf50;
}

.border-green {
  border-left: 4px solid #66bb6a;
}

.border-green .border-darken-1 {
  border-left: 4px solid #43a047;
}

.border-green .border-darken-2 {
  border-left: 4px solid #388e3c;
}
</style>