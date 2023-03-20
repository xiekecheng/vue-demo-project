/**
 * 合并行方法
 * @param {*} rowIndex 行索引
 * @param {*} columnIndex 列索引
 * @param {*} dataSource 数据源
 * @param {*} mergeCfg 合并配置 例如:[{searchKey: 'score', columnIndex: 0 }] searchKey：需检索的属性，columnIndex：代表要合并的列数
 */
export function mergeRows(...args) {
  const [rowIndex, columnIndex, dataSource, mergeCfg] = args;
  //  console.log('mergeCfg',mergeCfg);
  for (let item of mergeCfg) {
    let searchKey = item.searchKey;
    if (columnIndex === item.columnIndex) {
      // 要合并的列
      if (rowIndex !== 0 && dataSource[rowIndex][searchKey] === dataSource[rowIndex - 1][searchKey]) {
        // 非第一行合并规则（非第一行，并且上一行跟当前行值相等，如果不相等就走else）
        return [0, 0];
      } else {
        // 第一行合并规则
        let rowIndexCount = rowIndex;
        let count = 0;
        while (rowIndexCount + 1 < dataSource.length) {
          //  用当前行数据跟后续行数数据对比
          if (dataSource[rowIndexCount + 1][searchKey] === dataSource[rowIndexCount][searchKey]) {
            rowIndexCount++;
            count++;
          } else {
            // 数据不相等跳出循环
            break;
          }
        }
        return [count + 1, 1];
      }
    }
  }
}
