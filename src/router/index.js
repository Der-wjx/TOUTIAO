import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
Vue.use(VueRouter)
const router = new VueRouter({
  // 路由配置对象
  routes: [
    // 登录
    {
      path: '/login',
      component: Login
    },
    // 后台首页
    {
      path: '/',
      component: Home
    }
  ]
})
export default router
