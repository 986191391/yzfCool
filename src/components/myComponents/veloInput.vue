<template>
  <el-popover
    popper-class="velo-popover-warning input-popover"
    :placement="popoverPosition"
    :trigger="errTrigger"
    :disabled="!err || showWay"
    :content="errContent"
  >
    <div class="err-content" slot="reference">
      <div class="err-info" v-if="err && showWay">{{ errContent }}</div>
      <el-input
        ref="input"
        :class="err ? 'err' : ''"
        v-bind="$attrs"
        v-on="$listeners"
      />
    </div>
  </el-popover>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "veloInput",
  components: {}
})
export default class VeloInput extends Vue {
  @Prop({ default: "bottom-start" })
  private popoverPosition!: string;

  @Prop({ default: "请输入字符" })
  private errContent!: string;

  // 输入的内容是否合法
  @Prop({ default: false })
  private err!: boolean;

  // 使用哪种方式提示，false为弹框，true为在上方显示字体
  @Prop({ default: false })
  private showWay!: boolean;

  // 控制tip警告框的出现方式，可选为hover和click
  @Prop({ default: "hover" })
  private errTrigger!: string;

  @Prop({ default: false })
  private autofocus!: boolean;

  private mounted(): void {
    if (this.autofocus)
      this.$nextTick(() => (this.$refs["input"] as HTMLElement).focus());
  }
}
</script>

<style lang="less">
.err {
  .el-input__inner {
    border: 1px solid #e54545 !important;
  }
}

.err-content {
  position: relative;
  .err-info {
    position: absolute;
    bottom: 30px;
    left: 0px;
    color: #fe3838;
    font-size: 12px;
    font-weight: 400;
  }
}

.el-form-item__content {
  span {
    .velo-popover-warning {
      display: none !important;
    }
  }
}
</style>
