<template>
  <div class="my-bro">
    <div class="first-screen"></div>
    <div>女神镇楼</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "myBro",
  components: {}
})
export default class MyBro extends Vue {}
</script>

<style lang="less" scoped>
.my-bro {
  .first-screen {
    width: 300px;
    height: 300px;
    background: url("../../assets/index.jpeg") center no-repeat;
    background-size: contain;
    margin-top: 50px;
  }
}
</style>
