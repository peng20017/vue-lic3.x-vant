/**
  * test模块接口列表
  */

import axios from '@/tools/http' // 导入http中创建的axios实例

const test = {
  jssdk (url) {
    return axios.get(`/wx/xx/jssdk.php?url=${location.href.split('#')[0]}`)
  }
}

export default test
