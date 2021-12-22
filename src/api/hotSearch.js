const request = require('@/utils/axios');

// 分页查询热搜列表
export const getSearchList = (data) =>
  request({
    url: '/getListByPage',
    method: 'post',
    data,
  });

export default {
  getSearchList,
};
