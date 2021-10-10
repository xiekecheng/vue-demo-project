<template>
  <div>
    <h1>Brother1</h1>
    Brother2兄弟传过来的消息: <span v-text="brotherMessage"></span>
    <h1>父组件传值:{{ value }}</h1>
    <button @click="handleClick">修改父组件传值</button>
  </div>
</template>

<script>
import bus from "./bus";
export default {
  data() {
    return {
      brotherMessage: "",
    };
  },
  props: { value: String },
  mounted() {
    bus.$on("globalEvent", (val) => {
      console.log(val);
      this.brotherMessage = val;
    });
  },
  methods: {
    handleClick() {
      this.$emit("input", "子组件的值");
    },
    changeValue() {
      alert("changeValue");
    },
  },
};
</script>

<style lang="scss" scoped></style>
