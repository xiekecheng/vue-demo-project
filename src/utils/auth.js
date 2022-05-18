/*
 * @Author: github.com/xiekecheng
 * @Date: 2021-12-18 16:54:40
 * @LastEditors: github.com/xiekecheng
 * @LastEditTime: 2022-05-02 23:56:53
 * @FilePath: /vue-demo-project/src/utils/auth.js
 * @Description: 
 * 
 */
import Cookies from 'js-cookie';
const TokenKey = 'admin-token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken(){
	return Cookies.remove(TokenKey)
}