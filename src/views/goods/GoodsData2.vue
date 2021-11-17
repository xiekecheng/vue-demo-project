<template>
  <div>
    <el-table
      ref="tableList"
      :data="dataSource"
      height="846"
      border
      :header-cell-style="{ background: '#f5f7fa' }"
      :span-method="cellMerges"
    >
      <el-table-column label="二级指标" width="200" prop="twoLevel" show-overflow-tooltip align="center" />
      <el-table-column label="三级指标" width="240" prop="threeLevel" show-overflow-tooltip align="center" />
      <el-table-column label="评分项目" width="240" prop="evaluateProject" show-overflow-tooltip align="center" />
      <el-table-column label="评分标准" align="left">
        <template v-slot="scope">
          <div style="text-indent: 14px">{{ scope.row.evaluateStandard || '' }}</div>
        </template>
      </el-table-column>
      <el-table-column label="分值" width="90" prop="score" show-overflow-tooltip align="center" />
      <el-table-column label="土建" width="90" prop="structureScore" show-overflow-tooltip align="center">
        <template v-slot="scope">
          <span>{{ scope.row.structureScore || scope.row.structureScore === 0 ? scope.row.structureScore : '-' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="机电" width="90" show-overflow-tooltip align="center">
        <template v-slot="scope">
          <span>{{ scope.row.electroScore || scope.row.electroScore === 0 ? scope.row.electroScore : '-' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="均分" width="90" show-overflow-tooltip align="center">
        <template v-slot="scope">
          <span>{{ scope.row.averageScore || scope.row.averageScore === 0 ? scope.row.averageScore : '-' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150" show-overflow-tooltip align="center">
        <template v-slot="scope">
          <el-button type="text" size="small" @click.native.prevent="goGrade(scope.$index, dataSource)">
            评分
          </el-button>
          <el-button type="text" size="small" @click.native.prevent="goDeduction(scope.$index, dataSource)">
            扣分详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mergeRows } from '@/utils/utils';
// import Mock from 'mockjs';
export default {
  data() {
    return {
      dataSource: [
        {
          twoLevel: '能力指标 27',
          threeLevel: '制度建设与落实 15',
          evaluateProject: '1.1 责任划分',
          secondCode: '27',
          thirdCode: '15',
          itemCode: '1.1',
          standardCode: '1.1.1',
          evaluateStandard:
            '落实了全省隧道责任主体和监管主体，管理职责划分明确，得40分；落实了责任主体和监管主体，但管理职责划分不明确，得20分；落实了责任主体，但管理职责不明确，得10分；责任主体和监管主体不明晰，得0分',
          score: 40,
          structureScore: '40',
        },
        {
          twoLevel: '能力指标 27',
          threeLevel: '制度建设与落实 15',
          evaluateProject: '1.2 监管能力',
          evaluateStandard:
            '针对隧道养护管理工作有相关制度或指导性意见，较好，得40分；有相关制度或指导性意见，基本完善，得30分；有相关制度或指导性意见，但不完善，得10分；无相关制度或指导性意见，得0分',
          score: 40,
          secondCode: '27',
          thirdCode: '15',
          itemCode: '1.2',
          standardCode: '1.2.1',
          structureScore: '40',
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.$request.get('https://www.fastmock.site/mock/7f29378820c13ab23aa3ac4bbefb8909/api/api/user').then((res) => {
        console.log('res', res);
        this.dataSource = res.data.data;
        console.log('this.dataSource',this.dataSource)
      });
    }, 5000);
  },
  methods: {
    cellMerges({ rowIndex, columnIndex }) {
      const mergeCfg = [
        { searchKey: 'secondCode', columnIndex: 0 },
        { searchKey: 'thirdCode', columnIndex: 1 },
        { searchKey: 'itemCode', columnIndex: 2 },
      ];
      return mergeRows(rowIndex, columnIndex, this.dataSource, mergeCfg);
    },
  },
};
</script>

<style lang="scss" scoped></style>
