<template>
  <div id="basicLayout">
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <GlobalHeader></GlobalHeader>
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped lang="scss">
#basicLayout .header {
  margin-bottom: 16px;
}

#basicLayout .main {
  background: aqua;
  margin-bottom: 16px;
}
</style>
