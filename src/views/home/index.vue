<template>
    <div class="d1">
        <el-container>
            <!-- 左侧的导航栏 -->
          <leftindex/>
            <el-container>
                <el-header class="header">Aiden管理系统
                  <el-button class="exit" @click="exit()">退出</el-button>
                </el-header>
                <el-main style="height:638px"><router-view/></el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
//导入左侧菜单栏的首页
import leftindex from './leftindex.vue'
export default {
    data() {
        return {

        }
    },
    methods: {
         exit(){
          this.$router.push('/login')
         }
    },
    //这里引入的是自定义组件 例如左侧的导航栏
    components:{
    leftindex,
}
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 32px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .header{
    background-color: burlywood;
    margin-top: 0px;
  }
</style>