<template>
  <div>
    <input type="text" v-model="str" />
    <button @click="add" @>添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "",
    };
  },
  methods: {
    add() {
      this.$emit("getChildData", "aaa");
    },
  },
};
</script>

<style lang="scss" scoped></style>
