<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
        const router = useRouter();

        function goMain() {
            router.push({ path: "/MainView" });
        }

        return {
            goMain,
        };
    },
});
</script>

<template>
    <div class="header">
        <img
            @click="goMain"
            src="../assets/logoImage/2017年夏季世界大學運動會羽球比賽_LOGO.png"
            alt=""
        />
        <h1>Badminton</h1>
    </div>
</template>

<style lang="scss" scoped>
.header {
    width: 100vw;
    height: 20vh;
    background: #edf1d6;
    padding: 0 15vw;
    display: flex;
    justify-content: baseline;
    align-items: center;
    img {
        height: 90%;
        cursor: pointer;
    }
    h1 {
        font-weight: 300;
    }
}
</style>
