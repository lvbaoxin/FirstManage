<template>
  <div>
    <el-table :data="userlist" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="tel" label="电话"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deluser(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:30px; text-align:center">
      <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userlist: [
        
      ]
    };
  },
  methods: {
    
    getuserlist() {
      this.$http.get(" http://localhost:3000/userlist")
        .then(res=>{
          console.log(res)
          this.userlist = res.data
        })
      
    },
    deluser(index,row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    
  },
  created () {
    this.getuserlist();
  },
};
</script>

<style  scoped>
</style>