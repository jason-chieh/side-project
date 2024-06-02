<template>
    <HeaderBar />
    <div class="background">
        <div class="cardPlace">
            <div class="card">
                <img src="../assets/logoImage/館內照片.jpg" alt="" />
                <div class="cardBody">
                    <h5>揮汗如羽-xx館</h5>
                    <p>高雄市苓雅路四維四路22-2號</p>
                    <a @click="goReserve" class="btn btn-primary"
                        >前往預約租借</a
                    >
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <h5>© 2022-2024 揮汗如羽. All rights reserved.</h5>
    </div>
</template>

<script lang="ts">
import HeaderBar from "@/components/HeaderBar.vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    components: {
        HeaderBar,
    },
    setup() {
        const router = useRouter();

        function goReserve() {
            router.push({ path: "/Reserve" });
        }
        return {
            goReserve,
        };
    },
});
</script>

<style lang="scss" scoped>
.background {
    min-height: 60vh;
    padding-top: 5vh;
}
.chineseName {
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 700;
    width: 100%;
    height: 15vh;
    text-align: center;
}
.cardPlace {
    width: 100vw;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2% 0;
    .card {
        border-radius: 15px;
        transition: 1.2s;
        &:hover {
            transform: translate(0, -10px);
        }
        img {
            border-radius: 15px;
        }
        .cardBody {
            padding: 2% 2%;
            .btn {
                background-color: #9dc08b;
                border: 0;
                font-family: "Noto Sans TC", sans-serif;
                letter-spacing: 0.5rem;
                &:hover {
                    background-color: #749166;
                }
            }
        }
    }
}
.footer {
    width: 100vw;
    min-height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #edf1d6;
}
</style>
