<template>
  <div>
    <List :list="list" />
    <MyInput @getChildData="getChildData" />
    <Children />
    <button @click="handleChildren">修改</button>
    <h1 v-text="a.age"></h1>
    <button @click="updateName">修改名称</button>
  </div>
</template>

<script>
import List from './List.vue';
import MyInput from './Input.vue';
import Children from './Children.vue';

export default {
  components: {
    List,
    MyInput,
    Children,
  },
  data() {
    return {
      list: [
        { id: 1, name: 'jack' },
        { id: 2, name: 'tom' },
        { id: 3, name: 'rose' },
      ],
      CList: [
        { id: 1, name: 'c1' },
        { id: 2, name: 'c2' },
        { id: 3, name: 'c3' },
      ],
      a: {
        name: '我是笨蛋',
      },
    };
  },
  methods: {
    getChildData(data) {
      // console.log(data);
      this.list.push({ id: Math.random(), name: data });
    },
    handleChildren() {
      // 修改子组件的属性
      this.$children[2].children = '我被修改了';

      // 修改子组件的方法
    },
    updateName() {
      this.a.age = '我是聪明人';
      // console.log(this.a.age);
    },
  },
};
</script>

<style lang="scss" scoped></style>
