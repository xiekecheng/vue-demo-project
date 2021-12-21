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
    const result = this.$store.state.user.count;
    console.log('result', result);
  },
  methods: {
    ...mapMutations('user',['increment'])
    // increment(){
    // 	this.$store.commit('user/increment')
    // 	const result  = this.$store.state.user.count;
    // 	console.log('result',result);
    // }
  },
};
</script>

<style lang="scss" scoped></style>
