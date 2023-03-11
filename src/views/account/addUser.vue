<template>
  <div>
    <h1>添加用户</h1>
    <div style="width: 400px; margin: 0 auto">
      <el-form ref="formRegister" label-width="80px" :model="formRegister" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formRegister.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formRegister.password" show-password />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formRegister.email" />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formRegister.phone" />
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="formRegister.role" placeholder="请选择">
            <el-option v-for="item in roleOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio v-model="formRegister.gender" label="男">男</el-radio>
          <el-radio v-model="formRegister.gender" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <el-upload
            ref="upload"
            class="avatar-uploader"
            action="http://localhost:8080/api/uploadAvatar"
            :show-file-list="false"
            :on-change="handleAvatarChange"
            :auto-upload="false"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-progress :percentage="percentage" :format="format"></el-progress>
          <el-button type="primary" @click="submitForm('formRegister')">提交</el-button>
          <el-button @click="resetForm('formRegister')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      imageUrl: '',
      fileInfo: {},
      formRegister: {
        username: '',
        password: '',
        email: '',
        phone: '',
        role: '',
        gender: '',
        avatar: '',
        filePath: '',
      },
      filePath: '',
      percentage: 0, // 进度条
      forms: '',
      roleOptions: [
        { label: '管理员', value: 'admin' },
        { label: '编辑者', value: 'editor' },
      ],
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    ...mapActions('user', ['register', 'uploadAvatar']),
    // 提交表单,添加用户
    async submitForm(formName) {
      // 表单校验
      this.$refs[formName].validate(async (valid, obj) => {
        if (valid) {
          const formData = new FormData();
          formData.append('userInfo', JSON.stringify(this.formRegister));
          formData.append('file', this.fileInfo);
          // 调用注册接口
          const result = await this.register({
            data: formData,
            fn: (progressEvent) => {
              let complete = ((progressEvent.loaded / progressEvent.total) * 100) | 0;
              this.percentage = complete;
            },
          });
          this.$message({
            message: result.message,
            type: result.status === 'SUCCESS' ? 'success' : 'error',
          });
        }
      });
    },
    // 添加文件
    handleAvatarChange(file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.fileInfo = file.raw;
    },
    // 进度条提示
    format(percentage) {
      return percentage === 100 ? '上传成功' : `${percentage}%`;
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
