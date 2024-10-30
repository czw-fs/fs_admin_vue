<script setup>
import Side from "@/layout/component/side/index.vue";
import Nav from "@/layout/component/nav/index.vue";

</script>

<template>
  <div class="layout">

    <div class="side">
      <Side></Side>
    </div>

    <div class="main">
      <div class="main-top">
        <Nav></Nav>
        <div class="main-tag">tagvue</div>
      </div>

      <RouterView></RouterView>
    </div>


  </div>
</template>

<style lang="less" scoped>
.layout{
  width: 100%;
  height: 100%;
  display: flex;

  .main{
    width: 100%;
    height: 100%;
    background-color: pink;
  }
}
</style>