<template>
    <Tabs  class="window" :tabs="navigationStore.tabs.competitions" />
</template>
<script setup>
import Tabs from '@/components/Tabs.vue'
import { useNavigationStore } from '@/stores/navigation.js'

const navigationStore = useNavigationStore();
</script>
<style lang="scss">
    .window {
        height: 100%;
    }
</style>