<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://i.imgur.com/5Woinpu.png"
        title="Orki z Majorki"
        subtitle="Piotr Łukaszewski"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>

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

    <template v-slot:append>
      <v-list nav>
        <router-link class="link" :to="{name: 'admin'}">
          <v-list-item
            prepend-icon="mdi-shield-account"
            title="Panel Administratora"
            value="admin"
            active-class="no-active"
          ></v-list-item>
        </router-link>
        <v-list-item
          prependIcon="mdi-cog"
          title="Ustawienia konta"
          value="settings"
          active-class="no-active"
        ></v-list-item>
        <v-list-item
          prependIcon="mdi-logout"
          title="Wyloguj"
          value="logout"
          class="no-active"
        ></v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { useNavigationStore } from "@/stores/navigation"

const navigationStore = useNavigationStore()
</script>

<styles lang="scss">
.link {
  text-decoration: none;
  color: white;
}
</styles>
