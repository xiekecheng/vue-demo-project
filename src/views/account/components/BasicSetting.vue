<template>
  <div>
    <h1>基本设置</h1>
    <el-avatar :src="circleUrl"></el-avatar>
    <el-form ref="ruleForm" label-position="top" label-width="80px" :model="formLabelAlign" :rules="rules">
      <el-form-item label="邮箱" prop="Email">
        <el-input v-model="formLabelAlign.Email" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="name">
        <el-input v-model="formLabelAlign.name" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="个人简介" prop="profile">
        <el-input v-model="formLabelAlign.profile" type="textarea" :rows="3" placeholder="个人简介"></el-input>
      </el-form-item>
      <el-form-item label="国家/地区" prop="Country">
        <el-select v-model="formLabelAlign.Country" placeholder="请选择">
          <el-option label="中国" value="China"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在省市" >
        <el-col :span="11">
          <el-form-item prop="province">
            <el-select v-model="formLabelAlign.province" clearable placeholder="请选择">
              <el-option v-for="item in provinceData" :key="item.id" :label="item.name" :value="item.id"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="city">
            <el-select
              v-model="formLabelAlign.city"
              clearable
              placeholder="请选择"
              :disabled="!formLabelAlign.province"
            >
              <el-option v-for="item in cityData" :key="item.id" :label="item.name" :value="item.id"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="街道地址" prop="address">
        <el-input v-model="formLabelAlign.address"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['large', 'medium', 'small'],
      formLabelAlign: {
        Email: '',
        name: '',
        region: '',
        profile: '',
        Country: 'China',
        address: '西湖区工专路 77 号',
        province: '',
        city: '',
      },
      provinceData: [], // 省数据
      cityData: [], // 地级市 数据
      rules: {
        Email: [{ required: true, message: '请输入您的邮箱!', trigger: 'change' }],
        name: [{ required: true, message: '请输入您的昵称!', trigger: 'change' }],
        province: [{ required: true, message: '请输入您的所在省!', trigger: 'change' }],
        city: [{ required: true, message: '请输入您的所在城市!', trigger: 'change' }],
        Country: [{ required: true, message: '请输入您的国家或地区!', trigger: 'blur' }],
        date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
        profile: [{ required: true, message: '请输入您的个人简介!', trigger: 'change' }],
        resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
        address: [{ required: true, message: '请输入您的街道地址!', trigger: 'change' }],
      },
    };
  },
  watch: {
    'formLabelAlign.province'(val) {
      console.log('val', val);
      if (val) {
        axios({
          url: `https://proapi.azurewebsites.net//api/geographic/city/${val}`,
          method: 'GET',
        }).then((res) => {
          this.cityData = res.data.data;
        });
      }
      this.formLabelAlign.city = '';
    },
  },
  created() {
    axios({
      url: 'https://proapi.azurewebsites.net//api/geographic/province',
      method: 'GET',
    }).then((res) => {
      console.log('res', res);
      this.provinceData = res.data.data;
    });
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
