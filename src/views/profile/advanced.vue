<template>
  <div>
    <h1>高级详情页</h1>
    <el-form ref="dynamicValidateForm" :model="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(item, index) in dynamicValidateForm.domains"
        :key="index"
        :label="item.value"
        :prop="`domains.${index}.text`"
        :rules="{
          required: true,
          message: '域名不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="item.text"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        <el-button @click="addFrom1">动态表单1</el-button>
        <el-button @click="addFrom2">动态表单2</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [],
        email: '',
      },
      dynamicCol: [],
    };
  },
  methods: {
    submitForm(formName) {
      console.log('this.dynamicValidateForm', this.dynamicValidateForm);
      const dynamicParam = {};
      this.dynamicValidateForm.domains.forEach((item) => {
        dynamicParam[item.key] = item.value;
      });
      const params = {
        email: this.dynamicValidateForm.email,
        ...dynamicParam,
      };
      console.log('params', params);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now(),
      });
    },
    addFrom1() {
      this.dynamicValidateForm.domains = [
        {
          key: 'attribute1',
          value: '板名名称',
        },
      ];
    },
    addFrom2() {
      this.dynamicValidateForm.domains = [
        {
          key: 'attribute1',
          value: '硬盘111',
        },
        {
          key: 'attribute2',
          value: '硬盘222',
        },
        {
          key: 'attribute3',
          value: '硬盘333',
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
