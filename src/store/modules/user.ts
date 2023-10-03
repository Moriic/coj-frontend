import { defineStore } from 'pinia'
import { ref } from 'vue'
import ACCESS_ENUM from '@/access/ACCESS_ENUM'

export default defineStore('user', () => {
  const loginUser = ref({
    username: 'cwc',
    userRole: ACCESS_ENUM.NOT_LOGIN,
  })

  return {
    loginUser,
  }
})
