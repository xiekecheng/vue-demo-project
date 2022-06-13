<template>
  <div>
    <h1>高级表单</h1>
    <MyTable :TreeData="list" />
  </div>
</template>

<script>
import MyTable from './components/Table.vue';
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [
        { value: 1, children: [{ value: 5 }] },
        { value: 2 },
        {
          value: 3,
          children: [
            {
              value: 6,
            },
          ],
        },
        { value: 4 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
