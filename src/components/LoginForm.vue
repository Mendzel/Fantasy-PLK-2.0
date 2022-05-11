<template>
  <v-form class="form" ref="form">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      label="Hasło"
      required
    ></v-text-field>

    <v-btn color="error" class="form-button" @click="submit"> Zaloguj </v-btn>
  </v-form>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")

const emailRules = [
  (v) => !!v || "Pole obowiązkowe",
  (v) => /.+@.+\..+/.test(v) || "Wpisz poprawny E-mail"
]

function submit() {
  console.log(email.value, password.value)
}
</script>

<style lang="scss">
.form {
  text-align: center;
}
</style>
