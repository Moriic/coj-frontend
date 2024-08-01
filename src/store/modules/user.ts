import { defineStore } from 'pinia'
import { ref } from 'vue'
import ACCESS_ENUM from '@/access/ACCESS_ENUM'
import { UserControllerService } from '../../../generated'
import { REMOVE_TOKEN } from '@/utils/token'

export default defineStore('user', () => {
  const loginUser: any = ref({
    userName: '未登录',
  })

  const getLoginUser = async () => {
    try {
      const res = await UserControllerService.getLoginUserUsingGet()
      loginUser.value = res.data
    } catch (error) {
      loginUser.value = { ...loginUser.value, useRole: ACCESS_ENUM.NOT_LOGIN }
    }
  }

  const resetStore = () => {
    REMOVE_TOKEN()
    loginUser.value = {
      userName: '未登录',
    }
  }
  return {
    loginUser,
    getLoginUser,
    resetStore,
  }
})
