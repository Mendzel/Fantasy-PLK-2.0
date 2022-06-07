<template>
  <v-navigation-drawer v-model="navigationStore.mobileNavDrawer" temporary>
    <v-list class="list" nav>
      <router-link
        v-for="(link, i) in navigationStore.navDrawerLinksList"
        :key="i"
        class="link"
        :to="link.path"
      >
        <v-list-item
          :prepend-icon="link.prependIcon"
          :title="link.title"
          :value="link.value"
        ></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useNavigationStore } from "@/stores/navigation"

const navigationStore = useNavigationStore()
</script>

<style lang="scss"></style>
