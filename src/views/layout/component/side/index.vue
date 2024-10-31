<script setup>

import {ref} from 'vue'
import {Menu as IconMenu,} from '@element-plus/icons-vue'

const isClose = ref(false)
const closeMenu = () => {
  isClose.value = !isClose.value
}

const handleOpen = async (key, keyPath) => {
  // console.log(key, keyPath)
}

const handleClose = async (key, keyPath) => {
  // console.log(key, keyPath)
}



</script>

<template>
  <div class="side-title">fs</div>

  <el-button style="margin-right: 0;" type="primary" @click="closeMenu">c</el-button>
  <el-menu
      class="el-menu-vertical-demo"
      :collapse="isClose"
      @open="handleOpen"
      @close="handleClose"
      router
  >


        <el-menu-item index="/home">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <template #title>
            <div class="middle-title">首页</div>
          </template>
        </el-menu-item>

        <el-sub-menu index="/system">

          <template style="width: 100px;text-align: center" #title>
            <el-icon>
              <icon-menu/>
            </el-icon>
            <span class="middle-title">系统设置</span>
          </template>

          <el-menu-item index="/system/user">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <template #title>
              <div class="middle-title">用户管理</div>
            </template>
          </el-menu-item>

          <el-menu-item index="/system/role">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <template #title>
              <div class="middle-title">角色管理</div>
            </template>
          </el-menu-item>

          <el-menu-item index="/system/menu">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <template #title>
              <div class="middle-title">菜单管理</div>
            </template>
          </el-menu-item>
        </el-sub-menu>


  </el-menu>
</template>

<style lang="less" scoped>
.side-title {
  font-size: 25px;
  text-align: center;
  line-height: 50px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-sub-menu .el-menu-item {
  background-color: #ececec;
}

.middle-title {
  width: 100%;
  text-align: center;
}
</style>