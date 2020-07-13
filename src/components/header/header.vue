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
          <router-link to="/MyBro">MyBro</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/AboutMe">AboutMe</router-link>
        </li>
      </ul>
      <span class="phone-adapter" @click="showDropdown">=</span>
      <div class="phone-dropdown" :class="isShowDropdown && 'showDropdown'">
        <ul class="nav-dropdown">
          <li class="nav-dropdown-item" @click="go('/participate/introduction')">Participate</li>
          <li class="nav-dropdown-item" @click="go('/Article')">Article</li>
          <li class="nav-dropdown-item" @click="go('/AboutMe')">AboutMe</li>
        </ul>
      </div>
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

  private isShowDropdown = false;

  private showDropdown() {
    this.isShowDropdown = this.isShowDropdown ? false : true;
    console.log('hi', this.isShowDropdown);
  }

  private go(path: string) {
    this.$router.push(path);
    this.isShowDropdown = false;
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
        width: 20%;
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
      width: 30px;
      height: 30px;
      font-size: 24px;
      line-height: 24px;
      display: none;
    }

    .phone-dropdown {
      display: none;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 80px;
      left: 0px;
      background-color: #f2f2f2;

      .nav-dropdown {
        width: 100%;
        padding: 30px;
        list-style: none;
        text-align: left;

        .nav-dropdown-item {
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
}

.showDropdown {
  display: flex !important;
}

@media screen and (max-width: 720px) {
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