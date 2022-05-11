<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="deep-purple-accent-4"
      centered
      stacked
    >
      <router-link
        v-for="(tabData, i) in props.tabs"
        :key="i"
        :to="tabData.path"
        class="link"
      >
        <v-tab :value="tabData.tab">
          {{ tabData.tab }}
        </v-tab>
      </router-link>
    </v-tabs>

    <v-window v-model="tab">
        <router-view></router-view>
    </v-window>
  </v-card>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  tabs: Array
})
const tab = ref("")
</script>

<styles lang="scss">
.link {
    text-decoration: none;
    color: white;
}
</styles>
