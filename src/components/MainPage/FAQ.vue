<template>
  <div class="faq">
    <h1 class="faq-title">FAQ</h1>
    <v-expansion-panels class="faq-list">
      <v-expansion-panel
        v-for="i in 8"
        :key="i"
        title="Item"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.faq {
    background-color: white;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-title {
        color: $primary;
    }

    &-list {
        padding: 20px !important;
        width: 70% !important;
    }
}
</style>