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
    linkfor(present: Present) {
      return '/present/' + present.from + '/' + present.to
    },
    copy(present: Present) {
      navigator.clipboard.writeText(window.location.origin + this.linkfor(present))
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
      <input class="new-name"
             ref="newName"
             v-model="newParticipant"
             placeholder="edit me"
             v-on:keyup.enter="addParticipant"
      />
      <button class="add-action"
              :disabled="newParticipant === undefined"
              @click="addParticipant">Ajouter
      </button>
    </div>
    <button class="main-action" @click="generate">TIRER AU SORT</button>

    <div class="present-links">
      <div v-for="present in presents" class="link-row">
        <router-link :to="linkfor(present)">Le cadeau qu'offrira {{ present.from }}
        </router-link>
        <button class="copy-action"
                @click="copy(present)"
                title="copier dans le presse papier">
          <img src="../assets/ic_File_copy.svg">
        </button>
      </div>
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

.copy-action {
  background-color: #00bd7e;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.present-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
}
.link-row {
  display: flex;
  justify-content: space-between;
}
.add-action {
  background-color: #00bd7e;
  border: none;
  color: white;
}

.copy-action > img {
  filter: invert(100%);
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
