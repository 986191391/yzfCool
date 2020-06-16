<template>
  <div class="footer">
    <div class="left">
      <h4 class="title">联系我</h4>
      <ul class="social">
        <li>GitHub: 986191391</li>
        <li>CSDN: GonTinyBlack</li>
        <li>Wechat: yzefeng99620</li>
      </ul>
    </div>
    <div class="right">© 2020 Design By 2e4ong</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "footer",
  components: {}
})
export default class Footer extends Vue {}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  justify-content: space-around;
  height: 210px;
  width: 100%;
  background-color: #eee;
  padding: 40px 0;

  .left {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;

    .title {
      font-size: 18px;
      margin-bottom: 18px;
    }

    .social {
      list-style: none;
      font-size: 14px;
      color: #666;

      li {
        line-height: 30px;
      }
    }
  }

  .right {
    display: flex;
    align-items: flex-end;
    color: #bcbcbc;
    font-size: 14px;
  }
}
</style>
