<template>
  <div>
    <h1>组件1</h1>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("组件1 beforeCreate");
  },
  created() {
    console.log("组件1 created");
  },
  beforeMount() {
    console.log("组件1 beforeMount");
  },
  mounted() {
    console.log("组件1 mounted");
  },
  activated() {
    console.log("组件1 activated");
  },
  deactivated() {
    console.log("组件1 deactivated");
  },
  beforeDestroy() {
    console.log("组件1 beforeDestroy");
  },
  destroyed() {
    console.log("组件1 destroyed");
  },
};
</script>

<style lang="scss" scoped></style>
