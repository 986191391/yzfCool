<template>
  <div class="yzf-input">
    <div class="description-warpper">
      <div class="main-title">
        Input 输入框
      </div>
      <div class="description">
        在elementUI的Input组件上进行了一个升级，在不丢失原有功能的前提下新增样式及功能，el-input的所有属性都可以正常的使用。
      </div>
    </div>
    <div class="standard-input-wrapper">
      <div class="area-title">
        基本用法
      </div>
      <codeDemo :codeHeight="65" :code="standardInputCode">
        <veloInput class="standard-input" v-model="standardInputValue" placeholder="请输入内容" clearable/>
      </codeDemo>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import codeDemo from "@/components/codeDemo/codeDemo.vue";
import veloInput from "@/components/myComponents/veloInput.vue";

@Component({
  name: "yzfInput",
  components: {
    codeDemo,
    veloInput
  }
})
export default class YzfInput extends Vue {
  private standardInputValue = '';

  private standardInputCode = `<veloInput v-model="hi" clearable/>`;
}
</script>

<style lang="less" scoped>
.yzf-input {
  text-align: left;

  .description-warpper {
    margin-bottom: 60px;
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

  // public css style
  .area-title {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin-bottom: 20px;
  }

  .standard-input-wrapper {
    .standard-input /deep/ .el-input{
      width: 180px;
    }
  }
}
</style>
