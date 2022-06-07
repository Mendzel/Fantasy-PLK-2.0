<template>
  <v-card contained-text :class="color" class="card"> 
      <v-card-title>{{title}}</v-card-title>
      <v-card-text>{{message}}</v-card-text>
      <v-card-actions>
          <v-btn>Edytuj</v-btn>
          <v-btn>Usuń</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps(['title', 'color', 'message'])
</script>

<style lang="scss">
.card {
    width: 100%;
    margin: 10px 0;
}
.red {
    background-color: #eb4034;
}
.orange {
    background-color: #f09029;
}
.yellow {
    background-color: #e6c822;
}
.green {
    background-color: #46e359;
}
</style>
