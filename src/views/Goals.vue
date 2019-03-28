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
                <div class="caption grey--text">Step Duration</div>
                <div class="mt-2">{{ goal.stepMinDuration }}m</div>
              </v-flex>
              <v-flex md2 sm2 xs6>
                <div class="caption grey--text">Achived by users</div>
                <div class="mt-2">{{ goal.achivedTimes }} times</div>
              </v-flex>
              <v-flex md1 sm1 xs12 align-self-center>
                <v-btn
                  v-if="goal.added"
                  @click.stop="removeGoal(goal)"
                  :loading="loading === goal.id"
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
                  :loading="loading === goal.id"
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
export default {
  data() {
    return {
      loading: false,
      myGoals: [],
      goals: [],
      borderColorMap: {
        Beginner: "#00BCD4",
        Intemediate: "#00E676",
        Advanced: "#FF9800"
      }
    };
  },
  mounted() {
    this.loadMyGoals();
  },
  methods: {
    loadMyGoals() {
      this.myGoals = [
        {
          id: 1,
          title: "10 days Meditation",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Beginner",
          achivedTimes: 5,
          categories: ["Mental"]
        },
        {
          id: 2,
          title: "10 days Yoga",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Beginner",
          achivedTimes: 5,
          categories: ["Body", "Mental"]
        }
      ];

      this.loadGoals();
    },
    loadGoals() {
      const goals = [
        {
          id: 1,
          title: "10 days Meditation",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Beginner",
          achivedTimes: 5,
          categories: ["Mental"]
        },
        {
          id: 2,
          title: "10 days Yoga",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Beginner",
          achivedTimes: 5,
          categories: ["Body", "Mental"]
        },
        {
          id: 3,
          title: "Learn English",
          steps: 30,
          stepMinDuration: 10,
          difficulty: "Intemediate",
          achivedTimes: 5,
          categories: ["Languages"]
        },
        {
          id: 4,
          title: "Learn to write",
          steps: 21,
          stepMinDuration: 15,
          difficulty: "Beginner",
          achivedTimes: 5,
          categories: ["Writing"]
        },
        {
          id: 5,
          title: "Learn HTML",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Beginner",
          achivedTimes: 5,
          categories: ["Development"]
        },
        {
          id: 6,
          title: "Learn Illustrator",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Advanced",
          achivedTimes: 5,
          categories: ["Design"]
        }
      ];
      const myGoalsMap = this.myGoals.reduce((acc, goal) => {
        acc = {
          ...acc,
          [goal.id]: {
            ...goal,
            added: true
          }
        };
        return acc;
      }, {});
      this.goals = goals.map(goal => {
        return myGoalsMap[goal.id] || { ...goal, added: false };
      });

      this.loading = false;
    },
    addGoal(goal) {
      this.loading = goal.id;

      setTimeout(() => {
        this.myGoals = [...this.myGoals, goal];
        this.loadGoals();

        this.$snack.success({
          text: "You've save this goal to your account",
          button: "close"
        });
      }, 2000);
    },
    removeGoal({ id }) {
      this.loading = id;

      setTimeout(() => {
        this.myGoals = this.myGoals.filter(goal => goal.id !== id);
        this.loadGoals();

        this.$snack.danger({
          text: "You've save this goal to your account",
          button: "close"
        });
      }, 2000);
    },
    getColorByDifficulty(difficulty) {
      return this.borderColorMap[difficulty];
    }
  }
};
</script>

<style scoped>
</style>