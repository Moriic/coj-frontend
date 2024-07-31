<template>
  <div id="userLoginView">
    <div class="title">用户注册</div>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" tooltip="密码不少于 8 位" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 120px">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { UserControllerService } from '../../../generated'
import { useRoute, useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import message from '@arco-design/web-vue/es/message'
import { SET_TOKEN } from '@/utils/token'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const form = reactive({
  userAccount: '',
  userPassword: '',
})

const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form)
  let redirect: string =
    route.query && route.query.redirect ? (route.query.redirect as string) : '/'
  // 登录成功
  if (res.code === 0) {
    SET_TOKEN(res.data.token)
    await userStore.getLoginUser()
    await router.push({
      path: redirect,
    })
  } else {
    message.error('登陆失败，' + res.message)
  }
}
</script>

<style scoped>
.title {
  margin: 100px auto 50px auto;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
