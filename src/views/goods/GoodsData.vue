<template>
  <div>
    <el-table :data="permissionData" border :span-method="cellMerge">
      <el-table-column prop="deviceId" label="企业名称" align="center" />
      <el-table-column prop="taxerName" label="税号" align="center" />
      <el-table-column prop="taxerId" label="盘编号" align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      permissionData: [
        // 接口数据
        {
          deviceId: '首页',
          taxerName: 111,
          taxerId: '',
        },
        {
          deviceId: '管理功能',
          taxerName: 111,
          taxerId: '预开审核管理',
        },
        {
          deviceId: '管理功能',
          taxerName: 111,
          taxerId: '已开发票查询',
        },
        {
          deviceId: '管理功能',
          taxerName: '发票查询',
          taxerId: '未上传发票查询',
        },
        {
          deviceId: '管理功能',
          taxerName: '发票查询',
          taxerId: '验签失败发票查询',
        },
        {
          deviceId: '管理功能',
          taxerName: '商户综合管理',
          taxerId: '税控设备列表',
        },
        {
          deviceId: '管理功能',
          taxerName: '商户综合管理',
          taxerId: '数据抄报',
        },
      ],
      spanArr: [], // deviceId的合并数
      spanArr2: [], // taxerName的合并数
    };
  },
  created() {
    this.getSpanArr(this.permissionData, this.spanArr, 'deviceId');
    this.getSpanArr(this.permissionData, this.spanArr2, 'taxerName');
  },
  methods: {
    /**
     * 记录行合并数方法
     * @param {array} data - 后台拿到的数据
     * @param {array} arr - 存放每一行记录的合并数
     * @param {string} property - 过滤属性是否重复，参数为要过滤的属性
     */
    getSpanArr(data, arr, property) {
      let pos = 0;
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          arr.push(1);
          pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i][property] === data[i - 1][property]) {
            arr[pos] += 1;
            arr.push(0);
          } else {
            arr.push(1);
            pos = i;
          }
        }
      }
    },
    // 合并行或列方法
    cellMerge({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      } else if (columnIndex === 1) {
        const _row = this.spanArr2[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
