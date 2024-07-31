<template>
  <el-row id="header">
    <el-col :span="4" @click="goToHome" style="cursor: pointer">
      <div class="title-bar">COJ 判题系统</div>
    </el-col>
    <el-col :span="16">
      <el-menu mode="horizontal" :default-active="route.path" router>
        <el-menu-item
          v-for="item in visibleRoutes"
          :key="item.path"
          :index="item.path"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4" class="user">
      <el-dropdown v-if="loginUser.userName !== `未登录`">
        <div
          style="display: flex; align-items: center; gap: 10px; cursor: pointer"
        >
          <el-avatar>{{ loginUser.userName }}</el-avatar>
          {{ loginUser.userName }}
          <ArrowDown style="width: 1.1em" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div v-else>
        <el-button @click="login">登录</el-button>
        <el-button @click="register">注册</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { constantRoute } from '@/router/routes'
import { useRoute, useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import checkAccess from '@/access/checkAccess'
import { computed } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { REMOVE_TOKEN } from '@/utils/token'

const useStore = useUserStore()

const loginUser = useStore.loginUser
const router = useRouter()
const route = useRoute()

const visibleRoutes = computed(() => {
  return constantRoute[1].children?.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false
    }
    return checkAccess(loginUser, item.meta?.access)
  })
})

const goToHome = () => {
  router.push({
    path: `/`,
  })
}

const logout = () => {
  REMOVE_TOKEN()
  if (route.fullPath === '/questions') router.go(0)
  else goToHome()
}

const login = () => {
  router.push({
    path: `/user/login`,
  })
}

const register = () => {}
</script>

<style scoped lang="scss">
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.title-bar {
  display: flex;
  justify-content: center;
}

.user {
  display: flex;
  justify-content: center;
}
</style>
