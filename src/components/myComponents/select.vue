<template>
  <el-popover
    popper-class="velo-popover-warning select-popover"
    :placement="popoverPosition"
    :trigger="errTrigger"
    :disabled="!err || showWay"
    :content="errContent"
  >
    <div class="err-info" v-if="err && showWay">{{ errContent }}</div>
    <el-select
      :class="err ? 'err' : ''"
      v-bind="veloSelectProps"
      v-on="$listeners"
      slot="reference"
    >
      <el-option
        v-for="item in selectOptions"
        :key="item.key || item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-popover>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "veloSelect",
  components: {}
})
export default class VeloSelect extends Vue {
  @Prop({ default: "bottom-start" })
  private popoverPosition!: string;

  @Prop({ default: "请选择选项" })
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

  // option循环的数据
  @Prop({ default: [] })
  private selectOptions: any;

  private get veloSelectProps(): Record<string, any> {
    return {
      ...this.$attrs
    };
  }
}
</script>

<style lang="less">
.err {
  .el-input__inner {
    border: 1px solid #e54545 !important;
  }
}

.err-info {
  color: #fe3838;
  font-size: 12px;
  font-weight: 400;
}
</style>
