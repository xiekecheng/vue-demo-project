<template>
  <div>
    <button @click="handleGo">前进</button>
    <button @click="handleBack">后退</button>
    <button @click="handleFresh">刷新</button>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
import {removeToken} from '@/utils/auth';
export default {
  name: 'MyHeader',
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
    logout(){
      // 移除token
      removeToken()
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="scss" scoped></style>
