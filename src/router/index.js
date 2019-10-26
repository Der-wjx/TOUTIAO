import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/Login'
Vue.use(VueRouter)
const router = new VueRouter({
  // 路由配置对象
  routes: [
    // 登录
    {
      path: '/login',
      component: Login
    }
  ]
})
export default router
