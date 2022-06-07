<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="5">
        <div><span class="flag-icon flag-icon-rs"></span>Nowy komunikat</div>

        <v-form>
          <v-text-field
            v-model="title"
            label="Tytuł"
            variant="filled"
          ></v-text-field>
          <v-select
            v-model="color"
            :items="selectColors"
            label="Kolor komunikatu"
            outlined
            return-object
          ></v-select>
          <v-textarea v-model="message" outlined label="Treść"></v-textarea>
          <v-btn @click.stop="sendForm()" color="error">Opublikuj</v-btn>
        </v-form>
      </v-col>

      <v-col cols="12" lg="7">
        <div>Aktywne komunikaty</div>
        <div class="newses-container">
          <News
            v-for="news in newsesToShow"
            :title="news.title"
            :color="news.color"
            :message="news.message"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue"
import { adminStore } from "@/stores/adminData"
import News from "@/components/AdminPanel/News.vue"

const adminData = adminStore()
const selectColors = adminData.newsColors
const newsesToShow = adminData.newses
let title = ref("")
let color = ref("")
let message = ref("")

function sendForm() {
  adminData.addNews(title.value, color.value, message.value)
  title.value = ''
  color.value = ''
  message.value = ''
}
</script>

<style lang="scss">
.newses-container {
  width: 100%;
  padding: 5px;
}
</style>
