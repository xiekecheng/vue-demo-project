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
            <template v-slot:prefix>
              <el-icon class="el-input__icon">
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off">
            <template v-slot:prefix>
              <el-icon class="el-input__icon">
                <Edit />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
          <span>新用户?去 <a @click="register">注册</a></span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { User, Edit } from '@element-plus/icons-vue';
import { setToken } from '@/utils/auth';
import { login } from '@/api/user';

export default {
  components: {
    User,
    Edit,
  },
  data() {
    let validatePass = (rule, value, callback) => {
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
      },
      rules: {
        username: [{ validator: validatePass, trigger: 'blur' }],
        password: [{ validator: validatePass2, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      setToken('token123');
      this.$message.success('登录成功');
      this.loading = false;
      this.$router.push('/');
      return;

      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.login(this.ruleForm)
          //   .then((res) => {
          //     if (res.status === 'SUCCESS') {
          //       setToken('token123');
          //       this.$message.success('登录成功');
          //       this.loading = false;
          //       this.$router.push('/');
          //     } else {
          //       this.$message.warning('登录失败,请确认用户名或密码是否正确');
          //       return false;
          //     }
          //   })
          //   .catch((e) => {
          //     this.loading = false;
          //   });
          const { username, password } = this.ruleForm;
          const params = {
            username,
            password,
          };
          console.log('login', login);
          login(params).then((res) => {
            const { result, data: token } = res;
            if (result !== 'SUCCESS') {
              this.$message.warning('登录失败,请确认用户名或密码是否正确');
              return;
            }
            console.log('res', res);
            setToken(token);
            this.$message.success('登录成功');
            this.$router.push('/');
          });
        }
        // else {
        //   // 登录失败
        //   this.$message.warning('表单校验不通过');
        //   return false;
        // }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 跳转到注册页面
    register() {
      this.$router.push('/login/register');
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
  overflow: hidden;
}

.form-wrap {
  width: 40%;
  margin: 100px auto;
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
