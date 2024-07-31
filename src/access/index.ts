import router from '@/router'
import useUserStore from '@/store/modules/user'
import ACCESS_ENUM from '@/access/ACCESS_ENUM'
import checkAccess from '@/access/checkAccess'

// router.beforeEach(async (to, from, next) => {
//   const useStore = useUserStore()
//   let loginUser = useStore.loginUser
//
//   // 请求登录信息
//   if (!loginUser || !loginUser.useRole) {
//     await useStore.getLoginUser()
//     loginUser = useStore.loginUser
//   }
//
//   // 获取需要权限
//   const needAccess = to.meta?.access ?? ACCESS_ENUM.NOT_LOGIN
//   if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
//     // 未登录
//     if (loginUser.userName === '未登录') {
//       next(`/user/login?redirect=${to.fullPath}`)
//       return
//     }
//     // 登录但没权限
//     if (!checkAccess(loginUser, needAccess)) {
//       next('/noAuth')
//       return
//     }
//   }
//   next()
// })
