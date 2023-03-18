/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-01-25 00:06:47
 * @LastEditors: github.com/xiekecheng
 * @LastEditTime: 2022-05-02 23:58:04
 * @FilePath: /vue-demo-project/src/api/tree.js
 * @Description: 
 * 
 */
import request from '@/utils/axios';
/**
 * @description: 
 * @param {*} param 入参
 * @return {*}
 */
export const getTreeData = (params)=>
	request({
		url: '/getParentTreeNode',
    method: 'GET',
    params,
	})


export default {
	getTreeData
}