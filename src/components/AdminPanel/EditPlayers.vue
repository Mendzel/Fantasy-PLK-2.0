<template>
  <v-container>
    <v-row v-if="!adminData.showNewPlayerForm && !adminData.showEditPlayerForm">
      <v-col class="column" cols="12" md="6"
        ><v-btn class="column-button" @click.stop="showForm('new')"
          ><v-icon class="column-button-icon">mdi-account-plus</v-icon> Dodaj
          zawodnika</v-btn
        ></v-col
      >
      <v-col class="column" cols="12" md="6"
        ><v-btn class="column-button" @click.stop="showForm('edit')"
          ><v-icon class="column-button-icon">mdi-account-edit</v-icon> Edytuj
          zawodnika</v-btn
        ></v-col
      >
    </v-row>
    <PlayerForm v-if="adminData.showNewPlayerForm" :editMode="false" />
    <PlayerForm v-if="adminData.showEditPlayerForm" :editMode="true" />
  </v-container>
</template>

<script setup>
import { adminStore } from "@/stores/adminData"
import PlayerForm from "./PlayerForm.vue"

const adminData = adminStore()

function showForm(state) {
  adminData.showTheForm(state)
}
</script>

<style lang="scss">
.column {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 47vw;

  &-button {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px !important;
    border: 4px solid white;

    &-icon {
      font-size: 100px;
    }
  }
}

@media screen and (max-width: 770px) {
  .column {
    height: 350px;

    &-button {
      width: 300px;
      height: 300px !important;
    }
  }
}
</style>
