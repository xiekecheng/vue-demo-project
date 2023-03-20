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
import { mapState } from 'vuex';

export default {
  name: 'MyList',
  props: {
    TreeData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState('right', ['isReadOnly']),
  },
  created() {
    console.log('created=>isReadOnly', this.isReadOnly);
  },
  mounted() {
    console.log('mounted=>isReadOnly', this.isReadOnly);
  },
  methods: {},
};
</script>
