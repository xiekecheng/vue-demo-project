<template>
  <div class="my-header">
    <div class="box left">
      <img class="img" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
      <h1 class="title">Vue Project</h1>
    </div>
    <div class="box right">
      <el-dropdown @command="handleCommand">
        <div class="avatar">
          <el-avatar size="small" :src="imgSrc"></el-avatar>
          {{ 'admin' }}
        </div>
        <template v-slot:dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="User" command="userCenter">个人中心</el-dropdown-item>
            <el-dropdown-item :icon="Setting" command="userSetting">个人设置</el-dropdown-item>
            <el-dropdown-item :icon="Plus" command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { Check, Plus, Setting, User } from '@element-plus/icons-vue';
import { removeToken } from '@/utils/auth';

export default {
  data() {
    return {
      imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      Plus,
      Check,
      Setting,
      User,
    };
  },
  name: 'MyHeader',
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

  .title {
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

    .avatar {
      display: flex;
      align-items: center;
      cursor: pointer;

      .account {
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
