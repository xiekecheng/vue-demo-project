/*
 * @Author: github.com/xiekecheng
 * @Date: 2021-12-18 16:54:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-18 22:53:14
 * @FilePath: /vue-demo-project/src/utils/auth.js
 * @Description: 认证模块
 * 
 */
import Cookies from 'js-cookie';
const TokenKey = 'Authorization';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken(){
	return Cookies.remove(TokenKey)
}