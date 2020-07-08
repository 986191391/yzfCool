<template>
  <div class="introduction">
    <div class="main-title">介绍 </div>
    <div class="description">
      本页主要记录我参与制作过的组件以及小程序，也会不时开发新的组件，组件的开发是基于elementUI的基础进行的一个提升，需要先提前安装好elementUI。
    </div>
    <div class="secondary-title install">npm 安装ElementUI</div>
    <div class="description">
      在使用我封装的组件时，需要先安装elementUI<br>
      安装elementUI可以参考<a class="elem-link" target="_blank" href="https://element.eleme.io/#/zh-CN/component/installation"> https://element.eleme.io/#/zh-CN/component/installation</a>
    </div>
    <code class="code">
      // 可以使用以下npm命令进行安装<br>
      npm i element-ui -S
    </code>
    <div class="secondary-title install">CDN</div>
    <div class="description">
      目前可以通过 <a class="elem-link" target="_blank" href="https://unpkg.com/browse/element-ui@2.13.2/">unpkg.com/element-ui</a> 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
    </div>
    <code class="code">
      &lt;!-- 引入样式 --&gt;<br>
      &lt;link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"&gt;<br>
      &lt;!-- 引入组件库 --&gt;<br>
      &lt;script src="https://unpkg.com/element-ui/lib/index.js"&gt;&lt;/script&gt;
    </code>
    <div class="secondary-title install">下载并安装微信开发者工具</div>
    <div class="description">
      参与开发过的小程序主要的运行平台是在微信，微信小程序方面是需要安装微信开发者工具<br>
      下载并安装工具可以参考<a class="elem-link" target="_blank" href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html">https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html</a>
    </div>
    <div class="footer-nav">
      <span></span>
      <router-link to="/participate/yzfInput">Input输入框 ></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "introduction",
  components: {}
})
export default class Introduction extends Vue {
  private goInput() {
    this.$router.push('/participate/yzfInput');
  }
}
</script>

<style lang="less" scoped>
  .introduction {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    div {
      width: 100%;
    }

    .main-title {
      font-weight: 400;
      color: #1f2f3d;
      font-size: 28px;
    }

    .description {
      font-size: 14px;
      color: #5e6d82;
      margin: 20px 0 10px;
      line-height: 23px;
    }

    .code {
      width: 100%;
      line-height: 1.8;
      font-family: Menlo,Monaco,Consolas,Courier,monospace;
      font-size: 12px;
      padding: 18px 24px;
      background-color: #fafafa;
      border: 1px solid #eaeefb;
      border-radius: 4px;
      color: black
    }
    
    .secondary-title {
      font-weight: 400;
      color: #1f2f3d;
      font-size: 22px;
    }

    .install {
      margin-top: 35px;
    }

    .elem-link {
    }

    code {
      color: #abb2bf;
      background: #282c34;
    }

    .footer-nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      cursor: pointer;
      margin: 30px 0;

      a {
        color: #333;
        &:hover {
          color: #0366d6;
        }
      }

    }
  }
</style>