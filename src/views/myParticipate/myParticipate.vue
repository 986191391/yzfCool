<template>
  <div class="my-participate">
    <div class="nav">
      <ul>
        <li class="nav-li-title">我参与的</li>
        <li>介绍</li>
        <li class="nav-li-title">组件</li>
        <li>input输入框</li>
        <li>select选择框</li>
        <li>search搜索框</li>
        <li>input输入框</li>
        <li>select选择框</li>
        <li>search搜索框</li>
        <li>input输入框</li>
        <li>select选择框</li>
        <li>search搜索框</li>
        <li>input输入框</li>
        <li>select选择框</li>
        <li class="nav-li-title">小程序</li>
        <li>search搜索框</li>
        <li>input输入框</li>
        <li>select选择框</li>
        <li>search搜索框</li>
        <li>input输入框</li>
        <li>select选择框</li>
        <li>search搜索框</li>
        <li>input输入框</li>
        <li>select选择框</li>
        <li>search搜索框</li>
      </ul>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "myParticipate",
  components: {}
})
export default class MyParticipate extends Vue {}
</script>

<style lang="less" scoped>
.my-participate {
  height: 100%;
  display: flex;
  justify-content: center;

  .nav {
    width: 240px;
    height: 100%;
    overflow-x: auto;
    overflow: scroll;
    display: flex;
    flex-direction: column;

    ul {
      list-style: none;
      padding: 20px 20px 0;

      .nav-li-title {
        font-size: 16px;
        color: #333;
        font-weight: 700;
        margin-top: 15px;
        &:hover {
          color: #333;
        }
      }

      li {
        line-height: 40px;
        text-align: left;
        color: #444;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;

        &:hover {
          color: #0366d6;
        }
      }
    }
  }

  .content {
    width: 900px;
  }
}
</style>
