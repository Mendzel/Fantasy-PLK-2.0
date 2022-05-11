<template>
    <div class="teamsSection">
        <h1 class="teamsSection-title">Drużyny w lidze</h1>
        <div class="teamsSection-container">
            <div v-for="(team, i) in teams" :key="i" class="teamsSection-container-logo">
                <img :src="team.logo" alt="team.name" class="teamsSection-container-image">
                <p class="teamsSection-container-caption">{{team.name}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const teams = [
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
    {
        name: 'Dzikie Dziki',
        logo: 'https://i.postimg.cc/4Nn46Fb6/Dzikie-Dziki.png'
    },
]
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.teamsSection {
    height: 300px;
    background-color: $primary;

    &-title {
        padding-top: 30px;
        text-align: center;
    }

    &-container {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;

        &-image {
            width: 150px;
        }

        &-caption {
            color: black;
            font-weight: bold;
            text-align: center;
            display: none;
        }

        &-logo:hover {
            .teamsSection-container-caption {
                display: block;
            }
        }
    }
}
</style>