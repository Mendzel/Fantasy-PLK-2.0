<template>
    <v-layout>
      <MobileNav v-if="showMobileNav()" />
      <MobileNavDrawer v-if="showMobileNav()" />
      <NavDrawer class="d-none d-lg-flex"/>

      <v-main class="main">
        <router-view />
      </v-main>
    </v-layout>
</template>

<script setup>
import NavDrawer from '@/components/NavDrawer.vue';
import MobileNav from '../components/MobileNav.vue';

import {ref} from 'vue'
import MobileNavDrawer from '../components/MobileNavDrawer.vue';

let windowWidth = ref(window.innerWidth);
function showMobileNav() {
  if (windowWidth.value < 1400) {
    return true
  } else {
    return false
  }
}
</script>

<style lang="scss">
.main {
  min-height: 940px;
  height: 100%;
}
</style>
