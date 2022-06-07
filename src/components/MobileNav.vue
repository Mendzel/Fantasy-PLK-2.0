<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="navigationStore.toggleDrawer()"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title
      ><v-list-item
        prepend-avatar="https://i.imgur.com/5Woinpu.png"
        title="Orki z Majorki"
        subtitle="Piotr Łukaszewski"
      ></v-list-item
    ></v-app-bar-title>

    <template v-slot:append>
      <router-link class="link" :to="{ name: 'admin' }">
        <v-btn icon="mdi-shield-account"></v-btn>
      </router-link>
      <v-btn icon="mdi-cog"></v-btn>
      <v-btn icon="mdi-logout"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useNavigationStore } from "@/stores/navigation"

const navigationStore = useNavigationStore()
</script>

<style lang="scss">

</style>
