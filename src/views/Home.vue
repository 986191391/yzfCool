<template>
  <div class="home">
    <div class="main">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="cooool" name="first">
          <img alt="Vue logo" src="../assets/zrn.jpeg" />
          <hello-world msg="yzfCoolFun" />
        </el-tab-pane>
        <el-tab-pane label="theZingzing" name="second">theZingzing</el-tab-pane>
        <el-tab-pane label="Kyomika" name="third">Kyomika</el-tab-pane>
        <el-tab-pane label="jacket" name="fourth">jacket</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    "hello-world": HelloWorld
  }
})
export default class VeloSearch extends Vue {
  protected activeTab = "first";
}
</script>

<style scoped>
.main {
  z-index: 90;
}
</style>
