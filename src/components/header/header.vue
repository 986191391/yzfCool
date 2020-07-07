<template>
  <div class="header">
    <div class="header-main">
      <div class="header-left" @click="goDefault">
        yzfCoolFun
      </div>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/participate/introduction">Participate</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Article">Article</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/AboutMe">AboutMe</router-link>
        </li>
      </ul>
      <span class="phone-adapter">=</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "header",
  components: {}
})
export default class Header extends Vue {
  private goDefault() {
    this.$router.push('/');
  }
}
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
      cursor: pointer;
    }

    .nav {
      width: 40%;
      display: flex;
      justify-content: flex-end;
      list-style: none;

      .nav-item {
        width: 25%;
        color: #888;
        text-align: center;
        cursor: pointer;

        a {
          text-decoration: none;
          color: #888;

          &:hover {
            color: #000;
          }
        }
      }
    }

    .phone-adapter {
      display: none;
    }
  }
}

@media screen and (max-width: 1080px) {
  .header {
    .header-main {
      min-width: 100%;
      width: 100%;
      padding: 0 20px;

      .nav {
        display: none;
      }

      .phone-adapter {
        display: block;
      }
    }
  }
}
</style>