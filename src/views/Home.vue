<template>
  <div class="home">
    <img src="../assets/zrn.jpeg" />
    <home-page-introduct msg="yzfCoolFun" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePageIntroduct from "@/components/HomePageIntroduct.vue";

@Component({
  name: 'home',
  components: {
    "home-page-introduct": HomePageIntroduct
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
  padding: 50px 0;
}
</style>
