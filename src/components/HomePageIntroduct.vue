<template>
  <div class="introduction">
    <div class="label">{{ msg }}</div>
    <div class="section">
      <div>一个刚步入社会，离开校园生活的小前端</div>
    </div>
    <div class="section" style="marginTop:50px">
      <img src="../assets/lbxx.jpg" width="50" height="50">将以如下方式记录我学习到的东西
    </div>
    <ul class="record-study">
      <li class="item"></li>
      <li class="item"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.introduction {
  width: 80%;
  max-width: 800px;
  margin-top: 20px;
  font-size: 15px;
  padding: 20px 0;

  .label {
    font-size: 40px;
    font-weight: 500;
  }

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 35px;
  }

  .record-study {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 100px;

    .item {
      width: 250px;
      height: 300px;
      border: 1px solid #ccc;
      border-radius: 2px;
      transition: all 0.5s;

      &:hover {
        box-shadow: 0 6px 18px 0 rgba(232,237,250,.5);
      }
    }
  }

}

a {
  color: #42b983;
}
</style>
