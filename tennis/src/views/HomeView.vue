<script lang="ts">
import HeaderBar from "@/components/HeaderBar.vue";
import { RouterLink } from "vue-router";

export default {
    components: {
        RouterLink,
    },
    setup() {
        return {};
    },
};
</script>

<template>
    <div class="backGround">
        <header>
            <p>EXERCISE</p>
            <p>ENERGY</p>
            <p>JOY</p>
            <p>STRONG</p>
        </header>
        <div class="slogon">
            <span class="spanBig"> 揮汗 如羽 </span>
        </div>
        <p class="midp">喜歡打羽球的朋友可以趕緊手刀預約</p>
        <div class="content">
            <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src="../assets/logoImage/廣告.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="../assets/logoImage/廣告1.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="../assets/logoImage/廣告2.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>

        <div class="goReverse">
            <h1>123</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.backGround {
    width: 100vw;
    min-height: 100vh;
    padding: 0 15%;
    background-image: url("../assets/logoImage/pexels-saif71-7438732\ \(1\).jpg");
    background-position: center;
    background-size: cover;
    position: relative;
    header {
        width: 100%;
        height: 10vh;
        display: flex;
        font-family: "Noto Sans TC", sans-serif;
        justify-content: space-around;
        align-items: center;
        p {
            font-weight: 800;
            font-size: 20pt;
            color: rgb(236, 172, 183);
        }
    }
    .slogon {
        width: 100%;
        height: 20vh;
        background-color: transparent;
        display: flex;
        font-family: "Noto Sans TC", sans-serif;
        justify-content: space-around;
        align-items: end;
        .spanBig {
            font-size: 70pt;
            color: white;
            font-family: "Franklin Gothic Medium";
            transform: skew(-7deg);
            letter-spacing: 8rem;
            text-shadow: 10px 6px 5px rgba(0, 0, 0, 1);
        }
    }
    .midp {
        width: 100%;
        height: 35vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35pt;
        color: white;
        opacity: 0.6;
        font-weight: 700;
        letter-spacing: 0.8em;
    }
    .content {
        width: 100%;
        height: 30vh;
        background-color: #84bb9c;
        padding: 2% 2%;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        .carousel.slide {
            height: 100%;
            .carousel-item {
                height: 100%;
            }
        }
    }
    .goReverse {
        width: 100px;
        height: 100px;
        background-color: pink;
        position: absolute;
        top: 25%;
        right: 50%;
    }
}
</style>
