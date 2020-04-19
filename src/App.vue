<template>
  <div id="app">
    <div class="showWindow" :class="showNumber<0 ? 'hideWindow':''">{{showFontData[showNumber]}}</div>
    <!-- <div class="main"> -->
    <!-- <ul class="nav">
        <li>
          <router-link to="/">Cooool</router-link>
        </li>
        <li>
          <router-link to="/zing">theZingzing</router-link>
        </li>
        <li>
          <router-link to="/kyomika">Kyomika</router-link>
        </li>
        <li>
          <router-link to="/jacket">jacket</router-link>
        </li>
    </ul>-->
    <router-view />
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class VeloSearch extends Vue {
  protected showNumber = 2;

  protected showFontData = ["Ready?", "You", "Are"];

  protected timer: any;

  protected mounted() {
    this.timer = setInterval(() => {
      this.showNumber >= 0 ? this.showNumber-- : this.clearTimer();
    }, 500);
  }

  protected clearTimer() {
    clearInterval(this.timer);
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}

.nav {
  width: 30%;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0 auto;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: all 0.5s;

    &:hover {
      color: #42b983;
    }

    &.router-link-exact-active {
      color: green;
    }
  }
}

.showWindow {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: pink;
  transition: all 1s;
  font-size: 300px;
  opacity: 1;
  z-index: 99;
  user-select: none;
}

.hideWindow {
  width: 10000px;
  height: 10000px;
  font-size: 0px;
  opacity: 0;
  z-index: 80;
  visibility: hidden;
}
</style>
