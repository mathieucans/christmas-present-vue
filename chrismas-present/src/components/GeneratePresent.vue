<script setup lang="ts">
</script>
<script lang="ts">

import type {Present} from "@/Present";
import {presentGenerator} from "@/Present";

export default {
  data() {
    return {
      presents: new Array<Present>()
    }
  },
  methods: {
    generate() {
      this.presents = presentGenerator([
          "Michel",
          "Murielle",
          "Thomas",
          "Claudine",
          "Denis",
          "Julie",
          "Céline",
          "Mathieu",
      ])
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
      GÉNÉRATEUR DE CADEAUX
    </h1>
    <button class="main-action" @click="generate">TIRER AU SORT</button>
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

.greetings {
  display: flex;
  flex-direction: column;
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

.main-action {
  background-color: #00bd7e;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>
