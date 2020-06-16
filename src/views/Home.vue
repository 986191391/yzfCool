<template>
  <div class="main">
    <img class="main-logo" src="../assets/zrn.jpeg" />
    <home-page-introduct msg="yzfCoolFun" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePageIntroduct from "@/components/HomePageIntroduct.vue";

@Component({
  components: {
    "home-page-introduct": HomePageIntroduct
  }
})
export default class VeloSearch extends Vue {
  protected activeTab = "first";
}
</script>

<style lang="less" scoped>
.main {
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
}
</style>
