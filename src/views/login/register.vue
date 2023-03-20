<template>
  <div>
    <div class="form-wrap">
      <el-form
        ref="form"
        :model="form"
        status-icon
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model.lazy="form.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model.lazy="form.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="validPassword">
          <el-input
            v-model.lazy="form.validPassword"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">立即注册</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { register } from '@/api/user'

export default {
  data() {
    // 校验密码是否输入一致
    const validatePass2 = (rule, value, callback) => {
      if (value !== this.form.password) {
        return callback(new Error('两次输入的密码不一致!'))
      }

      callback()
    }
    return {
      form: {
        username: '',
        password: '',
        validPassword: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        validPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 注册
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          //   调用接口注册
          const { username, password } = this.form
          const data = {
            username,
            password,
          }
          register(data)
            .then((res) => {
              if (res.result !== 'SUCCESS') {
                return
              }
              //   注册成功,跳转到登录页
              this.$router.push('/login')
            })
            .catch((err) => {
              console.log('err', err)
            })
        }
      })
    },
    // 重置表单
    resetForm() {
      this.$refs.form.resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
.form-wrap {
  width: 50%;
  margin: 200px auto;
}
</style>
