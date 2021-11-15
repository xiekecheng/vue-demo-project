<template>
  <div>
    <h1>测试keep-alive</h1>
    <button @click="changeState(1)">组件1</button>
    <button @click="changeState(2)">组件2</button>
    <button @click="changeState(3)">组件3</button>
  </div>
</template>
<script>
export default {
  components: {
    // component1: Comp1,
    // component2: Comp2,
    // component3: Comp3,
  },
  data() {
    return {
      state: 1,
    };
  },
  methods: {
    changeState(val) {
      this.state = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>
