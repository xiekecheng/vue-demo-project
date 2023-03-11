<template>
  <div class="my-header">
    <div class="box left">
      <img class="img" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
      <h1 class='title'>Vue Project</h1>
    </div>
    <div class="box right">
      <el-dropdown @command="handleCommand">
        <div class='avatar'>
          <el-avatar size="small" :src="imgSrc"></el-avatar>
          {{ userInfo.username }}
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user" command="userCenter">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting" command="userSetting">个人设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check" command="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth';
import { mapState } from 'vuex';
export default {
  name: 'MyHeader',
  data(){
    return {
      imgSrc:'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    }
  },
  computed: {
    ...mapState('user', ['userInfo']),
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
      if (command === 'logout') {
        removeToken();
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.my-header {
  height: 100%;
  display: flex;
  justify-content: space-between;

  .title{
    font-size: 18px;
    color: white;
  }
  .box {
    display: flex;
    align-items: center;
    line-height: 48px;

    .img {
      margin-right: 8px;
      height: 28px;
    }

    .avatar{
      display: flex;
      align-items: center;
      cursor: pointer;

      .account{
        margin-left: 8px;
      }
    }
  }
  .left {
    cursor: pointer;
    .img {
      height: 28px;
    }
  }
  .right {
    text-align: right;
  }
}
</style>
