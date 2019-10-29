import axios from 'axios'
import local from '../utils/local'
import router from '../router'
// 配置基址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 配置请求头
// if (local.getUser()) {
//   axios.defaults.headers.Authorization = `Bearer ${local.getUser().token}`
// }
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 1. 获取token
  const user = local.getUser() || {}
  // 2. 头部设置token
  config.headers.Authorization = `Bearer ${user.token}`
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(res => res, err => {
  // 请求失败
  if (err.response.status === 401) {
    // 跳转登录页面  http://localhost:8080/#/login
    // window.location.href = 'http://localhost:8080/#/login'
    // window.location.hash = '#/login'
    // 建议使用 vue-router 来跳转 , push是router实例的函数
    return router.push('/login')
  }
  return Promise.reject(err)
})
export default axios
