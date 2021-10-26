<template>
  <div>
    <h1>组件3</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  beforeCreate() {
    console.log("组件3 beforeCreate");
  },
  created() {
    console.log("组件3 created");
  },
  beforeMount() {
    console.log("组件3 beforeMount");
  },
  mounted() {
    console.log("组件3 mounted");
  },
  activated() {
    console.log("组件3 activated");
  },
  deactivated() {
    console.log("组件3 deactivated");
  },
  beforeDestroy() {
    console.log("组件3 beforeDestroy");
  },
  destroyed() {
    console.log("组件3 destroyed");
  },
};
</script>

<style lang="scss" scoped></style>
