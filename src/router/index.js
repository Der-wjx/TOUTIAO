import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
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
      component: Home,
      children: [
        {
          path: '/',
          component: Welcome
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    }
  ]
})
export default router
