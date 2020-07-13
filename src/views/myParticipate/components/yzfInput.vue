<template>
  <div class="yzf-input">
    <div class="main-title">
      Input 输入框
    </div>
    <div class="description">
      在elementUI的Input组件上进行了一个升级，在不丢失原有功能的前提下新增样式及功能，el-input的所有属性都可以正常的使用。
    </div>
    <codeDemo :codeHeight="200">
      hi i like RuoNan Zhang
    </codeDemo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import codeDemo from "@/components/codeDemo/codeDemo.vue"

@Component({
  name: "yzfInput",
  components: {
    codeDemo
  }
})
export default class YzfInput extends Vue {
}
</script>

<style lang="less" scoped>
    .yzf-input {
      text-align: left;

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

        
    }
</style>