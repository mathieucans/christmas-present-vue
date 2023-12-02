<script setup lang="ts">
</script>
<script lang="ts">

import type {Present} from "@/Present";
import {presentGenerator} from "@/Present";

export default {
  data() {
    return {
      newParticipant: undefined,
      presents: new Array<Present>(),
      participants: new Array<string>()
    }
  },
  methods: {
    generate() {
      this.presents = presentGenerator(
          this.participants,
          (f, t) => f === 'Murielle' && t === 'Elsa')
    },
    linkFor() {
      return 'present/mat/ju'
    },
    remove(participant: string) {
      this.participants = this.participants.filter(p => p !== participant)
    },
    addParticipant() {
      if (this.newParticipant) {
        this.participants.push(this.newParticipant)
        this.newParticipant = undefined
      }
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      GÉNÉRATEUR DE CADEAUX
    </h1>
    <h2>Participants:</h2>
    <div class="participants">
      <div v-for="participant in participants" class="participant-row">
        <div class="participant-name">{{ participant }}</div>
        <div class="participant-remove" @click="remove(participant)">❌</div>
      </div>
    </div>
    <div class="participant-add">
      <input class="new-name" v-model="newParticipant" placeholder="edit me"/>
      <button class="add-action"
              :disabled="newParticipant === undefined"
              @click="addParticipant">Ajouter
      </button>
    </div>
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

.add-action {
  background-color: #00bd7e;
  border: none;
  color: white;
}

.participants {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.participant-row {
  display: flex;
  justify-content: space-between;
}

.participant-add {
  display: flex;
  justify-content: space-between;
  margin: 2px;
}

.participant-remove {
  cursor: pointer;
}

.new-name {
  flex-grow: 1;
  margin: 4px;
}

</style>
