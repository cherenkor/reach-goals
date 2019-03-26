<template>
  <div id="goals">
    <h1 class="subheading grey--text text--darken-1">Goals</h1>

    <v-container>
      <v-card
        v-for="goal in goals"
        :key="goal.title"
        :style="`border-radius: 5px 0 0 5px; border-left: 10px solid ${getColorByDifficulty(goal.difficulty)}`"
        flat
      >
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
            <div class="mt-2">{{ goal.added }} times</div>
          </v-flex>
          <v-flex md1 sm1 xs12 align-self-center>
            <v-btn fab small left color="success">
              <v-icon>add</v-icon>
            </v-btn>
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
      goals: [
        {
          id: 1,
          title: "Learn Meditation",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Beginner",
          added: 5,
          categories: ["Mental"]
        },
        {
          id: 2,
          title: "Learn Yoga",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Beginner",
          added: 5,
          categories: ["Body", "Mental"]
        },
        {
          id: 3,
          title: "Learn English",
          steps: 30,
          stepMinDuration: 10,
          difficulty: "Intemediate",
          added: 5,
          categories: ["Languages"]
        },
        {
          id: 4,
          title: "Learn to write",
          steps: 21,
          stepMinDuration: 15,
          difficulty: "Beginner",
          added: 5,
          categories: ["Writing"]
        },
        {
          id: 5,
          title: "Learn HTML",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Beginner",
          added: 5,
          categories: ["Development"]
        },
        {
          id: 6,
          title: "Learn Illustrator",
          steps: 14,
          stepMinDuration: 10,
          difficulty: "Advanced",
          added: 5,
          categories: ["Design"]
        }
      ],
      borderColorMap: {
        Beginner: "#00BCD4",
        Intemediate: "#00E676",
        Advanced: "#FF9800"
      }
    };
  },
  methods: {
    getColorByDifficulty(difficulty) {
      return this.borderColorMap[difficulty];
    }
  }
};
</script>

<style scoped>
</style>