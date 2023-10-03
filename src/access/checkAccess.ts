import ACCESS_ENUM from '@/access/ACCESS_ENUM'

/**
 * 检查权限 判断当前用户是否有该权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要拥有的权限
 * @return boolean 有无权限
 */
const checkAccess = (loginUser: any, needAccess: any) => {
  // 当前用户的权限
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN

  // 需要权限为未登录
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) return true

  // 需要权限为用户
  if (needAccess === ACCESS_ENUM.USER) {
    // 如果用户没登陆
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) return false
  }

  // 需要权限为管理员
  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) return false
  }
  return true
}

export default checkAccess
