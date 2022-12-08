<script setup lang="ts">
</script>
<script lang="ts">

import type {Present} from "@/Present";

export default {
  data() {
    return {
      presents: new Array<Present>()
    }
  },
  methods: {
    generate() {
      this.presents = [
        {from: 'julie', to: btoa('mathieu')},
        {from: 'mathieu', to: btoa('céline')},
      ]
    },
    linkFor() {
      return 'present/mat/ju'
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      GENERATEUR DE CADEAUX
    </h1>
    <button @click="generate">Générer</button>
    <div v-for="present in presents">
      <router-link :to="'/present/' + present.from + '/' + present.to">Le cadeau qu'offrira {{ present.from }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
