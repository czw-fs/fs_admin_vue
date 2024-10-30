<script setup>

import {ref} from 'vue'
import {Menu as IconMenu,} from '@element-plus/icons-vue'

const isClose = ref(false)
const closeMenu = () => {
  isClose.value = !isClose.value
}

const handleOpen = async (key, keyPath) => {
  console.log(key, keyPath)
}

const handleClose = async (key, keyPath) => {
  console.log(key, keyPath)
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

<!--    <template v-for="route in routes">-->
<!--      &lt;!&ndash;      是否是文档&ndash;&gt;-->
<!--      <template v-if="route.meta.type = 'doc'">-->
<!--        <el-menu-item :index="route.path">-->
<!--          <el-icon>-->
<!--            <icon-menu/>-->
<!--          </el-icon>-->
<!--          <template #title>-->
<!--            <div class="middle-title">route.name</div>-->
<!--          </template>-->
<!--        </el-menu-item>-->
<!--      </template>-->

<!--      &lt;!&ndash;      是否是目录&ndash;&gt;-->
<!--      <template v-if="route.meta.type = 'menu'">-->
<!--        <el-sub-menu :index="route.path">-->
<!--          <template style="width: 100px;text-align: center" #title>-->
<!--            <el-icon>-->
<!--              <icon-menu/>-->
<!--            </el-icon>-->
<!--            <span class="middle-title">route1.name</span>-->
<!--          </template>-->

<!--          &lt;!&ndash;          判断是否有子文档&ndash;&gt;-->
<!--          <template v-if="route.children && route.children.length > 0">-->
<!--            &lt;!&ndash;            遍历子文档&ndash;&gt;-->
<!--            <template v-for="doc in route.children">-->
<!--              <el-menu-item :index="doc.path">-->
<!--                <el-icon>-->
<!--                  <icon-menu/>-->
<!--                </el-icon>-->
<!--                <template #title>-->
<!--                  <div class="middle-title">doc.name</div>-->
<!--                </template>-->
<!--              </el-menu-item>-->
<!--            </template>-->
<!--          </template>-->

<!--        </el-sub-menu>-->
<!--      </template>-->
<!--    </template>-->


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