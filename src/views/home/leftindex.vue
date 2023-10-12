<template>
  <div>
  <el-aside width="200px" class="menu" style="background-color: burlywood;">
    <!-- 切记想要让路由生效必须添加Router -->
    <el-menu default-active="1" class="el-menu-vertical-demo" router>
      <!-- 无子集 -->
      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 无子集 -->
      <el-menu-item index="/data">
        <i class="el-icon-menu"></i>
        <span slot="title">数据管理</span>
      </el-menu-item>

      <!-- 有子集 -->
      <el-submenu index="/information">
          <template slot="title">
            <i class="el-icon-menu"></i>信息管理</template>
          <el-menu-item index="/list" style="background-color:burlywood ;">列表管理</el-menu-item>
      </el-submenu>

    </el-menu>
  </el-aside>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  comments: {

  }
}
</script>
<style>
.el-menu-vertical-demo{
  background-color: burlywood;
}
</style>
