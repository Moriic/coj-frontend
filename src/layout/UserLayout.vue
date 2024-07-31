<template>
  <div id="userLayout">
    <el-container>
      <el-main class="main">
        <router-view :key="route.fullPath" />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
}
</style>
