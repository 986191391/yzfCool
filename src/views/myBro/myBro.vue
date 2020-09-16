<template>
  <div class="my-bro">
    <div class="screen-wrapper">
      <div class="first-screen"></div>
    </div>
    <div>女神镇楼</div>

    <div class="my-animate">
      <div class="start"></div>
      <div class="bend-out"></div>
      <div class="bend-in"></div>
      <div class="bend-out-second"></div>
      <div class="bend-in-second"></div>
      <div class="end"></div>
    </div>
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
  .screen-wrapper {
    width: 200px;
    height: 200px;
    position: relative;

    .first-screen {
      width: 200px;
      height: 200px;
      background: url("../../assets/index.jpeg") center no-repeat;
      background-size: cover;
      border-radius: 50%;
    }
  }

  .my-animate {
    width: 600px;
    height: 630px;
    position: relative;
    transform: scale(0.5, 0.8) rotateX(60deg);
    transform-style: preserve-3d;

    .start {
      height: 150px;
      width: 100px;
      position: absolute;
      left: 0;
      top: 0;
      border-left: 1px solid blue;
      border-right: 1px solid blue;
    }

    .bend-out {
      width: 300px;
      height: 300px;
      position: absolute;
      top: 50px;
      left: 0;
      border-radius: 0 0 0 50%;
      border-bottom: 1px solid blue;
      border-left: 1px solid blue;
    }

    .bend-in {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 150px;
      left: 99px;
      border-radius: 0 0 0 80%;
      border-bottom: 1px solid blue;
      border-left: 1px solid blue;
    }

    .bend-out-second {
      width: 300px;
      height: 300px;
      position: absolute;
      top: 249px;
      left: 199px;
      border-radius: 0 50% 0 0;
      border-top: 1px solid blue;
      border-right: 1px solid blue;
    }

    .bend-in-second {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 349px;
      left: 300px;
      border-radius: 0 80% 0 0;
      border-top: 1px solid blue;
      border-right: 1px solid blue;
    }

    .end {
      width: 100px;
      height: 200px;
      position: absolute;
      top: 425px;
      left: 399px;
      border-left: 1px solid blue;
      border-right: 1px solid blue;
    }
  }
}
</style>
