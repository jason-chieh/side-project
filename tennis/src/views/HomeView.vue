<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'

</script>

<template>
    <div class="header">
        <img  src="../assets/logoImage/2017年夏季世界大學運動會羽球比賽_LOGO.png" alt="">
        <h1>Badminton</h1>
        <h1 class="chineseName">揮汗如羽</h1>
    </div>
    <HeaderBar />
    </template>
    
    <style lang="scss" scoped>
    .header{
        width: 100vw;
        height: 20vh;
        background-color:#0779E4;
        padding: 0 15vw;
        display: flex;
        justify-content:baseline;
        align-items: center;
        img{
            height: 90%;
        }
        h1{
            font-weight: 300;
        }
        .chineseName{
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 700;
        }
    }
    </style>
    