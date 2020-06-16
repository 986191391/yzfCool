<template>
  <div class="my-component">
    <div class="nav">
      <h4>组件</h4>
      <ul>
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
  name: "myComponent",
  components: {}
})
export default class MyComponent extends Vue {}
</script>

<style lang="less" scoped>
.my-component {
  display: flex;

  .nav {
    display: flex;
    flex-direction: column;
    width: 240px;
    border-right: 1px solid #ccc;

    ul {
      list-style: none;
      padding: 20px 20px 0;

      li {
        text-align: left;
        color: #555;
        font-size: 14px;
        line-height: 30px;
      }
    }
  }

  .content {
    width: 900px;
  }
}
</style>
