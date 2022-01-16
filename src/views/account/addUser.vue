<template>
  <div>
    <h1>添加用户</h1>
    <div style="width: 400px">
      <!-- :rules="rules"  -->
      <el-form ref="formRegister" label-width="80px" :model="formRegister">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formRegister.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formRegister.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formRegister.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formRegister.phone"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="formRegister.role" placeholder="请选择">
            <el-option v-for="item in roleOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
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
            action="http://localhost:7001/api/uploadAvatar"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :auto-upload="false"
            :http-request="uploadSectionFile"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-progress :percentage="percentage"></el-progress>
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
      percentage:1,
      forms: '',
      roleOptions: [
        { label: '管理员', value: 'admin' },
        { label: '编辑者', value: 'editor' },
      ],
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        role: [{ required: true, message: '请选择角色', trigger: 'change' }],
        gender: [{ required: true, message: '请选择性别', trigger: 'blur' }],
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
          console.log('registerForm', this.formRegister);
          // this.forms = new FormData()
          // this.forms.append('file',)
          // 上传图片 获取上传之后存储的地址
          this.$refs['upload'].submit();
          this.formRegister.avatar = this.filePath;
          // 调用注册接口
          const result = await this.register(this.formRegister);
          if (result.status === 'SUCCESS') {
            this.$message({
              message: result.message,
              type: 'success',
            });
          } else {
            this.$message({
              message: result.message,
              type: 'error',
            });
          }
        }
      });
    },
    // 自定义文件上传
    uploadSectionFile(params) {
      this.forms = new FormData();
      this.forms.append('file', params.file);
      // this.uploadAvatar(this.forms).then((res) => {
      //   console.log('res', res.data.filePath);
      //   this.filePath = res.data.filePath;
      // });

      // let self = this;
      this.$request.post('/uploadAvatar', this.forms, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: [
            function (data) {
              return data;
            },
          ],
          onUploadProgress: (progressEvent) => {
            console.log('progressEvent',progressEvent);
            let complete = (((progressEvent.loaded / progressEvent.total) * 100) | 0) ;
            console.log('complete=>',complete)
            // self.uploadMessage = '上传 ' + complete;
            this.percentage = complete
            console.log('上传=>',complete);
          },
        })
        .then((response) => {
          if (response.status === 200) {
            self.uploadMessage = '上传成功!';
          }
        });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 上传成功钩子
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw);
      console.log('上传成功');
    },

    // 上传前做判断
    beforeAvatarUpload(file) {
      // console.log('file', file);
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
      return true;
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
