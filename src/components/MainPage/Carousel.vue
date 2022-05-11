<template>
  <v-carousel cycle height="600" show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet color="white" height="100%">
        <div class="d-flex fill-height justify-center">
          <div class="text-h2">{{ slide }}</div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const slides = ["Draft", "Mecze", "Liga i puchar", "MVP", "Transfery"]
</script>

<style lang="scss"></style>
