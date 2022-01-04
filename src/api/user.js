const request = require('@/utils/axios');

export const register = (data) =>
  request({
    url: '/register',
    method: 'POST',
    data,
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
