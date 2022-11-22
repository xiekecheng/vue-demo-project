<template>
  <div>
    <h1>高级详情页</h1>
    <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules" class="demo-dynamic">
      <el-row :gutter="48">
        <el-col :span="8">
          <el-form-item prop="productCode" label="产品编码">
            <el-input v-model="formData.productCode" readonly>
              <el-button slot="append" icon="el-icon-search" @click="productVisible = true" />
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="productName" label="产品名称">
            <el-input v-model="formData.productName" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="labelType" label="标签类别">
            <el-select v-model="formData.labelType" placeholder="请选择" style="width: 100%">
              <el-option v-for="item in labelTypeList" :key="item.id" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="48">
        <el-col :span="8">
          <el-form-item prop="labelCode" label="标签编码">
            <el-input v-model="formData.labelCode" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="sizeName" label="标签尺寸">
            <el-input v-model="formData.sizeName" :disabled="true" readonly />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="printEffect" label="打印效果">
            <el-select v-model="formData.printEffect" placeholder="请选择" style="width: 100%">
              <el-option v-for="item in printEffectList" :key="item.id" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 动态文本框 -->
      <div v-if="type === 1">
        <el-row v-for="(item, index) in formData.dynamicTexts" :key="index" :gutter="12">
          <el-col :span="6">
            <!--    板名名称 -->
            <el-form-item
              :label="`板名名称${index + 1}`"
              :prop="`dynamicTexts.${index}.text`"
              :rules="{ required: true, message: '板名名称不能为空', trigger: 'blur' }"
            >
              <el-input v-model="item.text" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <!--    字体大小        -->
            <el-form-item :label="`字体大小`" :prop="`dynamicTexts.${index}.fontSize`">
              <el-select v-model="item.fontSize" placeholder="请选择" style="width: 100%">
                <el-option v-for="item in fontSizeOptions" :key="item.value" :label="item.value" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button
              v-if="formData.dynamicTexts.length === 1"
              type="primary"
              icon="el-icon-circle-plus-outline"
              @click="addText"
              >添加
            </el-button>
            <el-button v-else type="danger" icon="el-icon-delete" @click.prevent="removeDomain(index)">删除 </el-button>
          </el-col>
        </el-row>
      </div>
      <!-- 动态文本框 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button @click="addFrom1">动态表单1</el-button>
        <el-button @click="addFrom2">动态表单2</el-button>
      </el-form-item>
    </el-form>
    <!-- 产品编码弹窗 -->
    <el-dialog title="请选择产品编码" :visible.sync="productVisible">
      <el-table :data="gridData" highlight-current-row @current-change="handleCurrentChange">
        <el-table-column property="name" label="产品编码" width="200"></el-table-column>
        <el-table-column property="address" label="产品名称"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="fillProductCode">确定</el-button>
        <el-button @click="productVisible = false">取消</el-button>
      </span>
    </el-dialog>
    <!-- 预览窗口 -->
    <el-dialog title="预览" :visible.sync="previewVisible">
      <h1>预览</h1>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="fillProductCode">确定</el-button>
        <el-button @click="productVisible = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewVisible:false,
      currentRow: {},
      labelTypeList: [
        {
          label: '板名标签',
          value: 1,
        },
        {
          label: '硬盘标签',
          value: 2,
        },
      ],
      gridData: [
        {
          name: '123',
          address: '上海市普陀区金沙江路 321 弄',
        },
        {
          name: '456',
          address: '上海市普陀区金沙江路 53324 弄',
        },
        {
          name: '789',
          address: '上海市普陀区金沙江路 4323 弄',
        },
        {
          name: '3214214',
          address: '上海市普陀区金沙江路 76876 弄',
        },
      ],
      formRules: {
        productCode: [{ required: true, message: '请选择', trigger: 'change' }],
        labelType: [{ required: true, message: '请选择', trigger: 'change' }],
        printEffect: [{ required: true, message: '请选择', trigger: 'change' }],
      },
      formLabelWidth: '120px',
      productVisible: false,
      type: 1,
      formData: {
        productCode: '', // 产品编码
        productName: '', // 产品名称
        labelType: '', // 产品类别
        labelCode: '', // 产品编码
        domains: [],
        dynamicTexts: [
          {
            text: '',
            fontSize: '',
          },
          {
            text: '',
            fontSize: '',
          },
        ],
        printEffect: '', // 打印效果
      },
      fontSizeOptions: [
        {
          label: '1.1',
          value: 6,
        },
        {
          label: '1.2',
          value: 10,
        },
        {
          label: '1.3',
          value: 14,
        },
        {
          label: '1.4',
          value: 18,
        },
        {
          label: '1.5',
          value: 22,
        },
      ],
      printEffectList: [
        {
          id: 1,
          label: '打印效果1',
          value: 1,
        },
        {
          id: 2,
          label: '打印效果2',
          value: 2,
        },
        {
          id: 3,
          label: '打印效果3',
          value: 3,
        },
      ],
    };
  },
  mounted() {
    console.log('mounted');
    this.initFormData();
  },
  methods: {
    // 初始化表单数据
    initFormData() {
      this.formData.productCode = '11111';
      this.formData.labelType = 2;
      this.formData.productName = '上海市普陀区金沙江路 321 弄';
      this.formData.dynamicTexts = [
        {
          text: 'ABC',
          fontSize: 12,
        },
        // {
        //   text: 'RTY',
        //   fontSize: 16,
        // },
      ];
    },
    // 填充产品编码
    fillProductCode() {
      const { name, address } = this.currentRow;
      this.formData.productCode = name;
      this.formData.productName = address;
      // 关闭弹窗
      this.productVisible = false;
    },
    // 当前选中
    handleCurrentChange(row) {
      this.currentRow = row;
    },
    // 提交表单
    submitForm() {
      const dynamicParam = {};
      this.formData.domains.forEach((item) => {
        dynamicParam[item.key] = item.value;
      });
      const { productCode, productName, printEffect, labelType } = this.formData;
      // 获取style1 的值
      const style1 = this.formData.dynamicTexts;
      // 构建attribute1数据 以空格分割
      const attribute1 = style1.map((item) => item.text).join(' ');

      const params = {
        productCode,
        productName,
        labelType,
        printEffect,
        attribute1,
        style1,
        ...dynamicParam,
      };
      this.$refs.formRef.validate((valid) => {
        if (!valid) {
          // alert('submit!');
          return
        }
        console.log('params', params);
        this.$router.push({ query: { plan: productCode } });
        this.previewVisible = true
      });
    },
    // 重置表单
    resetForm() {
      this.$refs.formRef.resetFields();
    },
    // 删除标签域
    removeDomain(index) {
      this.formData.dynamicTexts.splice(index, 1);
    },
    addText() {
      this.formData.dynamicTexts.push({
        text: '',
        fontSize: '',
      });
    },
    addFrom1() {
      this.type = 1;
      if (this.type === 1) {
        this.formData.dynamicTexts = [
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

      this.formData.domains = [
        {
          key: 'attribute1',
          value: '板名名称',
        },
      ];
    },
    addFrom2() {
      this.type = 2;
      this.formData.domains = [
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

<style lang="scss" scoped>
::v-deep .el-dialog__footer {
  // margin: 0 auto;
  text-align: center;
}
</style>
