<template>
  <div class="home">
    <div class="home-img"></div>
    <!-- <img src="../assets/zrn.jpeg" /> -->
    <home-page-introduct msg="yzfCoolFun" />
    <yzf-cool-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePageIntroduct from "./HomePageIntroduct.vue";
import YzfCoolFooter from "@/components/yzfFooter/yzfFooter.vue";

@Component({
  name: "home",
  components: {
    "home-page-introduct": HomePageIntroduct,
    "yzf-cool-footer": YzfCoolFooter
  }
})
export default class Home extends Vue {
  protected activeTab = "first";
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;

  .home-img {
    height: 496px;
    width: 800px;
    background: url("../assets/zrn.jpeg") no-repeat center;
    background-size: contain;
  }
}

@media screen and (max-width: 720px) {
  .home {
    .home-img {
      height: 200px;
      width: 100%;
      background: url("../assets/zrn.jpeg") no-repeat center;
      background-size: contain;
    }
  }
}
</style>
