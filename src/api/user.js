import request from '@/utils/axios'
// 注册用户
export const register = (data) =>
  request({
    url: '/register',
    method: 'POST',
    data,
  })

export const uploadAvatar = (data) =>
  request({
    url: '/uploadAvatar',
    method: 'POST',
    data,
  })

// 登录
export const login = (data) => {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}
