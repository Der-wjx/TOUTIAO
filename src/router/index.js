import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Article from '@/views/article'
import local from '@/utils/local'
Vue.use(VueRouter)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
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
      children: [{
        path: '/',
        component: Welcome
      },
      {
        path: '/article',
        component: Article
      }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
router.beforeEach((to, from, next) => {
  const user = local.getUser()
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
export default router
