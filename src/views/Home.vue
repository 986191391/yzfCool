<template>
  <div class="main">
      <div class="main-body">
        <img class="main-logo" src="../assets/zrn.jpeg" />
        <home-page-introduct msg="yzfCoolFun" />
      </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  height: 100%;
  display: flex;
  flex: 1;
  overflow: auto;

    .main-body {
      display: flex;
      align-items: center;
      flex: 1 1 auto;
      overflow: auto;
      flex-direction: column;
      padding: 30px 200px 0 200px;

      .main-logo {
        width: 800px; 
        height: 496px;
      }
    }
  // }

}
</style>
