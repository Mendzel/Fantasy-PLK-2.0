<template>
    <div class="footer">
        <h1 class="footer-title">Created by</h1>
        <div class="footer-container">
            <div class="footer-container-creator">
                <h3>Konrad Mendzelewski</h3>
                <p>Linkedin Icon</p>
                <p>GitHub Icon</p>
            </div>

            <div class="footer-container-creator">
                <h3>Łukasz Kiełkowski</h3>
                <p>Linkedin Icon</p>
                <p>GitHub Icon</p>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.footer {
    background-color: $primary;
    text-align: center;
    height: 230px;
    padding-top: 30px;

    &-container {
        display: flex;
        justify-content: space-around;

        &-creator {
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
}
</style>