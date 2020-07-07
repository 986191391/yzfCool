<template>
  <div class="my-participate">
    <div class="nav">
      <ul>
        <li class="nav-li-title">我参与的</li>
        <router-link to="/participate/introduction">介绍</router-link>
        <li class="nav-li-title">组件</li>
        <router-link to="/participate/yzfInput">Input输入框</router-link>
        <router-link to="/participate/yzfSelect">Select选择框</router-link>
        <router-link to="/participate/yzfSearch">Search搜索框</router-link>
        <li class="nav-li-title">小程序</li>
        <li>等待编写</li>
      </ul>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "myParticipate",
  components: {}
})
export default class MyParticipate extends Vue {
  private goIntroduction() {
    this.$router.push({ name: "Introduction" })
  }

  private goYzfInput() {
    this.$router.push({ name: "YzfInput" })
    
  }
}
</script>

<style lang="less" scoped>
.my-participate {
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;

  .nav {
    width: 15%;
    min-width: 240px;
    height: 100%;
    line-height: 40px;
    overflow-x: auto;
    overflow: scroll;
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      text-align: left;
      padding: 20px;

      .nav-li-title {
        font-size: 16px;
        color: #333;
        font-weight: 700;
        margin-top: 15px;
        user-select: none;
        &:hover {
          color: #333;
        }
      }

      a {
        line-height: 38px;
        text-align: left;
        color: #444;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;

        &:hover {
          color: #0366d6;
        }
      }

      .router-link-active {
        color: #0366d6;
      }
    }
  }

  .content {
    width: 85%;
    min-width: 900px;
    display: flex;
    overflow: auto;
    height: 100%;
    padding: 50px 30px 0;
  }
}

@media screen and (max-width: 1080px) {
  
}
</style>
