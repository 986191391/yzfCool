<template>
  <div class="header">
    <div class="header-main">
        <div class="header-left">
            yzfCoolFun
        </div>
        <ul class="nav">
            <li class="nav-item">My Component</li>
            <li class="nav-item">My Article</li>
            <li class="nav-item">About Me</li>
        </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "header",
  components: {}
})
export default class Header extends Vue {}
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: center;
  height: 80px;
//   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);

  .header-main {
    min-width: 1140px;
    width: 70%;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;

    .header-left {
        font-size: 20px;
        font-weight: bold;
    }

    .nav {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        list-style: none;

        .nav-item {
            width: 25%;
            color: #888;
            text-align: center;
            cursor: pointer;

            &:hover {
                color: #000;
            }
        }
    }
  }
}
</style>