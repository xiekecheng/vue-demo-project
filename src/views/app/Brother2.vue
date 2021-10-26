<template>
  <div>
    <h1>Brother2</h1>
    <input type="text" v-model="text" />
    <button @click="handleClick">传递信息</button>

    <button @click="changeParent">使用$parent来修改父组件的值</button>
    <button @click="callParent">调用父组件方法</button>
  </div>
</template>

<script>
import bus from "./bus";
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleClick() {
      bus.$emit("globalEvent", this.text);
    },
    changeParent() {
      this.$parent.parent = "被子组件修改";
    },
    callParent() {
      this.$parent.changeValue();
    },
  },
};
</script>

<style lang="scss" scoped></style>
