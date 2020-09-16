<template>
  <div
    class="search-div"
    @click="getInputFocus"
    @mousemove="searchHover()"
    @mouseout="searchHover(true)"
  >
    <span class="icon icon-left" />
    <input
      ref="search"
      class="search"
      :placeholder="placeholder"
      v-model="inputValue"
      :class="getInputClass()"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @input="onInput"
    />
    <div class="icon-clear-div" @click="onClear">
      <span :class="getClearClass()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

enum inputAllStatus {
  inputStatusNormal = 1,
  inputStatusFocus = 2,
  inputStatusBlur = 3
}

@Component({
  name: "VeloSearch"
})
export default class VeloSearch extends Vue {
  @Prop({ default: "请输入关键字搜索" })
  protected placeholder!: string;

  @Prop({ default: "" })
  protected content!: string;

  // 判断是否要自动获取input的焦点
  @Prop({ default: false })
  protected isFocus!: string;

  @Watch("content", { immediate: true })
  protected watchContent(val: string) {
    this.inputValue = val ? val : "";
  }

  @Watch("isFocus", { immediate: true })
  protected watchIsFocus(val: boolean) {
    if (val) {
      this.$nextTick(() => {
        (this.$refs.search as any).focus();
      });
    }
  }

  protected inputValue = "";

  // 左侧icon出现右侧icon一定消失，且左侧icon出现输入框一定为蓝色，所以公用一个属性
  protected styleControl = false;

  protected showClearIcon = false;

  protected inputStatus: number = inputAllStatus.inputStatusNormal;

  protected onInput() {
    this.onInputFocus();
    this.showClearIcon = this.inputValue ? true : false;
    this.$emit("getValue", this.inputValue);
  }

  protected onInputBlur() {
    this.inputValue
      ? (this.inputStatus = inputAllStatus.inputStatusBlur)
      : this.setDefault();
    this.showClearIcon = false;
    this.$emit("getBlur");
  }

  // 在onInput和onfocus中调用，
  protected onInputFocus() {
    // 鼠标悬停中有公共方法， 用于判断输入框是否为空显示隐藏清空icon
    this.searchHover();
    this.inputStatus = this.inputValue
      ? inputAllStatus.inputStatusFocus
      : inputAllStatus.inputStatusBlur;

    this.styleControl = true;
  }

  // 点击清除按钮
  protected onClear() {
    this.inputValue = "";
    this.setDefault();
    this.$emit("getClear");
  }

  // 鼠标悬停 判断输入框内是否有内容，有的话则显示，没有的话如果不是选中状态则隐藏，是选中状态则不隐藏
  protected searchHover(mouseout = false) {
    if (this.inputValue && !mouseout) {
      this.showClearIcon = true;
    } else {
      this.showClearIcon =
        this.inputStatus === inputAllStatus.inputStatusFocus ? true : false;
    }
  }

  // 变为默认状态
  protected setDefault() {
    this.inputStatus = inputAllStatus.inputStatusNormal;
    this.styleControl = false;
  }

  // 点击输入框内获取输入框焦点
  protected getInputFocus() {
    (this.$refs.search as any).focus();
  }

  // 判断输入框的状态，修改对应状态的属性
  protected getInputClass() {
    let retClass = "";
    retClass += this.styleControl ? "border-blue" : "border-ddd";

    if (this.showClearIcon) {
      retClass += " input-status-focus";
      return retClass;
    }

    this.inputStatus === inputAllStatus.inputStatusNormal
      ? (retClass += " input-status-normal")
      : this.inputStatus === inputAllStatus.inputStatusFocus
      ? (retClass += " input-status-focus")
      : (retClass += " input-status-blur");

    return retClass;
  }

  protected getClearClass() {
    let retClass = "icon-clear";
    this.showClearIcon
      ? (retClass += " visibility-true")
      : (retClass += " visibility-false");
    return retClass;
  }
}
</script>

<style lang="less" scoped>
.search-div {
  position: relative;

  .search {
    display: flex;
    height: 30px;
    width: 100%;
    border: 1px solid #ddd;
    background: #fff;
    color: #000;
    font-size: 12px;
    padding: 0 10px;
    border-radius: 2px;

    &::placeholder {
      color: #888;
      font-size: 12px;
    }
  }

  // icon的公共样式
  .icon {
    display: flex;
    width: 16px;
    height: 16px;
    position: absolute;
  }

  // 左侧的搜索icon
  .icon-left {
    top: calc(50% - 8px);
    left: 10px;

    &::before {
      content: "\e608";
      font-family: "iconfont";
      color: #888;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  // 默认状态下右侧的搜索icon
  .icon-right {
    top: calc(50% - 8px);
    right: 10px;

    &::after {
      content: "\e608";
      font-family: "iconfont";
      color: #888;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  // 清空按钮的样式
  .icon-clear-div {
    position: absolute;
    width: 32px;
    height: 100%;
    top: 0px;
    right: 0px;
  }

  .icon-clear {
    width: 32px;
    height: 100%;
    color: #888;
    cursor: pointer;
    visibility: hidden;

    &::after {
      content: "\e65f";
      font-family: "iconfont";
      width: 100%;
      height: 100%;
      display: flex;
      font-size: 14px;
      line-height: 14px;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      color: #444;
    }
  }

  // 这里开始是input框的动态样式
  .border-blue {
    border: 1px solid #006eff;
  }

  .border-ddd {
    border: 1px solid #ddd;

    &:hover {
      border-color: #bbb;
    }
  }

  .input-status-normal {
    padding: 0 10px 0 32px;
  }

  .input-status-focus {
    padding: 0 30px 0 32px;
  }

  .input-status-blur {
    padding: 0 10px 0 32px;
  }

  // 这里是控制右侧清除按钮显示与否的动态样式
  .visibility-true {
    visibility: visible;
  }

  .visibility-false {
    visibility: hidden;
  }
}
</style>
