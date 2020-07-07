<template>
  <div id="app">
    <div
      class="showWindow"
      :class="showNumber < 0 ? 'hideWindow' : ''"
    >{{ showFontData[showNumber] }}</div>
    <yzf-header />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/header.vue";

@Component({
  components: {
    "yzf-header": Header,
  }
})
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: PingFangSC-Regular,PingFang SC;
}

a {
  text-decoration: none;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
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

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  align-items: center;
}


@media screen and (max-width: 720px) {
  #app {
    height: 100%;
  }

  .showWindow {
    font-size: 48px;
  }
}
</style>
