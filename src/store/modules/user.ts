import { defineStore } from 'pinia'
import { ref } from 'vue'
import ACCESS_ENUM from '@/access/ACCESS_ENUM'
import { UserControllerService } from '../../../generated'

export default defineStore('user', () => {
  const loginUser: any = ref({
    userName: '未登录',
  })

  const getLoginUser = async () => {
    const res = await UserControllerService.getLoginUserUsingGet()
    if (res.code === 0) {
      loginUser.value = res.data
    } else {
      loginUser.value = { ...loginUser.value, useRole: ACCESS_ENUM.NOT_LOGIN }
    }
  }

  return {
    loginUser,
    getLoginUser,
  }
})
