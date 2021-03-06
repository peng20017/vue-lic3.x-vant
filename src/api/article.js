/**
  * article模块接口列表
  */

import base from './base' // 导入接口域名列表
import axios from '@/tools/http' // 导入http中创建的axios实例

const article = {
  // 新闻列表
  articleList () {
    return axios.get(`${base.sq}/topics`)
  },
  // 新闻详情,演示
  articleDetail (id, params) {
    return axios.get(`${base.sq}/topic/${id}`, {
      params: params
    })
  },
  // post提交
  login (params) {
    return axios.post(`${base.sq}/accesstoken`, params) // meibi question
  }
  // 其他接口…………
}

export default article
