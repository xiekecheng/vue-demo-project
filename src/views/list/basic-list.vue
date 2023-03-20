<template>
  <div>
    <h1>标准列表</h1>
    <el-table :data="tableData">
      <el-table-column
        v-for="item in newTableColumn"
        :key="item.label"
        :prop="item.column"
        :label="item.label"
      >
        <el-table-column
          v-for="childColumn in item.childColumns"
          :key="childColumn.column"
          :prop="childColumn.column"
          :label="childColumn.label"
        >
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
      ],
      tableColumn: [
        {
          column: 'date',
          label: '日期',
        },
        {
          column: 'name',
          label: '姓名',
          group: 'aaa',
        },
        {
          column: 'province',
          label: '省份',
          group: '',
        },
        {
          column: 'city',
          label: '市区',
          group: 'aaa',
        },
        {
          column: 'address',
          label: '地址',
          group: '地址',
        },
        {
          column: 'zip',
          label: '邮编',
          group: '地址',
        },
      ],
    }
  },
  created() {
    this.getColumns()
  },
  methods: {
    getColumns() {
      const newColumn = []
      this.tableColumn.forEach((e, idx, arr) => {
        // 没有分组,直接添加
        if (!e.group) {
          newColumn.push({
            column: e.column,
            label: e.label,
          })
          return
        }
        // 如果有分组,判断是否已生成最初分组
        const index = newColumn.findIndex(
          (item) => item.label === e.group && item.childColumns
        )

        // 添加过分组,则push进去
        if (index !== -1) {
          newColumn[index].childColumns.push({
            column: e.column,
            label: e.label,
          })
          return
        }
        // 未添加过,则创建分组column并添加进去
        const column = {
          label: e.group,
          childColumns: [
            {
              column: e.column,
              label: e.label,
            },
          ],
        }
        newColumn.push(column)
      })
      this.newTableColumn = newColumn
    },
  },
}
</script>
