<template>
  <div class="my-component"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "myComponent",
  components: {}
})
export default class MyComponent extends Vue {}
</script>

<style lang="less" scoped>
.my-component {
  display: flex;
  justify-content: space-around;
  height: 210px;
  width: 100%;
  background-color: #eee;
  padding: 40px 0;

  }
}
</style>
