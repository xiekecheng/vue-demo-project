const request = require('@/utils/axios');
export const getGoodsList = (params) =>
  request({
    url: '',
    method: '',
    params,
  });

export const fetTopics = (params) =>
  request({
    url: '/api/v1/topics',
    method: 'get',
    params,
  });
export function fetchMusicList(params) {
  return request({
    url: '/soso/fcgi-bin/client_search_cp',
    method: 'get',
    params,
  });
}

export function login(data){
  return request({
    url:'/login',
    method:'post',
    data
  })
}
export function getAddressList(data){
  return request({
    url:'findAddressList',
    method:'post',
    data
  })
}
