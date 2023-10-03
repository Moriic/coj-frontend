//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
import { RouteRecordRaw } from 'vue-router'
import ACCESS_ENUM from '@/access/ACCESS_ENUM'

export const constantRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '浏览题目',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/hide',
    name: '隐藏页面',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: '/noAuth',
    name: '无权限',
    component: () => import('@/views/NoAuthView.vue'),
  },
  {
    path: '/admin',
    name: '管理员可见',
    component: () => import('@/views/AdminView.vue'),
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: '/about',
    name: '关于我的',
    component: () => import('@/views/AboutView.vue'),
  },
]

//异步路由
export const asnycRoute = []

//任意路由
export const anyRoute = {
  //任意路由
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
    icon: 'DataLine',
  },
}
