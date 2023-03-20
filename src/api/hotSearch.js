import request from '@/utils/axios'

// 分页查询热搜列表
export const getSearchList = (data) =>
  request({
    url: '/getListByPage',
    method: 'post',
    data,
  })

// 分页多条件筛选查询热搜列表
export const getListFilterByPage = (data) =>
  request({
    url: '/getListFilterByPage',
    method: 'post',
    data,
  })
export default {
  getSearchList,
  getListFilterByPage,
}
