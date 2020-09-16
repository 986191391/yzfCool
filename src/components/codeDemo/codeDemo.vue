<template>
  <div class="code-demo">
    <div class="code-demo-show">
      <slot />
    </div>
    <div class="demo-code" :style="codeWrapperHeight">
      <pre>
        <code>{{ code }}</code>
      </pre>
    </div>
    <div class="code-demo-footer" @click="showCode">
      <div class="footer-font-wrapper">
        <i :class="isCodeShow ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" />
        <span>{{ isCodeShow ? "隐藏代码" : "显示代码" }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "codeDemo",
  components: {}
})
export default class CodeDemo extends Vue {
  @Prop({ default: "" })
  private codeHeight!: string;

  @Prop({ default: "" })
  private code!: string;

  private get codeWrapperHeight() {
    return this.isCodeShow ? `height: ${this.codeHeight}px` : "height: 0px";
  }


  private isCodeShow = false;

  private showCode() {
    this.isCodeShow = this.isCodeShow ? false : true;
  }
}
</script>

<style lang="less" scoped>
.code-demo {
  width: 100%;
  height: auto;
  border-radius: 3px;
  border: 1px solid #ddd;

  &:hover {
    box-shadow: 0 5px 21px 0 rgba(0, 0, 0, 0.1);
  }

  .code-demo-show {
    padding: 24px;
  }

  .demo-code {
    font-size: 14px;
    color: #333;
    height: 0px;
    border-top: 1px solid #ddd;
    overflow: hidden;
    transition: all 0.5s;

    pre {
      padding: 24px;
    }
  }

  .code-demo-footer {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -1px;
    font-size: 12px;
    border-top: 1px solid #ddd;
    transition: all 1s;

    .footer-font-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      span {
        display: block;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
        margin-left: 10px;
        transition: all 0.5s;
      }
    }

    &:hover {
      .footer-font-wrapper {
        background-color: #f2f2f2;
        span {
          width: 50px;
        }
      }
    }
  }
}

@media screen and (max-width: 720px) {
}
</style>
