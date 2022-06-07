<template>
  <v-combobox
    v-if="props.editMode"
    v-model="selectedPlayer"
    @update:modelValue="onSelectionChange($event)"
    :items="playersToList"
    return-object
    label="Zawodnik do edycji"
  >
  </v-combobox>
  <v-divider></v-divider>
  <v-form>
    <v-btn class="mb-8" @click.stop="adminData.closeTheForm()"
      ><v-icon>mdi-chevron-left</v-icon>Wróć</v-btn
    >
    <v-text-field
      v-model="name"
      label="Imię i nazwisko"
      variant="filled"
      :disabled="!selectedPlayer"
    ></v-text-field>
    <v-text-field
      v-model="age"
      label="Wiek"
      variant="filled"
      :disabled="!selectedPlayer"
    ></v-text-field>
    <v-select
      v-model="position"
      :items="courtPositions"
      label="Pozycja"
      outlined
      :disabled="!selectedPlayer"
    ></v-select>
    <v-combobox
      v-model="nationality"
      :items="nationalities"
      label="Narodowość"
      outlined
      :disabled="!selectedPlayer"
    >
    </v-combobox>
    <v-select
      v-model="club"
      :items="realClubs"
      label="Realny klub"
      outlined
      :disabled="!selectedPlayer"
    ></v-select>
    <v-select
      v-model="fantasyClub"
      :items="teams"
      label="Druyna fantasy"
      outlined
      :disabled="!selectedPlayer"
    ></v-select>
    <v-text-field
      v-model="photoURL"
      label="URL Zdjęcia"
      variant="filled"
      :disabled="!selectedPlayer"
    ></v-text-field>
    <v-btn color="primary" @click.stop="sendData()" :disabled="!selectedPlayer"
      >Zapisz</v-btn
    >
  </v-form>
</template>

<script setup>
import { ref } from "vue"
import CountryFlag from "vue-country-flag-next"
import { adminStore } from "@/stores/adminData"
import { playersAndTeamsStore } from "@/stores/playersAndTeams"
import { constantsStore } from "@/stores/constants"

const adminData = adminStore()
const playersAndTeamsData = playersAndTeamsStore()
const constants = constantsStore()
const props = defineProps(["editMode"])

const playersToList = playersAndTeamsData.listOfPlayers //Pytanie czy nowe zmienne nie sa tutaj zbedne
const teams = playersAndTeamsData.listOfTeams
const courtPositions = constants.courtPositions
const nationalities = constants.nationalities
const realClubs = constants.realClubsNames

let name = ref("")
let age = ref("")
let position = ref("")
let nationality = ref("")
let club = ref("")
let fantasyClub = ref("")
let photoURL = ref("")
let selectedPlayer = ref("")
if (!props.editMode) {
  selectedPlayer = "Selected"
}

function sendData() {
  const player = {
    name: name.value,
    age: age.value,
    position: position.value,
    nationality: nationality.value,
    club: club.value,
    fantasyClub: fantasyClub.value,
    photoURL: photoURL.value
  }

  console.log(player)
}

function onSelectionChange(event) {
  const player = playersAndTeamsData.findPlayer(event)
  if (player) {
    ;(name.value = player.name),
      (age.value = player.age),
      (position.value = player.position),
      (nationality.value = player.nationality),
      (club.value = player.club),
      (fantasyClub.value = player.fantasyClub),
      (photoURL.value = player.photoURL)
  }
}
</script>

<style lang="scss"></style>
