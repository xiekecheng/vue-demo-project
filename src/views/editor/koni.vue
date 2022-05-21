<template>
  <div>
    <h1>拓扑编辑器</h1>
    <div>现在的值:{{ count }}</div>
    <el-button @click="increment">自增</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState('user', ['count']),
  },
  created() {
  },
  methods: {
    ...mapMutations('user',['increment'])
  },
};
</script>

<style lang="scss" scoped></style>
