<template>
    <HeaderBar />
    <div class="background">
        <div class="content">
            <h1 style="text-align: center">場館報名系統說明</h1>
            <p>1. 報名系統：羽球場租、羽球零打，排球零打。</p>
            <p>
                2.
                排球場租、球類季租及特殊場次場租(黎明及星光場)預約，請私訊粉專。
            </p>
            <p>3. 若有包場需求，請於14天前告知。</p>
            <p>
                4. 零打及場租： * 每週五早上8點更新下下週的當週場次。 *
                若欲報名人數大於剩餘人數，則欲報名人數全數列為候補。(例：排球名額男剩一人，女剩1人，但欲報名男2人，女1人，則該報名會皆列入候補)。
                * 完成報名後，可以在我的預約中看到場次資訊。
            </p>
            <p>
                4.
                請勿報名成功且未取消而不來，將會封鎖報名資格(您的自私會造成很多人的不便)。
            </p>
            <p>
                5. 零打等級區分： *
                排球，分新手、一般(懂規則、上下手、攻擊、發球皆穩)及體資等三級 *
                羽球：初、中下及中、中上等兩級
            </p>
            <p>
                6. 流團： * 羽球零打6人成團，8人滿團。 *
                排球零打12人成團，18人滿團。 *
                若於開團前2小時未達人數，則自動流團。
            </p>
            <h1 style="text-align: center">場館規範</h1>
            <p>1. 報名系統：羽球場租、羽球零打，排球零打。</p>
            <p>2. 場館設有飲食區，除此區外全館禁止飲食。</p>
            <p>
                3.
                水及飲料限用寶特瓶或是水壺等容器，避免鋁箔包、超商咖啡、飲料店杯裝等容易打翻之包裝。
            </p>
            <p>4. 請穿著運動服裝，室內運動鞋。</p>
            <p>
                5.
                很重要：僅允許室內球鞋入場！全館鋪設PVC專業運動地墊，務必帶鞋底乾淨的室內運動鞋於門口更換(出入時場館時亦同)，若因鞋底過髒，無法清潔乾淨或更換，將謝絕入館，萬請見諒。
            </p>
            <p>6. 場館備有鞋櫃，可供鞋子替換暫放，恕不負保管之責。</p>
            <p>7. 報名系統：羽球場租、羽球零打，排球零打。</p>
            <div
                class="btnPlace"
                style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 2% 0;
                "
            >
                <button type="button" class="btn btn-primary">
                    閱讀完後，登入開始挑選日期預約
                </button>
            </div>
        </div>
    </div>
    <div class="footer">
        <h5>© 2022-2024 揮汗如羽. All rights reserved.</h5>
    </div>
</template>

<script lang="ts">
import HeaderBar from "@/components/HeaderBar.vue";
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
    components: {
        HeaderBar,
    },
    setup() {
        const router = useRouter();

        function goReserve() {
            router.push({ path: "/MainView" });
        }
        return {
            goReserve,
        };
    },
});
</script>

<style lang="scss" scoped>
.background {
    height: 65vh;
    padding: 0 20vw;
    overflow: auto;
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
