<template>
  <div class="my-login">
    <!-- <h1>登录</h1> -->
    <div class="form-wrap">
      <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item>
          <div class="title-container">
            <h3 class="title">系统登录</h3>
          </div>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" type="username" autocomplete="off">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off">
            <i slot="prefix" class="el-input__icon el-icon-edit-outline"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth';
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      console.log('rule, value, callback', rule, value, callback);
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      ruleForm: {
        username: '',
        password: '',
        // age: '',
      },
      rules: {
        username: [{ validator: validatePass, trigger: 'blur' }],
        password: [{ validator: validatePass2, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 登录成功
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            setToken('token123');
            this.$message.success('登录成功');
            this.$router.push('/');
          }, 2000);
        } else {
          // 登录失败
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.my-login {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/image.png);
  background-size: cover;
  background-position: center;
  // text-align: center;
  overflow: hidden;
}
.form-wrap {
  width: 40%;
  margin: 100px auto;
  // overflow: hidden;
}
.title-container {
  .title {
    text-align: center;
    color: #fff;
  }
}
.my-login {
  ::v-deep .el-form-item__content {
    text-align: center;
  }
}
</style>
