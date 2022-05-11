<template>
    <HeaderComponent />
    <div class="login-container">
        <LoginForm />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/MainPage/HeaderComponent.vue'
import LoginForm from '@/components/LoginForm.vue'

</script>

<style lang="scss">
.login-container {
    padding-top: 30px;
    width: 20%;
    margin: auto;
}
</style>
