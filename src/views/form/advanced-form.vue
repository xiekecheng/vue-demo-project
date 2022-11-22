<template>
  <div>
    <h1>高级表单</h1>
    <MyTable :TreeData='list' />
  </div>
</template>

<script>
import MyTable from './components/Table.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [
        { value: 1, children: [{ value: 5, children: [{ value: 7 }] }] },
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
  computed: {
    ...mapState('right',['isReadOnly'])
  },
  created() {
    this.fetchReadOnlyData(4399);
  },
  mounted() {

  },
  methods: {
    ...mapActions('right', ['fetchReadOnlyData']),

  },

};
</script>

<style lang='scss' scoped></style>
