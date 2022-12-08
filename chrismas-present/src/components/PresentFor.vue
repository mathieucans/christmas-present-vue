<script lang="ts">
export default {
  data(){
    return {
      to : ""
    }
  },
  mounted() {
    console.log(atob(this.$route.params.to))
    this.to = atob(this.$route.params.to)
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Salut {{$route.params.from}} ! tu offriras un cadeau à {{to}}</h1>
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
