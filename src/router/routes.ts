//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
import { RouteRecordRaw } from 'vue-router'
import ACCESS_ENUM from '@/access/ACCESS_ENUM'

export const constantRoute: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: '用户',
    component: () => import('@/layout/UserLayout.vue'),
    children: [
      {
        path: '/user/login',
        name: '用户登录',
        component: () => import('@/views/user/UserLoginView.vue'),
      },
      {
        path: '/user/register',
        name: '用户注册',
        component: () => import('@/views/user/UserRegisterView.vue'),
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/BasicLayout.vue'),
    name: 'layout',
    redirect: '/questions',
    children: [
      {
        path: '/questions',
        name: '浏览题目',
        component: () => import('@/views/question/QuestionsView.vue'),
      },
      {
        path: '/question_submit',
        name: '浏览题目提交',
        component: () => import('@/views/question/QuestionSubmitView.vue'),
        meta: {
          access: ACCESS_ENUM.USER,
        },
      },
      {
        path: '/view/question/:id',
        name: '在线做题',
        component: () => import('@/views/question/ViewQuestionView.vue'),
        props: true,
        meta: {
          access: ACCESS_ENUM.USER,
          hideInMenu: true,
        },
      },
      {
        path: '/add/question',
        name: '创建题目',
        component: () => import('@/views/question/AddQuestionView.vue'),
        meta: {
          access: ACCESS_ENUM.ADMIN,
        },
      },
      {
        path: '/update/question',
        name: '更新题目',
        component: () => import('@/views/question/AddQuestionView.vue'),
        meta: {
          access: ACCESS_ENUM.ADMIN,
          hideInMenu: true,
        },
      },
      {
        path: '/manage/question/',
        name: '管理题目',
        component: () => import('@/views/question/ManageQuestionView.vue'),
        meta: {
          access: ACCESS_ENUM.ADMIN,
        },
      },
    ],
  },
  {
    path: '/noAuth',
    name: '无权限',
    component: () => import('@/views/question/ManageQuestionView.vue'),
    meta: {
      hideInMenu: true,
    },
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
