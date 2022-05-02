const request = require('@/utils/axios');

export const register = ({data,fn:onUploadProgressFn}) =>
  request({
    url: '/register',
    method: 'POST',
    data,
    onUploadProgress:onUploadProgressFn
  });

export const uploadAvatar = (data) =>
  request({
    url: '/uploadAvatar',
    method: 'POST',
    data,
  });

export default {
  register,
};
