<template>
  <div>
    <h1>高级详情页</h1>
    <el-form ref="dynamicValidateForm" :model="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          // { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          // { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
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
      <!-- 动态文本框 -->
      <div v-if="type===1">
        <el-button v-if="dynamicValidateForm.dynamicTexts.length===1" @click="addText">新增</el-button>
        <el-form-item
          v-for="(item, index) in dynamicValidateForm.dynamicTexts"
          :key="index"
          :label="`板名标签${index+1}`"
          :prop="`dynamicTexts.${index}.text`"
          :rules="{
            required: true,
            message: '域名不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="item.text"></el-input>
          <el-select v-model="item.fontSize" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value"> </el-option>
          </el-select>
          <el-button v-if="dynamicValidateForm.dynamicTexts.length>1"  @click.prevent="removeDomain(index)">删除</el-button>
        </el-form-item>
      </div>
      <!-- 动态文本框 -->
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
      type:1,
      dynamicValidateForm: {
        domains: [],
        dynamicTexts: [],
        email: '',
      },
      dynamicCol: [],
      options: [
        {
          value: '1.1',
          // label: '黄金糕',
        },
        {
          value: '1.2',
          // label: '双皮奶',
        },
        {
          value: '1.3',
          // label: '蚵仔煎',
        },
        {
          value: '1.4',
          // label: '龙须面',
        },
        {
          value: '1.5',
          // label: '北京烤鸭',
        },
      ],
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
    // removeDomain(item) {
    //   let index = this.dynamicValidateForm.domains.indexOf(item);
    //   if (index !== -1) {
    //     this.dynamicValidateForm.domains.splice(index, 1);
    //   }
    // },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now(),
      });
    },
    // 删除标签域
    removeDomain(index){
      this.dynamicValidateForm.dynamicTexts.splice(index,1)
    },
    addText(){
      this.dynamicValidateForm.dynamicTexts.push({
        value: '',
      })
    },
    addFrom1() {
      this.type = 1;
      if (this.type === 1) {
        this.dynamicValidateForm.dynamicTexts = [
          {
            // label: '板名名称1',
            value: '',
          },
          {
            // label: '板名名称2',
            value: '',
          },
        ];
      }

      this.dynamicValidateForm.domains = [
        {
          key: 'attribute1',
          value: '板名名称',
        },
      ];
    },
    addFrom2() {
      this.type = 2;
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
