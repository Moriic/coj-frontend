<template>
  <div id="basicLayout">
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <GlobalHeader></GlobalHeader>
        </el-header>
        <el-main class="main">
          <router-view :key="route.fullPath" />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped lang="scss">
#basicLayout .header {
  margin-bottom: 16px;
}
</style>
