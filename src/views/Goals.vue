<template>
  <div id="goals">
    <h1 class="subheading grey--text text--darken-1">Goals</h1>

    <v-container>
      <v-expansion-panel popout>
        <v-expansion-panel-content
          v-for="goal in goals"
          :key="goal.title"
          :style="`border-radius: 5px 0 0 5px; border-left: 10px solid ${getColorByDifficulty(goal.difficulty)}`"
        >
          <template v-slot:header>
            <v-layout row wrap class="pa-3">
              <v-flex md3 sm3 xs12>
                <div class="caption grey--text">Title</div>
                <div class="mt-2">{{ goal.title }}</div>
              </v-flex>
              <v-flex md2 sm2 xs6>
                <div class="caption grey--text">Difficulty</div>
                <div class="mt-2">{{ goal.difficulty }}</div>
              </v-flex>
              <v-flex md2 sm2 xs6>
                <div class="caption grey--text">Steps</div>
                <div class="mt-2">{{ goal.steps }}</div>
              </v-flex>
              <v-flex md2 sm2 xs6>
                <div class="caption grey--text">Duration</div>
                <div class="mt-2">{{ goal.duration }}</div>
              </v-flex>
              <v-flex md2 sm2 xs6>
                <div class="caption grey--text">Times added</div>
                <div class="mt-2">{{ goal.timesAdded }}</div>
              </v-flex>
              <v-flex md1 sm1 xs12 align-self-center>
                <v-btn
                  v-if="checkAdded(goal)"
                  @click.stop="removeGoal(goal)"
                  :loading="loading === goal['.key']"
                  :disabled="!!loading"
                  fab
                  small
                  left
                  color="error"
                  class="white--text"
                >
                  <v-icon>remove</v-icon>
                  <template v-slot:loader>
                    <span @click.stop class="icon-loader">
                      <v-icon light>cached</v-icon>
                    </span>
                  </template>
                </v-btn>
                <v-btn
                  v-else
                  @click.stop="addGoal(goal)"
                  :loading="loading === goal['.key']"
                  :disabled="!!loading"
                  fab
                  small
                  left
                  color="success"
                  class="white--text"
                >
                  <v-icon>add</v-icon>
                  <template v-slot:loader>
                    <span @click.stop class="icon-loader">
                      <v-icon light>cached</v-icon>
                    </span>
                  </template>
                </v-btn>
              </v-flex>
            </v-layout>
          </template>
          <v-card>
            <v-card-text>
              <ol>
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                <li>Step 4</li>
              </ol>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import { db } from "../utils/firebase.js";
import { filter, isEmpty } from "lodash";

export default {
  firestore() {
    return {
      goals: db.collection("goals"),
      me: {
        ref: db.collection("users").where("username", "==", this.username),
        resolve: data => {
          this.me = data[0];
        },
        reject: () => {
          this.$snack.danger("Loading profile error");
        }
      }
    };
  },
  data() {
    return {
      loading: false,
      myGoals: [],
      me: {},
      username: "root",
      goals: [],
      borderColorMap: {
        Beginner: "#00BCD4",
        Intemediate: "#00E676",
        Advanced: "#FF9800"
      }
    };
  },
  mounted() {
    // this.loadMyGoals();
  },
  methods: {
    updateGoal(goal) {
      this.loading = goal[".key"];
      this.$firestore.goals
        .doc(goal[".key"])
        .update({
          title: "Yoga for Beginners",
          steps: 10,
          duration: "10 days",
          difficulty: "Beginner",
          achivedTimes: 10
        })
        .then(() => (this.loading = false));
    },
    async addGoal(goal) {
      this.loading = goal[".key"];
      goal = {
        ...goal,
        stepsLeft: goal.steps,
        progress: 0,
        due: "25:02:2019T00:00:0000Z"
      };

      try {
        const goals = isEmpty(this.me.goals)
          ? [goal]
          : [goal, ...this.me.goals];
        await db
          .collection("users")
          .doc(this.me[".key"])
          .update({ goals });
        this.me.goals = goals;

        const users = isEmpty(goal.users)
          ? [this.me[".key"]]
          : [this.me[".key"], ...goal.users];
        const timesAdded = goal.timesAdded ? goal.timesAdded + 1 : 1;
        await db
          .collection("goals")
          .doc(goal[".key"])
          .update({ users, timesAdded });

        this.loading = false;
        this.$snack.success({
          text: "You've save this goal to your account",
          button: "close"
        });
      } catch (e) {
        this.loading = false;
        this.$snack.danger({
          text: "Server error",
          button: "close"
        });
      }
    },
    async removeGoal(goal) {
      this.loading = goal[".key"];

      try {
        const goals = filter(
          this.me.goals,
          myGoal => myGoal[".key"] !== goal[".key"]
        );
        await db
          .collection("users")
          .doc(this.me[".key"])
          .update({ goals });
        this.me.goals = goals;

        const users = filter(
          goal.users,
          userKey => userKey !== this.me[".key"]
        );
        const timesAdded = goal.timesAdded - 1;
        await db
          .collection("goals")
          .doc(goal[".key"])
          .update({ users, timesAdded });

        this.loading = false;
        this.$snack.success({
          text: "You've save this goal to your account",
          button: "close"
        });
      } catch (e) {
        this.loading = false;
        this.$snack.danger({
          text: "Server error",
          button: "close"
        });
      }
    },
    checkAdded(goal) {
      return isEmpty(goal.users) ? false : goal.users.includes(this.me[".key"]);
    },
    getColorByDifficulty(difficulty) {
      return this.borderColorMap[difficulty];
    }
  }
};
</script>

<style scoped>
</style>