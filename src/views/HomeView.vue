<template>
  <v-card>
    <v-layout>
      <NavDrawer />

      <v-main class="main">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import NavDrawer from '@/components/NavDrawer.vue';
</script>

<style>
.main {
  min-height: 940px;
  height: 100%;
}

</style>
