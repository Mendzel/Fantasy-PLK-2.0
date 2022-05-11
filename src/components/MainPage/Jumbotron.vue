<template>
  <div class="jumbotron">
    <div class="jumbotron-content">
      <h1 class="jumbotron-title">Fantasy PLK</h1>
      <p class="jumbotron-description">
        Najlepsza liga Fantasy w Polsce! Zostań trenerem już dziś
      </p>
      <v-btn class="jumbotron-button" @click="this.$router.push('/login')">Login</v-btn>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.jumbotron {
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("https://i.postimg.cc/KjJFwSxG/obraz-2022-05-10-155223766-Convert-Image.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
      background-image: url("https://i.postimg.cc/wxxyB9Zj/obraz-2022-05-10-155223766.png");
  }

  &-content {
      width: fit-content;
      padding: 20px;
      border-radius: 10px;
      background: rgba($color: #000000, $alpha: 0.9);
  }

  &-button {
    margin: 50px auto 0 auto;
    width: 200px;
    background-color: red !important;
  }
}
</style>
