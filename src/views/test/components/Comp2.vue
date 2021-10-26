<template>
  <div>
    <h1>组件2</h1>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("组件2 beforeCreate");
  },
  created() {
    console.log("组件2 created");
  },
  beforeMount() {
    console.log("组件2 beforeMount");
  },
  mounted() {
    console.log("组件2 mounted");
  },
  activated() {
    console.log("组件2 activated");
  },
  deactivated() {
    console.log("组件2 deactivated");
  },
  beforeDestroy() {
    console.log("组件2 beforeDestroy");
  },
  destroyed() {
    console.log("组件2 destroyed");
  },
};
</script>

<style lang="scss" scoped></style>
