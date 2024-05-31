<script setup lang="ts"></script>

<template>
    <div class="header">
        <img
            src="../assets/logoImage/2017年夏季世界大學運動會羽球比賽_LOGO.png"
            alt=""
        />
        <h1>Badminton</h1>
        <h1 class="chineseName">揮汗如羽</h1>
    </div>
</template>

<style lang="scss" scoped>
.header {
    width: 100vw;
    height: 20vh;
    background: linear-gradient(to bottom, #1a4d2e, #4c6e4f);
    padding: 0 15vw;
    display: flex;
    justify-content: baseline;
    align-items: center;
    img {
        height: 90%;
    }
    h1 {
        font-weight: 300;
    }
    .chineseName {
        font-family: "Noto Sans TC", sans-serif;
        font-weight: 700;
    }
}
</style>
