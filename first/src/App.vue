<template>
  <div id="app">
    <el-container>
      <el-header>
        <myhead></myhead>
      </el-header>
      <el-container>
        <el-aside width="201px">
          <myslider></myslider>
        </el-aside>
        <el-container>
          <el-breadcrumb separator-class="el-icon-arrow-right" style="padding:10px;margin:10px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>

          </el-breadcrumb>
          <el-main>
             <router-view></router-view>
          </el-main>
        
         
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { myhead, myslider } from "./components";
export default {
  name: "App",
 
  components: {
    myhead,
    myslider
  },
   methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}

.el-header,
.el-footer {
  background-color: rgb(84, 92, 100);
  color: #333;
 
  line-height: 60px;
}

.el-aside {
  background-color: rgb(84, 92, 100);
  color: #333;
  
  line-height: 200px;
  height: 93vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
