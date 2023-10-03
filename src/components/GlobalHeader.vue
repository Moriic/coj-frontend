<template>
  <el-row id="header">
    <el-col :span="4">
      <div class="title-bar">COJ</div>
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
      <div>{{ loginUser.username }}</div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { constantRoute } from '@/router/routes'
import { useRoute } from 'vue-router'
import useUserStore from '@/store/modules/user'
import checkAccess from '@/access/checkAccess'
import { computed } from 'vue'

const route = useRoute()
const useStore = useUserStore()

const loginUser = useStore.loginUser

const visibleRoutes = computed(() => {
  return constantRoute.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false
    }
    return checkAccess(loginUser, item.meta?.access)
  })
})
</script>

<style scoped lang="scss">
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
