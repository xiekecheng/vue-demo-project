<template>
  <div>
    <h1>测试keep-alive</h1>
    <button @click="changeState(1)">组件1</button>
    <button @click="changeState(2)">组件2</button>
    <button @click="changeState(3)">组件3</button>
    <!--  -->
    <keep-alive>
      <component1 v-if="state == 1" />
      <component2 v-if="state == 2" />
      <component3 v-if="state == 3" />
    </keep-alive>
  </div>
</template>

<script>
import Comp1 from "./components/Comp1.vue";
import Comp2 from "./components/Comp2.vue";
import Comp3 from "./components/Comp3.vue";
export default {
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
  components: {
    component1: Comp1,
    component2: Comp2,
    component3: Comp3,
  },
};
</script>

<style lang="scss" scoped></style>
