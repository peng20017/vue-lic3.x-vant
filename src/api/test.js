/**
  * test模块接口列表
  */

import axios from '@/tools/http' // 导入http中创建的axios实例

const test = {
  jssdk () {
    return axios.get('/wx/bczc/get_token11.php')
  }
}

export default test
