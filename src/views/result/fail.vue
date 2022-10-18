<template>
  <div>
    <div v-html="html"></div>
    <button @click="exportFile">Export XLSX</button>
  </div>
</template>

<script>
import { read, utils, writeFileXLSX } from 'xlsx';
export default {
  data() {
    return {
      html: {},
      tableau: '',
      isRight: false,
      name: '王小虎4',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎1',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎2',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎4',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
        },
        {
          date: '2016-05-03',
          name: '王小虎4',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
        },
      ],
    };
  },
  async mounted() {
    // eslint-disable-next-line no-debugger
    debugger;
    /* Download from https://sheetjs.com/pres.numbers */
    const f = await fetch('https://sheetjs.com/pres.numbers');
    const ab = await f.arrayBuffer();
    // eslint-disable-next-line no-debugger
    // debugger;
    /* parse workbook */
    const wb = read(ab);

    /* update data */
    const csv = utils.sheet_to_csv(wb.Sheets[wb.SheetNames[0]]);
    console.log('csv', csv);
    this.html = this.csv2table(csv);
    console.log('this.csv2table(csv)', this.csv2table(csv));
    // console.log('utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]])', utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]]));
  },
  methods: {
    exportFile() {
      const wb = utils.table_to_book(this.tableau.value.getElementsByTagName('TABLE')[0]);
      writeFileXLSX(wb, 'SheetJSVueHTML.xlsx');
    },
    csv2table(csv) {
      let html = '<table contenteditable>';
      let rows = csv.split('\n');
      rows.pop(); // 最后一行没用的
      rows.forEach(function (row, idx) {
        let columns = row.split(',');
        columns.unshift(idx + 1); // 添加行索引
        if (idx === 0) {
          // 添加列索引
          html += '<tr>';
          for (let i = 0; i < columns.length; i++) {
            html += '<th>' + (i === 0 ? '' : String.fromCharCode(65 + i - 1)) + '</th>';
          }
          html += '</tr>';
        }
        html += '<tr>';
        columns.forEach(function (column) {
          html += '<td>' + column + '</td>';
        });
        html += '</tr>';
      });
      html += '</table>';
      return html;
    },
    handleClick(row) {
      console.log(row);
    },
    // 批量删除
    batchDelete() {
      // 获取当前选中的数据
      // 调用后端删除接口
    },
    singleDelete(row) {
      // 直接调用接口删除
    },

    selectable(row, index) {
      const isRight = this.getRight(row.name);
      return isRight;
    },
    // 权限校验 判断是否是创建人/测试经理
    getRight(creator) {
      if (creator === this.name || this.isRight) {
        return true;
      }
    },

    selectionChange(selection) {
      console.log('selection', selection);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-icon-delete {
  cursor: pointer;
}
td {
  border: solid 1px #6d6d6d;
  padding: 5px 10px;
}
</style>
<style>
td,
th {
  border: solid 1px #6d6d6d;
  padding: 5px 10px;
}
table {
  border-collapse: collapse;
}
th,
td {
  border: solid 1px #6d6d6d;
  padding: 5px 10px;
}
.mt-sm {
  margin-top: 8px;
}
body {
  /* background: #f4f4f4;
  padding: 0;
  margin: 0; */
}
/* .container {
  width: 1024px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  min-height: 100vh;
} */
</style>
