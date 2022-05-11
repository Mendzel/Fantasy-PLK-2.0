<template>
  <div class="header-container">
    <img
      class="header-logo"
      src="https://i.postimg.cc/fbhLYCrK/Fantasy-Logo.png"
      @click="this.$router.push('/')"
    />
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.header {
  &-container {
    display: flex;
    height: 170px;
    width: 100%;
    background: $primary;
    position: sticky;
    top: 0;
  }
  &-logo {
    width: 150px;
    margin: auto;
    cursor: pointer;
  }
}
</style>
