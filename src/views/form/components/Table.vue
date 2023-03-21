<template>
  <div>
    <h1>{{}}</h1>
    <div v-for="(item, index) in TreeData" :key="index">
      <span>{{ item.value }}</span>
      <div v-if="item.children" style="margin-left: 12px">
        <MyList :TreeData="item.children"></MyList>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyList',
  props: {
    TreeData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
};
</script>
