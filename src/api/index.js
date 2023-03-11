const request = require('@/utils/axios');

export function getAddressList(data) {
  return request({
    url: 'findAddressList',
    method: 'post',
    data,
  });
}
