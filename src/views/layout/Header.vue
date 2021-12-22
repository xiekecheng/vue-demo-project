<template>
  <div class="my-header">
    <el-row type="flex" justify="space-between">
      <el-col>
        <div>
          <button @click="handleGo">前进</button>
          <button @click="handleBack">后退</button>
          <button @click="handleFresh">刷新</button>
          <button @click="logout">退出登录</button>
        </div>
      </el-col>
      <el-col :span="6">用户名:{{ userInfo.username }}</el-col>
    </el-row>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth';
import { mapState } from 'vuex';
export default {
  name: 'MyHeader',
  computed: {
    ...mapState('user', ['userInfo']),
  },
  created(){
    // console.log('userInfo', this.userInfo);
  },
  mounted() {
    // console.log('userInfo', this.userInfo);
  },
  methods: {
    handleGo() {
      history.forward();
    },
    handleBack() {
      history.back();
    },
    handleFresh() {
      history.go();
    },
    logout() {
      // 移除token
      removeToken();
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.my-header {
  display: flow-root;
}
</style>
