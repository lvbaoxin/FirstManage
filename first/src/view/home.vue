<template>
  <div style="font-size:14px;">
     <el-row :gutter="10" >
      <el-col :span="8" class="kjrk">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>快捷入口</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item" style="overflow: hidden;">

            
           <el-col :span="8" >
    <el-button type="primary" icon="el-icon-circle-plus-outline">添加用户</el-button>
  </el-col>
  <el-col :span="8">
    <el-button type="primary" icon="el-icon-document">帖子管理</el-button>
  </el-col>
  <el-col :span="8">
    <el-button type="primary" icon="el-icon-question">投诉管理</el-button>
  </el-col>
  
 
  
          </div>
        </el-card>
      </el-col>
       <el-col :span="8" class="kjrk">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            <el-row :gutter="12">
  <el-col :span="8" class="kjrk">
    新增用户/300人
  </el-col>
  <el-col :span="8">
    新增用户/300人
  </el-col>
  <el-col :span="8">
    新增用户/300人
  </el-col>
</el-row>
          </div>
        </el-card>
      </el-col>
    <el-col :span="8" class="kjrk">
        <el-card class="box-card">
          
          <div class="text item">
           <iframe allowtransparency="true" frameborder="0" width="565" height="98" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=3&t=1&v=0&d=3&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=565&h=98&align=center"></iframe>
          </div>
        </el-card>
      </el-col> 
    </el-row> 


    <el-row :gutter="12">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            <column width="400px" height="300px" id="c1"></column>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            <pie width="400px" height="300px" id="c2"></pie>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            <pie width="400px" height="300px" id="c3"></pie>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { column, pie } from "@/components";
export default {
  data() {
      return {
        value: new Date()
      }
    },
  components: {
    column,
    pie
  }
};
</script>

<style  scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .kjrk .box-card{
    height:150px;
  }
  .box-card {
    width: 480px;
  }
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>