<template>
    <div class="flexbox">
        <div class="itemflex logo"><router-link to="/"><img src="../assets/logo.png" alt=""></router-link></div>
        <div  class="itemflex">
            <el-menu
  
  class="el-menu-demo"
  mode="horizontal"
  
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  
</el-menu>
        </div>
    </div>
</template>

<script >
   
</script>

<style scoped>
.flexbox{display: flex;justify-content: space-between;align-content: center;}
.itemflex{box-sizing: border-box;}
.logo img{width:20%;padding:6% 0;}
</style>