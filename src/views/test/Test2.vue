<template>
  <div>
    <h1>测试页面2</h1>
    <!-- <h1 v-cloak>{{ reverseMessage }}</h1>
    <h1 v-text="reverseMessage"></h1>
    <a href="www.baidu.com" @click.prevent="handleClick('aaa', $event)"
      >我不会跳转页面</a
    > -->
    全名: <input v-model="fullName" type="text" />
    firstName:
    <input v-model="firstName" type="text" />
    lastName:
    <input v-model="lastName" type="text" />
    <span :class="{ color: false, [styleName]: true }">我是文字</span>
    <button @click="mixMethod">调用mixin方法</button>
    <span v-text="mixinName"></span>
    <span>{{ firstName }}</span>
  </div>
</template>

<script>
import mixin from "./components/mix";
export default {
  mixins: [mixin],
  data() {
    return {
      word: "this is a famous city",
      firstName: "tim",
      lastName: "cook",
      styleName: "bold",
    };
  },
  computed: {
    reverseMessage() {
      return this.word.split("").reverse().join("");
    },
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newVal) {
        const names = newVal.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
  },
  methods: {
    handleClick(val, e) {
      console.log("我不会跳转页面");
      console.log("val, e.target.value", val, e);
    },
    callMixin() {
      this.mixMethod();
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  color: red;
}
.bold {
  font-size: 30px;
}
</style>
