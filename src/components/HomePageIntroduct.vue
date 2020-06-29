<template>
  <div class="introduction">
    <div class="label">{{ msg }}</div>
    <div class="section">
      <div>一个刚步入社会，离开校园生活的小前端</div>
    </div>
    <div class="section" style="marginTop:50px">
      <img src="../assets/lbxx.jpg" width="50" height="50" />
      将以如下方式记录我学习到的东西
    </div>
    <ul class="record-study">
      <li class="item">
        <img src="../assets/component.png" class="item-img" />
        <h3 class="item-title">组件</h3>
        <div class="item-content">我将会在此记录我在工作过程中参与制作过的组件，或是自己无聊开发的个人新鲜玩意，欢迎大家评论吐槽哈</div>
        <div class="item-more" @click="goParticipate">查看详情</div>
      </li>
      <li class="item">
        <img src="../assets/article.png" class="item-img" />
        <h3 class="item-title">文章</h3>
        <div class="item-content">遇到问题总结回顾记录是一个程序员必备的技能，温故知新，这样才能推动着自己往前进步，欢迎大家阅览</div>
        <div class="item-more" @click="goArticle">查看详情</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private goParticipate() {
    this.$router.push('/participate/introduction');
  }

  private goArticle() {
    this.$router.push('Article');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.introduction {
  width: 80%;
  min-width: 800px;
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
    justify-content: space-around;
    list-style: none;
    margin-top: 100px;

    .item {
      width: 250px;
      height: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 2px;
      transition: all 0.5s;

      &:hover {
        box-shadow: 0 6px 18px 0 rgba(232, 237, 250, 0.5);
        .item-more {
          height: 33px;
          border-top: 1px solid #ccc;
          color: #fff;
          background-color: #99a9bf;
          margin-top: 0px;
        }
      }

      .item-img {
        width: 160px;
        height: 120px;
        margin: 20px 0;
      }

      .item-content {
        font-size: 14px;
        color: #99a9bf;
        padding: 0 25px;
        line-height: 20px;
        margin: 10px 0;
      }

      .item-more {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0px;
        width: 100%;
        border-top: 0px solid #ccc;
        overflow: hidden;
        transition: all 0.5s;
        cursor: pointer;
        margin-top: 15px;
      }
    }
  }
}

a {
  color: #42b983;
}
</style>
